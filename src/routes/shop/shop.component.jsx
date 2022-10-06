import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import {} from './shop.styles';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(setCategories(categoriesArray));
        }
        
        getCategoriesMap();
     }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
}

export default Shop;