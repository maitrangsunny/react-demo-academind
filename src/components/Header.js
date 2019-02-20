import React from 'react';

export const Header =(props)=> {   
   
    return(
        <div>
            <h1>This is header</h1>
            <ul class="list">
                <li class="list-item"><a href="#">User</a></li>
                <li class="list-item"><a href="#">About</a></li>
               
            </ul>
            {props.intro}
        </div>
    )
    
}
