import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import {} from './shop.styles';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
}

export default Shop;