import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="navigation-links">
                    <a href="#home">Home</a>
                    <a href="#about">About </a>
                    <a href="#projects">Projects</a>
        
                </div>
            </header>
        )
    }
}
export default Header;