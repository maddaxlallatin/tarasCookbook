import axios from "axios";


export default axios.create({

    baseURL: "http://api.tarascookbook.live/cookbook/api/v1",
    headers: {
        " Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    }
});