import { productRepository } from '../../infrastructure/repositories/product.repository'

const getProducts = () => {
    return productRepository.getProducts();
}

export const productService = {
    getProducts
}
