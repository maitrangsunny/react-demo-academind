import React, { Component } from 'react';

export const Header =(props)=> {   
   
    return(
        <div>
            <h1>This is header</h1>
            {props.intro}
        </div>
    )
    
}
