import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const handleonChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleonSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = credentials;
        const url = `http://localhost:5000/login`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const json = await response.json();
        console.log(json);
        if (json.success){
            localStorage.setItem('token',json.auth_token)
            navigate('/home');
        }
        else {
            alert('Invalid credentials')
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleonSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder='example@gmail.com' value={credentials.email} onChange={handleonChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleonChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
