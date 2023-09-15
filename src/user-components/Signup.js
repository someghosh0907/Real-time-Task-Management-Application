import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"
import React, { useState } from 'react'
import './loginsignin.css'

const auth = getAuth(app)

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success Sign-Up")).catch((err) => {
            alert("Wrong Credentials")
        })
    }
    return (
        <div className="signup-page">
            <div className="top"><h2>Sign-Up</h2>
                <div className="email">
                <label>Email :</label>
                <input onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    required
                    placeholder="Type your E-Mail" />
                </div>
                <div className="password">
                <label>Password :</label>
                <input onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    required
                    placeholder="Type your Password" />
                </div>
                <button onClick={createUser}>Signup</button>
            </div>
        </div>
    )
}

export default Signup