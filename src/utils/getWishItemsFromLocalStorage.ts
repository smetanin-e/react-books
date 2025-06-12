import { ItemBook } from "../redux/slices/itemSlice";

export const getWishItemsFromLocalStorage = () => {
 const data = localStorage.getItem('wish');
 
 
 const items:ItemBook[] = data ? JSON.parse(data) : []
 return items
}