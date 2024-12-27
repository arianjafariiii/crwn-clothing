import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import './Navigation.styles.scss'
import CartIcon  from "../../components/cart-icon/cart-icon.component.jsx"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx"
import { ReactComponent as CrwnLogo } from '../../assets/007 crown.svg'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from '../../utils/firebase.utils.js'
import { CartContext } from "../../contexts/cart.context.jsx"


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)
    
    return(
        <Fragment >
            <div className="navigation">
                <Link className="logo-cantainer" to='./'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}> 
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav-link" to='/auth'>
                            Sign In
                        </Link>
                    )}
                    <CartIcon/>
                    

                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>

        </Fragment>

    )
}

export default Navigation;