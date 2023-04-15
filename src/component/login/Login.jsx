import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomSeparator from "../breadcrumbs/breadcrumbs";
import { Link } from "react-router-dom"
import "./login.css";
import {Formik , Field , Form} from "formik"
import { object, string } from 'yup';
import { useState } from "react";

export default function Login() {
  let navigate = useNavigate()
  const [Loading,setLoding] = useState(false)
  
  async function handlSubmit(data){
    setLoding(true)
    Loding()
    await axios.post('http://localhost/data/login.php',data).then((response) => {
      // console.log(response)
      if(response.data["seccess"] === true){
        localStorage.setItem("auth_token",response.data.token)
        localStorage.setItem("seccess",response.data.seccess)
        navigate("/account?login=true") 
        window.location.reload()
      }else{
        document.querySelector("form ul").className='failed'
      }
      setLoding(false)
      Loding()
    }).catch((error)=> {
      console.log(error);
    });
  }
  const SchemaValid = object().shape({
    email: string().email().required('required *'),
    password: string().required('Required *'),
  });
  const error = (ErrorName,id)=>{
    document.querySelector(`form #${id}`).removeAttribute("className")
    return (
      <span>{ErrorName}</span>
    )
  }


  function Loding(){
    if(Loading){
      document.querySelector("#login").className="login-btn"
      document.querySelector("#loading").className="btn btn-primary loading-btn"
    }
    else{
      document.querySelector("#login").removeAttribute("classe")
      document.querySelector("#loading").className="btn btn-primary loading-btn-none"
    }
   }
  return (
    <>
    <CustomSeparator Get="login"/>
    <div className="container mt-4 mb-5 login">
      <h5 className="text-center">ALREADY REGISTERED?</h5>
      <div className="LoginForm">
        <div className="miniParent">
          <div>
            <h6>LOGIN</h6>
            <span>If you have an account with us, please log in</span>

            <Formik
              initialValues={{email:"", password:""}}
              onSubmit={handlSubmit}
              validationSchema={SchemaValid}
            >
            {({ errors, touched }) => (
              <Form>
                <ul><li>Please check your email and password and try again.</li></ul>
                <div className='mb-2' id="ele1">
                  <div className="required">
                    <label>Email *</label><span>* Required Fields</span>
                    </div>
                  <Field  type="email" name="email" placeholder="Enter email" id="email"/>
                  {errors.email && touched.email ? (
                    error(errors.email,"ele1")
                  ) : null}
                </div>
                <div id="ele2">
                <label>Password *</label><br />
                  <Field  type="password" name="password"  placeholder="Enter password" autoComplete="off"/> 
                  {errors.password && touched.password ? (
                    error(errors.email,"ele2")
                  ) : null}
                </div>
                <div className="mt-2">
                  <button type="submit" id="login">Login</button>
                  <button className="btn btn-primary loading-btn-none " type="button" disabled id="loading">
                    <div className="spinner-border spinner-border-sm loading-scroll" role="status"></div>
                    <span className="visually-hidden"role="status" aria-hidden="true"></span>
                    <span>Loading...</span>
                  </button>
                  
                  <span>Not a member? <Link to="/register">Sign up</Link></span>
                </div>
              </Form> )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

