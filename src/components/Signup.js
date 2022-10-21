import React from "react"
import { Link } from 'react-router-dom'

function Signupform() {
  const handleButton = e => {
    alert("successfully submitted");
    e.preventDefault();
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleButton}>
        <label htmlFor="fname">FirstName: </label>
        <p><input type="text" placeholder='Enter your Firstname' id="fname" required /></p>
        <label htmlFor="lname">LastName: </label>
        <p><input type="text" placeholder='Enter your Lastname' id="lname" required /></p>
        <label htmlFor="phonenumber">PhoneNumber: </label>
        <p><input type="number" placeholder='Enter mobile number' required /></p>
        <label htmlFor="email">Email: </label>
        <p><input type="email" placeholder='E.g.: John@gmail.com' id="email" required /></p>
        <label htmlFor="DateOfBirth">DateOfBirth: </label>
        <p><input type="date" id="DateOfBirth" required /></p>
        <p>
          <label htmlFor="gender">Gender:
            <input type="radio" name="Gender" />Male
            <input type="radio" name="Gender" />Female
            <input type="radio" name="Gender" />Other
          </label>
        </p>
        <button type='submit'>Submit</button>
        <p>Already have a username?<Link className="link" to="/Loginform"> <strong>Login</strong></Link></p>
      </form>
    </>
  )
}

export default Signupform;