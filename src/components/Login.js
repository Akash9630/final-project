import React from "react"
import { Link } from 'react-router-dom'
import "./Login.css"

function Loginform() {
    const handleSubmit = (props) => {
        props.preventDefault()
        window.location.href = "/dashboard"
    }
    return (
        <div id="loginform">
            <form>
                <h1 id="headerTitle">Log In</h1>
                <label htmlFor="username">Name:
                    <p><input type="text" placeholder='Enter name here' id="username" name="name" required /></p>
                </label>
                <label htmlFor="userpassword">Password:
                    <p><input type="password" placeholder='Enter password here' id="userpassword" name="password" required /></p>
                </label>
                <p><button onClick={(e) => handleSubmit(e)}>login</button></p>
                <p>don't have an account?<Link className="link" to="/Signupform"><strong>Signup</strong></Link></p>
            </form >
        </div>
    )
}
export default Loginform;