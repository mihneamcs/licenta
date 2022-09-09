import React, {useState,useEffect} from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
function LoginTest() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useNavigate();
    const[rows,setRows] = useState([]);
    useEffect(()=>{
            const localRows = localStorage.getItem('user-info')
        if(localRows){
            setRows(JSON.parse(localRows))
            history("/home")
        }

    }, [rows])

    async function login(){
        let item = {email,password}
        let result = await fetch("http://localhost:8080/api/students/create",{
                method : 'POST',
                headers:{
                    "Content-Type": "application/json",
                    "Accept" : "application/json"
                },
                body:JSON.stringify(item)
        });
        result =  result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history("/home")
       
    }

  return (
    <div>
        <h1> Login</h1>
        <div className='col-sm-6 offset-sm-3'>
        <input type='text' placeholder='email' 
        onChange={(e) => setEmail(e.target.value)} 
        className = 'form-control'/>
        <br/>
        <input type='password' 
        placeholder='password' 
        onChange={(e) => setPassword(e.target.value)} 
        className = 'form-control'/>
        <br/>
        <button onClick={login} className='btn btn-success'>Login</button>
        </div>
    </div>
  )
}

export default LoginTest