import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './loginsignin.css'

const auth = getAuth(app)

const Login = () => {
    const navi=useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password).then((value) => alert("Successful Sign-In")).catch((err) => {
            alert("Sign-Up first")
        })
        navi('/home')
    }
    const handleReset=()=>{
        navi('/resetpwd')
    }
    return (
        <div className="signin-page">
            <div className="top">
                <h2>Login :</h2>
                <div className="emai">
                <label>Email</label>
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
                <button onClick={loginUser}>Signup</button>
                <p onClick={handleReset}>? Forgot Password</p>
            </div>
        </div>
    )
}

export default Login