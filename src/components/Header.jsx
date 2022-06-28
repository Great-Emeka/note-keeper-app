import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Header = () => {
    return(
        <header>
            <h1>
                <MenuBookIcon 
                    className="header-icon" 
                    fontSize="large"
                /> 
                Note Keeper
            </h1>
        </header>
    )
}

export default Header;