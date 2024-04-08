import React from 'react'

export default function Register() {
  //1. Hook Variable Area



  let sendData = () => {
    let data = {
      username: "vipin",
      email: "vipin@gmail.com",
      password: "vipin@123"
    }

    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST',
      headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body : JSON.stringify(data)
   })
   .then(
    (res) => { res.json() })
   .then(
    (data) => {
      console.log(data);
    })
    .catch(() => { });
    alert("Registration Completed")
}

return (
  <form class="w-25 offset-4">
    <h1>Register Form</h1>
    <div className="mb-3">
      <label htmlFor="exampleInputUsername" className="form-label">Username</label>
      <input type="text" name="username" className="form-control" id="exampleInputUsername" aria-describedby="username" />

    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="button" onClick={sendData} className="btn btn-primary">Register</button>
  </form>
)
}
