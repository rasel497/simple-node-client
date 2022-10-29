import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users/')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div className="App">
      <h2>User: {users.length}</h2>

      <div className="l">
        {
          users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
        }
      </div>

    </div>
  );
}

export default App;
