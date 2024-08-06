import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <div className="navSection">
                <div className="title">
                    <h2>E-Mart</h2>
                </div>
                <div classNae="search">
                    <input type="text" placeholder='Search.....'/>
                </div>
                <div className="user">
                    <div className="user-detail">Sign IN/Signup</div>
                    <div className="cart">cart</div>
                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/mobiles'>
                        <li>Mobiles</li>
                    </Link>
                    <Link to="/computers">
                        <li>Computers</li>
                    </Link>
                    <Link to ="/watch">
                        <li>Watches</li>
                    </Link>
                    <Link to ='/men'>
                        <li>Men Fashion</li>
                    </Link>
                    <Link to ="/woman">
                        <li> Women Dressing</li>
                    </Link>
                    <Link to ='/furniture'>
                        <li>Furniture</li>
                    </Link>
          
                    <Link to ='/ac'>
                        <li>AC</li>
                    </Link>
                    <Link to ='/kitchen'>
                        <li>Kitchen</li>
                    </Link>
           
                    <Link to ='/tv'>
                        <li>TV's</li>
                    </Link>
            
                    <Link to ='speaker'>
                        <li>Speakers</li>
                    </Link>

                    <Link to ='book'>
                        <li>Books</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}
export default Navbar