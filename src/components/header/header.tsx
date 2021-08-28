import React from 'react';
import { HeaderContainer } from "./headerStyle";

const Header = () => {
    return (
        <HeaderContainer>
            <div className="wrap">
                <div className="logo">
                    <img src="http://localhost:3000/assets/2.png" alt="Logo" />
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header;