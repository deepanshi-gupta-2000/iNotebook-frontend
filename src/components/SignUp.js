import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const handleonChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleonSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password, cpassword} = credentials;
        if (cpassword !== password) {
            return alert("Password and Confirm Password are not same")
        }
        const url = `http://localhost:5000/signup`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
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
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={handleonChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"  onChange={handleonChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleonChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="cpassword" className="form-control" id="cpassword" name="cpassword" onChange={handleonChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
  )
}

export default SignUp
