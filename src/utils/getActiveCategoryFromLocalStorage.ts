export const getActiveCategoryFromLocalStorage = () => {
    const dataActiveCategory = localStorage.getItem('category');
   
    
    const dataSubCategory = localStorage.getItem('subCategory')
//dataActiveCategory ? JSON.parse(dataActiveCategory) :
//dataSubCategory ? JSON.parse(dataSubCategory) :
    const curentCategory = dataActiveCategory ? dataActiveCategory :'';
    const itSubCategory = dataSubCategory ? JSON.parse(dataSubCategory) : false;
    return {curentCategory, itSubCategory}
}