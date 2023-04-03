import React from 'react';
import './Header.css';

function Header(props) {
    console.log(props);
    const { title } = props;
    return (
        <div className='headerStyle'>
            <h1 id='title'>{title}</h1>
        </div>
    );
}

export default Header;