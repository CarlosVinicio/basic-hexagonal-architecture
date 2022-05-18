import { http } from '../../infrastructure/http/http'
import {ProductDTO} from "../http/dto/ProductDTO";

const  getProducts = async () => {
    const products = await http.get<ProductDTO[]>('http://localhost:3001/products')
    return products.map((productDto): Product => ({
        id: productDto.product_id,
        title: productDto.title,
        price: Number(productDto.price)
    }))
}
// MORE METHODS
// ...

export const productRepository = {
    getProducts
}
