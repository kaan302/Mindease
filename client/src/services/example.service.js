import axios from "axios";

// Backend URL
const API_URL = "http://localhost:3000"

class ExampleService {

    getExampleId(id) {
        return axios.get(API_URL + "/example/" + id)
    }
}

export default new ExampleService()