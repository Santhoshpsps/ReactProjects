import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header =(props)=>{
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Swiggy</h1>
                <HeaderCartButton onClick={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="Meals Img"></img>
            </div>
        </React.Fragment>
    );
}

export default Header;