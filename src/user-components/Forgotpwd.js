import React from 'react'
import { app } from "../firebase"
import { sendPasswordResetEmail ,getAuth} from 'firebase/auth'
import { useState } from 'react'
import './loginsignin.css'

const auth = getAuth(app)
const Forgotpwd = () => {
  const [email, setEmail] = useState("")
  const resetPwd = (e) => {
    setEmail(e.target.value)
    sendPasswordResetEmail(auth, email).then((value) => alert("Reset Password In E-Mail")).catch((err) => alert("Error"))
  }

return (
  <div className='signin-page'>
    <div className="top">
      <h2>Reset Password</h2>
      <label>Email :</label>
      <input onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Type your E-Mail" />
      <button onClick={resetPwd} >Signup</button>

    </div>
  </div>
)
}

export default Forgotpwd