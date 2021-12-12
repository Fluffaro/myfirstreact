import employeeService from "../services/employeeService";
import {useEffect, useState } from "react";

const Employee = () =>{
    const[Employees, setEmployees] = useState([]);
    
    useEffect(
            () =>{
                employeeService.getEmployees()
                .then(
                response =>{
                setEmployees(response.data);
                }
            )
                .catch(
                    () =>(
                        console.log("pasensya ule")
                )
            );
        }
    );
    return(
        <div className="container">
            <h3>List of Employees</h3>
            <div>
                <table className="table table-hover table-light table-striped">
                <thead>
        <tr className="table-danger">
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                    </tr>
    </thead>

    <tbody>
                        {
                        Employees.map(
                            Employee =>(
                                <tr>
                                    <td>{Employee.name}</td>
                                    <td>{Employee.location}</td>
                                    <td>{Employee.department}</td>
                                </tr>
                            )
                        )
                    }
    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Employee