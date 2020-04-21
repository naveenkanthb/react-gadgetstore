import React from 'react'
import {FaBars,FaCartPlus} from 'react-icons/fa'
import logo from '../images/logo.svg'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <ProductConsumer>
            { value => {
                const { cartItems,handleSidebar,handleCart} = value;
                return <NavWrapper>
                    <div className="nav-center">
                        <FaBars className="nav-icons" onClick={handleSidebar} />
                        <img src={logo} alt="company logo" />
                        <div className="nav-cart">
                            <FaCartPlus className="nav-icons" onClick={handleCart} />
                            <div className="cart-items">{cartItems}</div>
                        </div>
                    </div>

                </NavWrapper>
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
position:-webkit-sticky;
position:sticky;
top:0;
width:100%;
padding: 1rem 1.5rem;
background:var(--mainGrey);
border: 3px solid var(--primaryColor);

.nav-center{
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:1170px;
    margin: 0 auto;
}

.nav-icons{
    font-size:1.5rem:
    cursor:pointer;
}

.nav-cart{
    position:relative;
}

.cart-items{
    background:var(--primaryColor);
    color:var(--mainWhite);
    font-size:0.8rem;
    position:absolute;
    top:-8px;
    right:-8px;
    padding: 0 5px;
    border-radius:50%;
}
`
