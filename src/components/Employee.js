import {useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import {Link} from "react-router-dom";

const Employee = () => {

    const[employees, setEmployees] = useState([])

    useEffect(
            () => {
      refreshEmployeeTable();
    }
    )

    const refreshEmployeeTable = () =>{
        employeeService.getEmployees()
            .then(
                response => {
                    setEmployees(response.data)

                }
            )
            .catch(
                () =>
                {
                    console.log("got an error!")
                }
            )

    }

    const deleteEmployee = (employeeId) =>{
        employeeService.deleteEmployee(employeeId)
            .then(
                response =>{
                    console.log("successfully deleted!")
                    refreshEmployeeTable();
                }
            )
            .catch(
                error =>{
                    console.error("got an errorE!", error)
                }
            )

    }

    return(
            <div>
                <h3> 
                    List of Employees </h3>
                <div className="container ">
                    <table className = "table table-hover table-light table-striped" >
                    <thead>
                    <tr class = "table-danger"> 
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                        {
                            employees.map(
                                    employee => (
                                        <tr key={employee.employeeId}>
                                            <td>{employee.name}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.location}</td>
                                            <td>
                                                <div className="d-grid gap-2 d-md-flex justify-content-center">
                                                <Link className="btn btn-outline-primary" to={`/myfirstreact/employees/edit/${employee.employeeId}`}>Update</Link>
                                                <button className="btn btn-outline-danger" onClick={(e)=>deleteEmployee(employee.employeeId)}>Delete</button>
                                                </div>
                                            </td>

                                        </tr>
                                                )
                            )
                        }
                        </tbody>
                        
                    </table>
                </div>
            </div>
            )
}

export default Employee