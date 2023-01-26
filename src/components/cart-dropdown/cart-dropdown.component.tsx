import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { useCallback } from 'react';

import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = useCallback(() => {
        navigate('/checkout');
    }, [navigate]);
    return(
        <CartDropdownContainer>
        <CartItems>
        {
        cartItems.length ? cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                )) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
        }
        </CartItems>
        <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>Go to checkout</Button>

        </CartDropdownContainer>
    )
}

export default CartDropdown