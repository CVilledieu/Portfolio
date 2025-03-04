import './comments.css';
import {CommentData} from './data.js';
import React, {useState} from 'react';


export default function CommentsPage() {
    const listState = useState(CommentData);
    const [current, setCurrent] = useState(null);
    return (
        <div id="comments-page">
            <title>I'm Just Saying</title>
            <div id="comment-stack">
                <CommentsList lState={listState} bState={setCurrent}/>
            </div>
            <div id="comment-board">
                <CommentBoard comment={current}/>
            </div>
        </div>
    );
}

function CommentsList({lState, bState}) {
    const [currentList, setCurrentList] = lState;
    const List = currentList.map(com => {
        return(
        <div className='comment-stack-title targetable' key={com.id} onClick={() => updatePageState(com.id, setCurrentList, bState)} >
            {com.Title}
        </div>  
        );
    });
    return (
        <div id="comment-stack-list">
            {List}
        </div>
    );
}

function updatePageState(id, listSetFunc, boardSetFunc) {
    updateListState(id, listSetFunc);
    updateBoardState(id, boardSetFunc);
}

function updateListState(id, setFunc) {
    const newList = CommentData.filter(com => com.id !== id);
    setFunc(newList);
}

function updateBoardState(id, setFunc) {
    const newBoard = CommentData.find(com => com.id === id);
    setFunc(newBoard);
}

function CommentBoard({comment}) {
    return (
        <div id="comment-board-inner">
            <div id="comment-board-title">
                {comment ? comment.Title : "Select a comment"}
            </div>
            <div id="comment-board-body">
                {comment ? comment.Body : "Select a comment to read"}
            </div>
        </div>
    );
}