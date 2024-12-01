import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import './Navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../assets/007 crown.svg'


const Navigation = () => {
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
                    <Link className="nav-link" to='/sign-in'>
                        Sign In
                    </Link>

                </div>
            </div>
            <Outlet/>

        </Fragment>

    )
}

export default Navigation;