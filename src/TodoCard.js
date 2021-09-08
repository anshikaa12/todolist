import './overall.css';
import { db } from './firebase_config';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';


const TodoCard = ({ id, task, inProgress }) => {

    function doneHandler() {
        db.collection("todo").doc(id).update({
            inProgress: !inProgress,
        })
    }
    function deleteTodo() {
        db.collection("todo").doc(id).delete();
    }

    return (
        <div className="todocard">
            <div className="Text-div">
                <h4>{task}</h4>
                <p>{inProgress ? "inProgress" : "Completed"}</p>
            </div>
            <div className="btns">
                <button
                    onClick={doneHandler}
                >{inProgress ? "Done" : "Undone"}</button>
                <button
                    onClick={deleteTodo}
                >delete</button>
            </div>
        </div>
    );
}

export default TodoCard;