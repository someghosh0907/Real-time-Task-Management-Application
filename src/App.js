//import {getDatabase,ref,set} from "firebase/database"
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import {app} from "./firebase"
import Signup from './user-components/Signup';
import Login from './user-components/Login'
import './App.css';
import Selectentry from './user-components/Selectentry';
import { Route, Routes } from 'react-router-dom';
import Forgotpwd from './user-components/Forgotpwd';
import Home from './task-components/Home';
import Createtask from './task-components/Createtask';
import Showtask from './task-components/Showtask';
import Edittask from './task-components/Edittask';


//const db=getDatabase(app)
//const auth=getAuth(app)
function App() {
  /*const putData=()=>{
    set(ref(db, "users/Some"),{
      id:1,
      name:"Soumyajit Ghosh",
      age:22
    })
  }*/
  return (
    <>
      <Routes>
        <Route path='/' element={<Selectentry />}></Route>
        <Route path='/gettask' element={<Showtask/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/resetpwd' element={<Forgotpwd />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/create' element={<Createtask />}></Route>
        <Route path='/edit' element={<Edittask />}></Route>
      </Routes>
    </>
  );
}

export default App;
