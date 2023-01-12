import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import {
    CheckoutItemContainer, 
    ImageContainer, 
    CheckoutItemName, 
    CheckoutItemQuantity, 
    CheckoutItemPrice, 
    Arrow, 
    CheckoutItemValue, 
    CheckoutItemImage, 
    CheckoutItemRemove
} from './checkout-item.styles';

import { CartItem } from '../../store/cart/cart.types';

type CheckoutItemProps = {
    cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = ({cartItem}) => {
const {name, imageUrl, price, quantity} = cartItem;
const cartItems = useSelector(selectCartItems);
const dispatch = useDispatch();

const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
const addItemHandler = () =>  dispatch(addItemToCart(cartItems, cartItem));
const removeItemHandler = () =>  dispatch(removeItemFromCart(cartItems, cartItem));

return (
    <CheckoutItemContainer>
        <ImageContainer>
            <CheckoutItemImage src={imageUrl} alt={`${name}`}/>
        </ImageContainer>
        <CheckoutItemName>{name}</CheckoutItemName>
        <CheckoutItemQuantity>
        <Arrow onClick={removeItemHandler}>
            &#10094;
        </Arrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <Arrow onClick={addItemHandler}>
            &#10095;
        </Arrow>
        </CheckoutItemQuantity>
        <CheckoutItemPrice>{price}</CheckoutItemPrice>
        <CheckoutItemRemove onClick={clearItemHandler}>&#10005;</CheckoutItemRemove>
    </CheckoutItemContainer>
)
}

export default CheckoutItem;