import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const EmpListing = () => {
    const[user,setUser]=useState(null)
    const navigate=useNavigate()

    useEffect(()=>{
fetch(" http://localhost:8000/employee").then((res)=>{
    return res.json()

}).then((res)=>{
    console.log(res);
    setUser(res)
})

    },[])
    function LoadEdit(id){
        navigate("/employee/edit/" + id);

    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    function LoadDetail(){

    }
  return (
    <div className='conatiner'>
        <div className='card'>
            <div className='card-title'>
                <h1>jwddk</h1>
            </div>
            <div className='card-body'>
                <div className='divbtn'>
                <Link to="employee/create" className="btn btn-success">Add New (+)</Link>

                </div>
            <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                        <tr>
                        <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((item)=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                   
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

           

            

            </div>
            
          

        </div>
    </div>
  )
}

export default EmpListing