import React from 'react'

const Navbar = () =>{
    return(
        <>
            <div className="navSection">
                <div className="title">
                    <h2>E-Mart</h2>
                </div>
                <div classNae="search">
                    <input type="text" placeholder="search.."/>
                </div>
                <div className="user">
                    <div className="user-detail">Sign IN/Signup</div>
                    <div className="cart">cart</div>
                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <li>Mobiles</li>
                    <li>Computers</li>
                    <li>Watches</li>
                    <li>Men Fashion</li>
                    <li> Women Dressing</li>
                    <li>Furniture</li>
                    <li>AC</li>
                    <li>Kitchen</li>
                    <li>TV's</li>
                    <li>Speakers</li>
                    <li>Books</li>
                </ul>
            </div>
        </>
    )
}
export default Navbar