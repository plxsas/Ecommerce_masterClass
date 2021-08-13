import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


const navbar = () => ({
    isAuthenticated
}) => {
    const authLinks = (
        <li className='nav-item'>
            <NavLink
                className='nav-link' 
                href='!#'
            >
                Logout
            </NavLink>
        </li>
    );
    const guestLinks = (
        <Fragment>
            <li className='nav-item'>
                <NavLink
                    className='nav-link' 
                    href='/login'
                >
                    Login
                </NavLink>
            </li>

            <li className='nav-item'>
                <NavLink
                    className='nav-link' 
                    href='/signup'
                >
                    Sign Up
                </NavLink>
            </li>
        </Fragment>

    );

    const getNavbar = () => (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>Shop Time</Link>
            <button 
                className='navbar-toggler' 
                type='button' 
                data-toggle='collapse' 
                data-target='#navbarNav' 
                aria-controls='navbarNav' 
                aria-expanded='false' 
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink 
                            className='nav-link' 
                            exact
                            to='/'
                        >
                            Home
                        </NavLink>
                    </li>
                    {
                        isAuthenticated ? authLinks : guestLinks
                    }
                </ul>
            </div>
        </nav>
    );

    
    return (
        <Fragment>
            {getNavbar()}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(navbar);