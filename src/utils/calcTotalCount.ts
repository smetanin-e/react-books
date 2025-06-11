import { CartItem } from "../redux/slices/cartSlice"

export const calcTotalCount = (items:CartItem[]) => {
    return items.reduce((acc,obj) => acc + (obj.count || 0), 0)
}