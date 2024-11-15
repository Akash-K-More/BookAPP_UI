import React from 'react';
import './ListBooks.css'
import API_ENDPOINTS from '../../../config/apiConfig';
import { getID } from '../../../utils/services/auth';

export default function ListBooks({ tasks, onDeleteTask, isMyShelf }) {

    const handleDelete = async (id) => {
        let userId = getID();

        const headers = {
            'Content-Type': 'application/json',
            'user-id': userId ? userId : '',
        };

        const response = await fetch(API_ENDPOINTS.deleteBooks+id, {
            method: 'DELETE',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        onDeleteTask();
    }

    return (
        <>
            <div className="books-list-container">
                {tasks?.map((task) => (
                    <div className="card" key={task._id}>
                        <h3 className="card__title">{task.title}
                        </h3>
                        <p className="card__content">{task.description} </p>
                        <div className="card__author">
                            {task.author}
                        </div>
                        {
                            isMyShelf ?
                                <button className='delete-btn' onClick={() => handleDelete(task._id)}>Delete</button>
                                :
                                <></>
                        }
                    </div>
                ))}
            </div>
        </>
    );
}
