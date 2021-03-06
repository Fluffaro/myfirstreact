import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Employee from "./Employee";
import PageNotFound from "./PageNotFound";
import AddEmployee from "../services/AddEmployee";

const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                        <Route exact path="/myfirstreact/" element={<Home/>}/>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/myfirstreact/employees" element={<Employee/>}/>
                        <Route exact path="/myfirstreact/add" element={<AddEmployee/>}/>
                        <Route exact path="/myfirstreact/employees/edit/:employeeId" element={<AddEmployee/>}/>
                        <Route exact path="*" element={<PageNotFound/>}/>
  

                </Routes>
            </BrowserRouter>
        </div>
            
            )
}

export default Router;