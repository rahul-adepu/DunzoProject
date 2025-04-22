import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './login.css'

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("Successfully Logged In")
                        history("/", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                        alert("Incorrect Username or Password")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input className="email" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />
                {/* <Link to="/Updatespassword">Forgot Password Update Here</Link> */}
            </form>

            <br />
            <p>OR</p>
            <br />

            <p>Don't have an Account ?<Link to="/signup">Signup</Link></p>

        </div>
    )
}

export default Login