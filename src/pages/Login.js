import { LoginImage, LoginInfo, StyledLogin } from "../styles/Login.styled"
import meal from "../assets/meal.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const[user,setUser] = useState({name: '', pass:''})
  const navigate = useNavigate();

  const handleChange= (e) => {
  setUser({
    ...user,
    [e.target.name] : e.target.value
  })

  sessionStorage.setItem('user',JSON.stringify(user))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/home', {userName : user.name})
  }

  return (
    <StyledLogin>
      <h1>Delicious</h1>
      <h2>Login to See All of the Delicious Recipes</h2>
      <LoginInfo>
        <div className="login-img">
          <LoginImage src={meal} />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={user.name} onChange={handleChange} required placeholder="Your name"/>

          <input type="password" name="pass" value={user.pass} onChange={handleChange} required placeholder="Your password"/>
          <button type="submit">Login</button>
        </form>
      </LoginInfo>
    </StyledLogin>
  )
}

export default Login