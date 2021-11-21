import helloServices from "../services/helloServices";
import {useEffect, useState } from "react";
const Hello = () =>{
    
    //react hooks
    const[hello, setHello] = useState("sensya");
    useEffect( () =>{ // no name function / anonymous
        helloServices.getHello() // promise
                .then(response => {
                    setHello(response.data);
        })
                .catch(err => {
                    console.log("something went wrong!");
        });
    }   
    );
    return hello;
};
export default Hello
    