import httpclient from "../commons/httpclient"

const getEmployees = () =>{
    return httpclient.get('/api/employees');
};

export default {getEmployees}