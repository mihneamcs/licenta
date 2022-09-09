import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {

  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useNavigate();

    useEffect (() =>{

      const auth = localStorage.getItem("user")
      if(auth){
        history("/home")
      }
    },[])

    const login = async () =>{

        let result = await fetch("http://localhost:8080/api/students/login",{
                method : 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({email,password})
        });
        result = await result.json();
        console.warn(result)
        if(result.email){
          localStorage.setItem("user", JSON.stringify(result));
          history("/home")
        }else {
          alert("please enter connect details")
        }
       
    }

    return (
    
        <div className='container'>

        <div className='row vh-100 align-items-center justify-content-center'>
            <div className='col-sm-8 col-md-6 col-lg-4 bg-white rounded p-4 shadow'>
                <div className='row justify-content-center mb-4'>
                    <img src='https://upb.ro/wp-content/uploads/2020/06/logo200upb.jpg' className='w-50'/>
                </div>
                <form >
                    <div className='mb-4'>
                        <label className='form-label'>Email Address</label>
                        <input type='email'
                         className="form-control"
                          id="email"
                         aria-describedby="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         
                         />
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Password</label>
                        <input type='password' 
                        className="form-control" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' id='btn' className='btn btn-primary w-100 mt-4' onClick={login}>Login</button>
                </form>
            </div>
        </div>

        </div>
    
  )
}

export default Login;