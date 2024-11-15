import React, { useState } from 'react';
import './AddTask.css';
import { fetchWithAuth } from '../../../utils/services/interceptor';
import API_ENDPOINTS from '../../../config/apiConfig';
import { getID } from '../../../utils/services/auth';

export default function AddTask({onTaskAdded}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userId = getID();
    try {
      const obj =  {
        title: title,
        author: author,
        description: description,
        userId: userId,
      };
      console.log(obj);
      const response = await fetchWithAuth(API_ENDPOINTS.addBooks, obj)
      console.log(response);
      // onTaskAdded(response.data.taskId); // Notify parent component about the new task
      onTaskAdded();
      clearForm();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setAuthor('');
  };

  return (
    <div className="add-task-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Book Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" className="add-task-button">Add Book</button>
      </form>
    </div>
  );
}
