import axios from "axios";
import CustomSeparator from "../breadcrumbs/breadcrumbs";
import { Link, useNavigate } from "react-router-dom"
import {Formik , Field , Form} from "formik"
import { object, string } from 'yup';

function Register() {
  let navigate = useNavigate()

  const handlSubmit = (data)=>{
    axios.post('http://127.0.0.1:8000/api/register',data).then((response) => {
      if(response.data["seccess"] === true){
        localStorage.setItem("auth_token",response.data.token)
        localStorage.setItem("seccess",response.data.seccess)
        navigate("/account?registered=true") 
      }else{
        document.querySelector("form ul li").innerHTML=response.data.message
        document.querySelector("form ul").className='failed'
        document.querySelector("#email").value = ""
      }
    }).catch((error)=> {
      console.log(error);
    });
  }

  const SchemaValid = object().shape({
    first_name: string().min(3,'Name must be at least 3 characters').required('Required *'),
    last_name: string().min(3,'Surname must be at least 3 characters').required('Required *'),
    email: string().email('Invalid email').required('Email is required *'),
    password: string().min(6,'Password must be at least 6 characters').required('Password is required *'),
  });

  const error = (ErrorName,id)=>{
    document.querySelector(`form #${id}`).removeAttribute("class")
    return (
      <span>{ErrorName}</span>
    )
  }

  return (
    <>
    <CustomSeparator Get="signIn"/>
    <div className="container mt-4 mb-5 login">
      <h5 className="text-center">CREATE AN ACCOUNT</h5>
      <div className="LoginForm">
        <div className="miniParent">
          <div>
            <h6>PERSONAL INFORMATION</h6>
            <Formik
              initialValues={{first_name:"",last_name:"",email:"", password:""}}
              onSubmit={handlSubmit}
              validationSchema={SchemaValid}
            >
              {({ errors, touched }) => (
              <Form>
                <ul><li></li></ul>
                <div className='loginFiald' id="ele1">
                  <div className="required">
                    <label>First Name *</label><span>* Required Fields</span>
                  </div>
                  <Field  type="text" name="first_name" placeholder="Enter first name" />
                  {errors.first_name && touched.first_name ? (
                    error(errors.first_name,"ele1")
                  ) : null}
                </div>
                <div className='loginFiald' id="ele2">
                  <label>Last Name *</label>
                  <Field  type="text" name="last_name" placeholder="Enter last name" />
                  {errors.last_name && touched.last_name ? (
                    error(errors.last_name,"ele2")
                  ) : null}
                </div>
                <div className='loginFiald' id="ele3">
                  <label>E-mail *</label>
                  <Field  type="email" name="email" placeholder="Enter email" id="email" />
                  {errors.email && touched.email ? (
                    error(errors.email,"ele3")
                  ) : null}
                </div>
                <div className="loginFiald" id="ele4">
                <label>Password *</label><br />
                  <Field  type="password" name="password"  placeholder="Enter password" autoComplete="off"/> 
                  {errors.password && touched.password ? (
                    error(errors.password,"ele4")
                  ) : null}
                </div>
                <div className="buttonLogin">
                  <button type="submit">CREATE</button>
                  <span>Already have an account? <Link to="/login">Sign in</Link></span>
                </div>
              </Form>
            )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Register
