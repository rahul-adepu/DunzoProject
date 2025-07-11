import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        alert("Successfully Created Your Account")
                        history("/", { state: { id: email } })
                    }
                })
                .catch(e => {
                    alert("Wrong Details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <p>Already have an Account ?<Link to="/login">Login</Link></p>

        </div>





    )
}

export default Signup