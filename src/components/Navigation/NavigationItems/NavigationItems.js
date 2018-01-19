import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../../Navigation/NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder </NavigationItem> 
        <NavigationItem link = "">Authentication</NavigationItem>:
        <NavigationItem link = "">Logout</NavigationItem>
    </ul>
)


export default NavigationItems;