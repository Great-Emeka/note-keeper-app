import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

let date = new Date();
let fullYear = date.getFullYear();

const Footer = () => {
    return(
        <footer>
            <p> @Copyright {fullYear} || Made with <FavoriteIcon className="fav-icon" fontSize="small" /> from GREAT</p>
        </footer>
    )
}

export default Footer;