import { api } from "../../../lib/axios"
import type { Products } from "../dtos/products";

const ENDPOINT = '/products?key=6cef9860'

export const ProductService = {
    async listall(): Promise<Products[]>{
        const result = await api.get<Products[]>(ENDPOINT);
        return result.data;
    }
}

