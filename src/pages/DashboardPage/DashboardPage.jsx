import React, { useState, useEffect } from 'react';
import AddTask from './AddTask/AddTask';
import ListBooks from './ListTasks/ListBooks';
import API_ENDPOINTS from '../../config/apiConfig';
import { getID } from '../../utils/services/auth';

import './DashboardPage.css'

export default function DashboardPage() {
  const [books, setBooks] = useState([]);
  const [myShelfActive, setMyShelfActive] = useState(false);


  const fetchTasks = async () => {
    let userId = getID();

    const headers = {
      'Content-Type': 'application/json',
      'user-id': userId ? userId : '',
    };

    let api_link;
    console.log(myShelfActive, "user")
    if (myShelfActive) {
      api_link = API_ENDPOINTS.getBookByID + userId;
    } else {
      api_link = API_ENDPOINTS.getBooks;
    }

    const response = await fetch(api_link, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Parse the response body as JSON
    setBooks(data.books); // Set the tasks state with the retrieved tasks
    console.log("Fetched tasks:", data.books); // Log the tasks
  };

  useEffect(() => {
    fetchTasks();
  }, [myShelfActive]);

  const handleTaskAdded = () => {
    fetchTasks();
  };


  const handleDeleteTask = async (id) => {
    // await axios.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  // 
  const toggleShelfStatus = async () => {
    setMyShelfActive(prevState => !prevState);
    // fetchTasks();
  }

  return (
    <div className="dashboard">
      <div className="toggle-btn">
        <input type="checkbox" id="toggle" className="toggleCheckbox" onClick={toggleShelfStatus}/>
        <label htmlFor="toggle" className="toggleContainer">
          <div>Global Library</div>
          <div>My Shelf</div>
        </label>
      </div>
      <hr />
      {/* <h1 style={{ textAlign: "center" }}>To-Do Dashboard</h1> */}
      {
        myShelfActive ? 
        <div className="">
          <AddTask onTaskAdded={handleTaskAdded} />
        </div>
        :
        <></>
      }
      <ListBooks tasks={books}  onDeleteTask={handleDeleteTask} isMyShelf={myShelfActive} />
    </div>
  );
}
