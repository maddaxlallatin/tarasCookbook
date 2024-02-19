import axios from "axios";


export default axios.create({

    baseURL: "http://www.tarascookbook.live:8080/cookbook-backend-0.0.1-SNAPSHOT/api/v1",
    headers: {
        " Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    }
});