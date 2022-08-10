import React from 'react'
import './Header.css';

const Header = (props) => {
    const {title, description} = props;
    return <div className='head'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
}

export default Header;