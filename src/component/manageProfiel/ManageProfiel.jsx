import "./manageProfiel.css"
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import CustomSeparator from "../breadcrumbs/breadcrumbs";

    // this for style model
  const style = {
    position: 'absolute', top: '45%', left: '50%',
    transform: 'translate(-50%, -50%)', width: 680,
    height:"auto" ,  bgcolor: 'background.paper',
    boxShadow: 24, p: 4,
  };

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  
  export default function ManageProfiel() {
    const token = {"token":localStorage.getItem("auth_token")}
    const [Customer , setCustomer] = useState([])
    // this for open and close the model (add new address)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose = () =>{ setOpen(false);setOpen2(false);setOpen3(false)} 
    const [ErroreMsg, setErroreMsg] = useState(false);
    // this state reloadInChanges it has no mean, just to reload the method taken() in evry change reloadInChanges
   const [reloadInChanges , setReloadInChanges] = useState([])
   const [open4, setOpen4] = useState(false);
    const [transition, setTransition] = useState(undefined);

    const handleClose2 = () => {
        setOpen4(false);
    };

    useEffect(()=>{
        axios.post('http://localhost/data/getCustomerInfo.php',token).then((response) => {
            setCustomer(response.data)
          }).catch((error)=> {
            console.log(error);
          });
    },[reloadInChanges])

    const EditName=(e)=>{
        e.preventDefault()
        var first_name = document.getElementById("first_name").value
        var last_name = document.getElementById("last_name").value
        if(first_name === "" || last_name === ""){
            setErroreMsg(true)
        }else{
            const newFullName = {first_name:first_name , last_name:last_name ,token:localStorage.getItem("auth_token")}
            axios.post('http://localhost/data/updateFullNameOfCustomer.php',newFullName).then((response) => {
            setReloadInChanges([...reloadInChanges , newFullName])
            handleClose()
            setErroreMsg(false)
            }).catch((error)=> {
            console.log(error);
            });
        }
    }
    const EditEmail=(e)=>{
        e.preventDefault()
        var email = document.getElementById("email").value
        if(email === ""){
            setErroreMsg(true)
        }else{
            const newEmail = {email:email,token:localStorage.getItem("auth_token")}
            axios.post('http://localhost/data/updateEmail.php',newEmail).then((response) => {
            setReloadInChanges([...reloadInChanges , newEmail])
            handleClose()
            setErroreMsg(false)
            }).catch((error)=> {
            console.log(error);
            });
        }
    }
    const EditPassword=(e)=>{
        e.preventDefault()
        var old_password = document.getElementById("old_password").value
        var new_password = document.getElementById("new_password").value
        if(old_password === ""|| new_password === ""|| old_password !== Customer[0]["password"]){
            setErroreMsg(true)
        }else{
            const newPassword = {password:new_password,token:localStorage.getItem("auth_token")}
            axios.post('http://localhost/data/updatePassword.php',newPassword).then((response) => {
            setReloadInChanges([...reloadInChanges , newPassword])
            handleClose()
            setErroreMsg(false)
            setTransition(() => TransitionUp);
            setOpen4(true);
            }).catch((error)=> {
            console.log(error);
            });
        }
    }

    if(Customer.length > 0){
        return (
            <>
            <CustomSeparator Get="manageYourProfiel"/>
            <div className="container mt-4 mb-5 login">
                <h5 className="text-center">MANAGE YOUR PROFIELE</h5>
                <div className="accountBox">
                    <div className="accountContent">
                        <div className="accountHolder">
                            <div className="section">
                                <h1>Account holder</h1>
                                <div className="fullName">
                                    <div>{`${Customer[0]["first_name"]} ${Customer[0]["last_name"]}`}</div>
                                    <abbr title="Edit fullName"><button><EditIcon sx={{ fontSize: 17 }} onClick={handleOpen}/></button></abbr>
                                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                    <Box sx={style}>
                                        <h6>Edit your name</h6> 
                                        {
                                        ErroreMsg === true ? <div className="ErrorMsg">Not all the fields have been filled out correctly!</div> : null
                                        } 
                                        <form className="formReview">
                                            <div className="field">
                                                <label>FIRST NAME *</label>
                                                <input type="text" name="first_name" placeholder="Enter your first name" id="first_name" defaultValue={`${Customer[0]["first_name"]}`}/>
                                            </div>
                                            <div className="field">
                                                <label>LAST NAME *</label>
                                                <input type="text" name="last_name" placeholder="Enter your last name" id="last_name" defaultValue={`${Customer[0]["last_name"]}`}/>
                                            </div>
                                            <button className='submit' onClick={(e)=>{EditName(e)}}>Save changes</button>
                                        </form>
                                    </Box>
                                    </Modal>
                                </div>
                            </div>
                            <div className="section">
                                <h1>Email</h1>
                                <div className="email">
                                    <div>{`${Customer[0]["email"]}`}</div>
                                    <abbr title="Edit email"><button><EditIcon sx={{ fontSize: 17 }} onClick={handleOpen2}/></button></abbr>
                                    <Modal open={open2} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                    <Box sx={style}>
                                        <h6>Edit your email</h6> 
                                        {
                                        ErroreMsg === true ? <div className="ErrorMsg">Email is require!</div> : null
                                        } 
                                        <form className="formReview">
                                            <div className="field">
                                                <label>email *</label>
                                                <input type="text" name="first_name" placeholder="Enter your email" id="email" defaultValue={`${Customer[0]["email"]}`}/>
                                            </div>
                                            <button className='submit' onClick={(e)=>{EditEmail(e)}}>Save changes</button>
                                        </form>
                                    </Box>
                                    </Modal>
                                </div>
                            </div>
                            <div className="section">
                                <h1>Password</h1>
                                <div className="password">
                                    <div>*********</div>
                                    <abbr title="Edit password"><button><EditIcon sx={{ fontSize: 17 }} onClick={handleOpen3}/></button></abbr>
                                    <Modal open={open3} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                    <Box sx={style}>
                                        <h6>Edit your password</h6> 
                                        {
                                        ErroreMsg === true ? <div className="ErrorMsg">Failed to change your password, try again!</div> : null
                                        } 
                                        <form className="formReview">
                                            <div className="field">
                                                <label>current password *</label>
                                                <input type="text" name="old_password" placeholder="Enter old password" id="old_password" autoComplete="off"/>
                                            </div>
                                            <div className="field">
                                                <label>new password *</label>
                                                <input type="text" name="new_password" placeholder="Enter new password" id="new_password" autoComplete="off"/>
                                            </div>
                                            <button className='submit' onClick={(e)=>{EditPassword(e)}}>Save changes</button>
                                        </form>
                                    </Box>
                                    </Modal>
                                    <Snackbar 
                                        open={open4} onClose={handleClose2} TransitionComponent={transition}
                                        message="Password is updated" key={transition ? transition.name : ''}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return(
            <>
            <div className="container mt-4 mb-5 login">
              <div className="accountBox">
                <div className="accountContent r_shd">
                  <Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={270.56} />
                </div>
              </div>
            </div>
          </>
        )
    }
}
