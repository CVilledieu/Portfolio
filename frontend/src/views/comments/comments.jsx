import './comments.css';
import {Comments} from './data.js';
import React, {useState} from 'react';

export default function CommentsPage() {
    const cList = Comments.map(com => {
        return(
          <div className='comment-stack-title' key={com.id}>
            {com.Title}
        </div>  
        )
        
    });
    return (
        <div id="comments-page">
            <div id="comment-stack">
                {cList}
            </div>
            <div id="corkboard">
                <p>corkboard content</p>
            </div>
        </div>
    );
}


function CreateList() {
    
    return (
        <div id="comments-div">
            <div id="comment-stack">
                {cList}
            </div>
            <div id="corkboard">

            </div>
        </div>
    );
}

function DisplayComment({children}) {
    return (
        <div className='comment-stack-title'>
            {children}
        </div>
    );
}


