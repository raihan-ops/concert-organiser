import React from 'react';
import cover from './Image/cover.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className ="nav-bar">
                <ul>
                    <a href="">Home</a>
                </ul>
                <ul>
                    <a href="">About</a>
                </ul>
                <ul>
                    <a href="">Contact Us</a>
                </ul>
                <ul className="search">
                    <div className="search-field">
                        <input type="text" />
                        <button>Search</button>
                    </div>
                </ul>

                <ul className="login">
                    <a href="">Login</a>
                </ul>
               
            </nav>
           <img src={cover} alt="" />

           <h1>Concert Organiser.</h1>
           <h5>Best Organiser In Your City</h5>
           <h2>Budget Should Be : 10M $ </h2>

        </div>
    );
};

export default Header;