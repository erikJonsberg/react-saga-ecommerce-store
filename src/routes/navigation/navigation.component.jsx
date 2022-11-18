import {Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


import ShoppingIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {selectIsCartOpen} from '../../store/cart/cart.selector.js';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { 
  NavigationContainer, 
  NavLinks, 
  NavLink, 
  LogoContainer 
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen);
  
const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
        <CrwnLogo className="logo"/>
      </LogoContainer>
      
        <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>

            {
              currentUser ? (<NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>) 
              : <NavLink to='/auth'>SIGN IN</NavLink>
            }
            <ShoppingIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  );

};

export default Navigation;