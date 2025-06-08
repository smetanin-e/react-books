import { changeCategory, isItSubCategory } from "../redux/slices/categorySlice";
import { useAppDispatch } from "../redux/store"

//кастомный хук для изменения активной категории, чтобы избежать дублирование
//кода в разных компонентах

const useCategoryActions = () => {
    const dispatch = useAppDispatch()

    const setCategoryActive = (item: string) => {
        dispatch(changeCategory(item));
      };
      const setIsItSubCategory = (value: boolean) => {
        dispatch(isItSubCategory(value));
      };

    return {
        setCategoryActive,
        setIsItSubCategory
    }
}
export default useCategoryActions