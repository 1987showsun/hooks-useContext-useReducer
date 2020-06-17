/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import React from 'react';
import { Link }from "react-router-dom";

export default () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}