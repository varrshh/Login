import React,{useState} from 'react'

export const Register = () => {
  const [email, setEmail]=useState('');
  const[pass,setPass]=useState('');
  const[name,setName]=useState('');
  const handleSubmit=() => {
    console.log(email);
    
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label htmlfor="name">Full Name </label>
    <input value={name} type="name" placeholder="Enter your FullName" id="name" name='name'/>
    <label htmlfor="email">Email</label>
    <input value={email} type="email" placeholder="Enter your email" id="youremail@gmail.com" name='email'/>
    <label htmlfor="password">Password</label>
    <input value={pass} type="password" placeholder="********" id="password" name='password'/>
    
    <button type="submit"> Log In </button>
    </form>
    <button>
    Already have an account? Login Here
    </button>
    </div>
  )
}
