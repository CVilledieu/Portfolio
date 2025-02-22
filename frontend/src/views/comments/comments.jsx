import './comments.css';
import {Comments} from './data.js';
import React, {useState} from 'react';

export default function CommentsPage() {
    return (
        <div id="comments-div">
            <div id="comment-stack">
                <p>Comment title</p>
            </div>
            <div id="corkboard">
                <p>corkboard content</p>
            </div>
        </div>
    );
}


function temp() {

    const [index, setIndex] = useState(0);
    const cList = Comments.map(com => {
        <DisplayComment>
            {com.Title}
        </DisplayComment>
    });
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
