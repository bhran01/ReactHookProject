import React from 'react'
import { useState } from 'react'

export default function Register() {
  //1. Hook Variable Area
  //const [stateVariableName,setFunction]=setState(initialValue)
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let sendData = () => {
    let data = {
      username: username,
      email: email,
      password: password
    }

    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.status === 400) {
          alert(res.statusText);
        } else {
          return res.json();
        }
      }
      )
      .then((data) => {
          console.log(data.user);
          if (data.jwt)
            alert("Registration Completed")
        })
      .catch(() => { });

  }

  return (
    <form class="w-25 offset-4">
      <h1>Register Form</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputUsername" className="form-label">Username</label>
        <input type="text" name="username" onChange={e => setUsername(e.target.value)} className="form-control" id="exampleInputUsername" aria-describedby="username" />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" name="email" onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="button" onClick={sendData} className="btn btn-primary">Register</button>
    </form>
  )
}
