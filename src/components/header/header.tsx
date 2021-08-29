import React from 'react';
import { HeaderContainer } from "./headerStyle";

const Header = () => {
    return (
        <HeaderContainer data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    {/* data-test is to tell other developers 
                    can not change logImg, 
                    beacuse it is in a test */}
                    <img data-test="logoImg" src="http://localhost:3000/assets/2.png" alt="Logo" />
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header;