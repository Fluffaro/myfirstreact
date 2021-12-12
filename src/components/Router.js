import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Employee from "./Employee";
import PageNotFound from "./PageNotFound";


const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/myfirstreact" element={<Home />} />
                        <Route exact path="/employees" element={<Employee/>}/>
                        <Route exact path="*" element={<PageNotFound/>}/>
                                
                </Routes>
            </BrowserRouter>
        </div>
            
            )
}

export default Router;