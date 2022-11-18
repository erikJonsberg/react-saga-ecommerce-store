import { useState, useEffect, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { useSelector } from 'react-redux';
import {selectCategoriesMap, selectCategoriesIsLoading} from '../../store/categories/category.selector'

import {CategoryContainer, CategoryTitle} from './category.styles';


const Category = () => {
   const {category} = useParams();
   console.log('render/re-reendering categories component')
   const categoriesMap = useSelector(selectCategoriesMap);
   const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setPorducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setPorducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        {isLoading ? (
            <Spinner/>
        ) : (
            <CategoryContainer>
            { products && 
            products.map((product) => (
                <ProductCard key={product.id} product={product}/>
        ))}
        </CategoryContainer>
        )}
        
        </Fragment>

    )
}


export default Category;