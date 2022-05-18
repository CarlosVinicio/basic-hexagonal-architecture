import {Product} from "../models/Product";
import {Basket} from "../models/Basket";


const addProductToBasket = (product: Product ): Basket => {
    return {
        id: "1",
        items: [product]
    }
}

export const basketService = {
    addProductToBasket
}
