import axios from "axios";
import { BASE_URL } from "./db.json"

export class ProductsAPI {
    static async fetchProductList() {
        const response = await axios({ BASE_URL });
        return response.data.results[0]
    }
    // static async fetchByTitle(title) {
    //     const response = await axios(
    //         `${BASE_URL}search/${title}`
    //     )
    //     return response.data.results[0];
    // }
}

