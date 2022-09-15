import {CheckoutItemContainer, ImageContainer, CheckoutItemName, CheckoutItemQuantity, CheckoutItemPrice, Arrow, CheckoutItemValue, CheckoutItemImage, CheckoutItemRemove} from './checkout-item.styles';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context'


const CheckoutItem = ({cartItem}) => {
const {name, imageUrl, price, quantity} = cartItem;
const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)

const clearItemHandler = () => clearItemFromCart(cartItem);
const addItemHandler = () =>  addItemToCart(cartItem);
const removeItemHandler = () =>  removeItemFromCart(cartItem);

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