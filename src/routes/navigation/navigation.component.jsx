import { Outlet } from 'react-router-dom';
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import ShoppingIcon from '../../components/cart-icon/cart-icon.component';
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import {signOutUser} from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  


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