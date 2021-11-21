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
        <div>
            <h3>List of Employees</h3>
            <div>
                <table border = "1">
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                    </tr>
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
                </table>
            </div>
        </div>
    );
};

export default Employee