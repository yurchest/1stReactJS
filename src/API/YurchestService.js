import axios from "axios";

export default class YurchestService {
    static async getAll() {
        return await axios.get("http://192.168.1.66:8000/api/newslist/");
    }
}