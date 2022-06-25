import React from 'react';

let date = new Date();
let fullYear = date.getFullYear();

const Footer = () => {
    return(
        <footer>
            <p> @Copyright {fullYear}</p>
        </footer>
    )
}

export default Footer;