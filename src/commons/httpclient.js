import axios from "axios";

export default axios.create({
        baseURL:'https://myfirstreactngl.herokuapp.com/',
        headers:{
            'Content-Type':'application/json'
        }
})




