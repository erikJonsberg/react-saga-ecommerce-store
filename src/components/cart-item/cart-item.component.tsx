import { FC } from 'react'
import {CartItemContainer, ItemImage, ItemDetails,ItemName} from './cart-item.styles';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
            <ItemName className="name">{name}</ItemName>
            <span className="price">{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;