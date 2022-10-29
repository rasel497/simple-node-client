import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users/')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  //hnadleAddNewUser
  const hnadleAddNewUser = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUsers = [...users, data]
        setUser(newUsers);
      })
      .catch(err => console.error(err))

    form.reset();

  }


  return (
    <div className="App">
      <h2>User: {users.length}</h2>

      <form onSubmit={hnadleAddNewUser}>
        <input name='name' type="text" placeholder='your name' /> <br />
        <input name='email' type="text" placeholder='your email' /> <br />
        <button>Add user</button>
      </form>
      <div className="l">
        {
          users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
        }
      </div>

    </div>
  );
}

export default App;
