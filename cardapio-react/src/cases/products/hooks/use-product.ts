import { ProductService } from "../services/product-services";

export function useProduct() {
    return ProductService.listall()
}