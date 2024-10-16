import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/styles.css';

function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; 2024 Your Website. <Link to="/LegalPage"> All rights reserved.</Link> 
            </p>
        </footer>
    );
}

export default Footer;