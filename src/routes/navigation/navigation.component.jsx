import { Outlet, Link } from 'react-router-dom';
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import ShoppingIcon from '../../components/cart-icon/cart-icon.component';
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';
import {signOutUser} from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  


  return (
    <Fragment>
      <div className="navigation">
      <Link className="logo-container" to='/'>
        <CrwnLogo className="logo"/>
      </Link>
      
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP</Link>

            {
              currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) 
              : <Link className="nav-link" to='/auth'>SIGN IN</Link>
            }
            <ShoppingIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </Fragment>
  );

};

export default Navigation;