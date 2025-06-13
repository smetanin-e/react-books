import { ItemBook } from "../redux/slices/itemSlice";

type paginationProps = {
    items: ItemBook[]
    currentPage:number
    postsPerPage:number
    
}

export const pagination = (items:ItemBook[], currentPage:number, postsPerPage:number) => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return items.slice(indexOfFirstPost, indexOfLastPost)
}
