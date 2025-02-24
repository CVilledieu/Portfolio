import './comments.css';
import {Comments} from './data.js';
import React, {createContext, useContext, useState} from 'react';

const CardCtx = createContext({
    cardList: [],
    setCardList: () => {}
});

export default function CommentsPage() {
    const cList = Comments.map(com => {
        return(
        <div className='comment-stack-title targetable' key={com.id} onClick={() => updateCtx(com)} >
            {com.Title}
        </div>  
        );
    });
    return (
        <div id="comments-page">
            <div id="comment-stack">
                <div id='comment-stack-list'>
                    {cList}
                </div>
            </div>
            <Corkboard />
        </div>
    );
}

function updateCtx(com) {
    const maxCards = 3;
    const {cardList, setCardList} = useContext(CardCtx);
    if (cardList.length < maxCards) {
     setCardList(com);
    } else {
        console.log('Card limit reached');
    }
}


function Corkboard() {
    const [cardList, setCardList] = useState([]);
    const value = {cardList, setCardList};
    return (
        <div id="corkboard-container">
            <div id='corkboard'>
                <CardCtx.Provider value={value}>
                    <CommentCard props={cardList} />
                </CardCtx.Provider>
            </div>
        </div>
    );
}

function CommentCard({props}) {
    return (
        <div className='comment-card'>
            <div className='comment-card-title'>
                {props.Title}
            </div>
            <div className='comment-card-body'>
                {props.Body}
            </div>
        </div>
    );
}