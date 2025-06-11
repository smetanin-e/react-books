import { CartItem } from "../redux/slices/cartSlice";
import { calcTotalCount } from "./calcTotalCount";
import { calcTotalPrice } from "./calcTotalPrice"

export const getCartItemsFromLocalStorage = () => {
    const data = localStorage.getItem('cart')
    
    const items:CartItem[] = data ? JSON.parse(data) : []
    const totalCount = calcTotalCount(items)
    const totalPrice = calcTotalPrice(items);
    
        return {
            items,totalCount,totalPrice
        }
    
}