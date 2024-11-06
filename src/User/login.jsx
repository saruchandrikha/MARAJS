import axios from "axios"
import 'boxicons'
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'
import g6 from "../Assects/Group 6.png"
import "./u-login.css"



function Login() {

  const navigate = useNavigate()

    let initialstate = {
        name:"",
        password:""
       

    }

    const [form ,setform] = useState(initialstate)
    

    const submit = (e) => {
     e.preventDefault()
     console.log(form)

     let name = "Ravies"
     let pass = "Apple"



     if(form.name == name || form.password == pass ){
      return navigate("/admin")
     }
     
     axios
     .post("http://localhost:7000/log", form)
     .then((res) => {
      if(res){
        console.log(res.data)
        const userId = res.data
        // toast("Wow so easy!");
        // localStorage.setItem('token',res.data.token)
       

        setform(initialstate)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/userenter/${userId}`)
      }
        
       
        // if(res.data){
            

        // }
     })
     .catch((err) => {
        console.log(`${err}`)
     })

     


    }

    return(
       <div className="reg-out">
        
        <div className="reg-inn">
        <p className="heading">Login</p>
        <div className="red-container">
            <form onSubmit={submit}> 
                <p>
                <span className="icon"><box-icon name='user'></box-icon></span>
                <input placeholder="name" value={form.name} onChange={(e) => setform({...form ,name: e.target.value})}/>
                </p>
                <p>
                <span className="icon"><box-icon name='key' ></box-icon></span>
                <input placeholder="password" value={form.password} onChange={(e) => setform({...form ,password: e.target.value})}/>
                </p><br></br>
                
                <button onClick={submit} className="btnss">
          <span class="fold"></span>

<div class="points_wrapper">
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
</div>

<span class="inner"
  ><svg
    class="icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2.5"
  >
    <polyline
      points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
    ></polyline></svg>Login</span>
            
          </button>

          <Link to={"/reg"}><p className="bot">Go to Register</p></Link>
            </form>
            </div>
        </div>
        <div className="r-i-m">
          <img src={g6}/>
        </div>
       </div>
    )

}

export default Login