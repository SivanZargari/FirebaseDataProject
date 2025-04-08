import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        // כעת כל מסמך מקבל את ה-ID שלו
        const usersWithId = response.data.map((user, index) => ({
          id: index, // תוכל לשים כאן את ה-ID של Firebase אם יש לך
          ...user,
        }));
        setUsers(usersWithId);
      })
      .catch(error => {
        console.error("שגיאה בשליפת הנתונים:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>רשימת משתמשים</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}  {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
