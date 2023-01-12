import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import {} from './shop.styles';
import { useEffect } from 'react';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
     }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
}

export default Shop;