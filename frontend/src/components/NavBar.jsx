// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={navStyles}>
            <h1 style={titleStyles}>Task Tracker</h1>
            <div style={linksContainerStyles}>
                <Link to="/" style={linkStyles}>
                    Home
                </Link>
                <Link to="/task-details" style={linkStyles}>
                    Task Details
                </Link>
            </div>
        </nav>
    );
};

const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    color: '#fff',
};

const titleStyles = {
    margin: 0,
    fontSize: '24px',
};

const linksContainerStyles = {
    display: 'flex',
    gap: '15px',
};

const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
};

export default NavBar;
