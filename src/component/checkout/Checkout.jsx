import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FormatPrice } from "../Context/ContextFile";
import "./checkout.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute', top: '45%', left: '50%',
    transform: 'translate(-50%, -50%)', width: 680,
    height:"auto" ,  bgcolor: 'background.paper',
    boxShadow: 24, p: 4,
};

export const Checkout = () => {
    const Region = ["Béni Mellal - Khénifra","Drâa - Tafilalet",'Fès - Meknès',"Grand Casablanca - Settat","Guelmim - Oued Noun",
                  "Marrakech - Safi","Oriental","Rabat - Salé - Kénitra","Souss - Massa","Tanger - Tétouan - Al Hoceïma"]
    const [Address , setAddress] = useState({full_name:"",address:"",phone:"",postal_code:"",city:"",state:"",country:"",token:""})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{ setOpen(false);} 
    const [ErroreMsg, setErroreMsg] = useState(false);
    const [Customer , setCustomer] = useState([])
    const [TakenAddress , setTakenAddress] = useState([])
    const [reloadInChanges , setReloadInChanges] = useState([])
    const token = {"token":localStorage.getItem("auth_token")}
    const [shippingAddress] = useState(null)
    let navigate = useNavigate();

    const handlChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        const full_name = document.getElementById("full_name").value
        const token = localStorage.getItem("auth_token");
        setAddress((values)=>({...values,[name]:value,full_name:full_name,token:token}))
    }

    useEffect(()=>{
        const getTheData=async()=>{
          await axios.post('http://localhost/data/getAddress.php',token).then((response) => {
            setTakenAddress(response.data)
          }).catch((error)=> {
            console.log(error);
          });
        }
        getTheData()
    
        axios.post('http://localhost/data/getCustomerInfo.php',token).then((response) => {
          setCustomer(response.data)
        }).catch((error)=> {
          console.log(error);
        });
    },[reloadInChanges])

    const addAddress=(e)=>{
        e.preventDefault()
        var full_name = document.getElementById("full_name").value
        var address = document.getElementById("address").value
        var city = document.getElementById("city").value
        var state = document.getElementById("state").value
        var country = document.getElementById("country").value
    
        if(full_name === "" || address === "" || city === "" || state === "" || country === ""){
          setErroreMsg(true)
        }else{
          setErroreMsg(false)
          handleClose()
          axios.post('http://localhost/data/address.php',Address).then((response) => {
            setReloadInChanges([...reloadInChanges , Address])
          }).catch((error)=> {
            console.log(error);
          });
        }
      }
    if(JSON.parse(window.localStorage.getItem("seccess")) === true ){
        if(Customer.length === 0){
            return (
              <>
                <div className="container mt-4 mb-5 login">
                  <div className="accountBox">
                    <div className="accountContent r_shd">
                      <Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={80} />
                    </div>
                  </div>
                  <div className="accountBox">
                    <div className="accountContent r_shd">
                      <Skeleton variant="rounded" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={200} />
                    </div>
                  </div>
                </div>
              </>
            )
        }else{
            return (
                <>
                <div className="container">
                    <div className="container-shopping-cart">
                        <h5 className="shopping-cart-title">CHECKOUT</h5>
                        <div className="shopcart">
                        <div className="checkout-section">
                            <div className="checkout-items">
                                {
                                    shippingAddress === false
                                    ?
                                    <h1>1 Shipping address</h1>
                                    :
                                    <>
                                        <h1>1  Choose a shipping address</h1>
                                        <span className='msg'>The selected address will be used both as your personal address (for invoice) and as your delivery address.</span>
                                        <div className='addresses'>
                                            {
                                                TakenAddress.map((ele,idx)=>(
                                                <div className='address' key={idx}>
                                                    <input type="radio" readOnly defaultChecked name="address" id={idx}/>
                                                    <label htmlFor={idx}>
                                                    {ele.user_address},{ele.city} {ele.state} {ele.postal_code} 
                                                    </label>
                                                </div>
                                                ))
                                            }
                                        </div>
                                        <div style={{ display: "flex"}}>
                                            <button className='addNewAddress'  onClick={handleOpen} ><AddOutlinedIcon sx={{ fontSize: 25 }}/>  add new address</button>
                                            <button className='useThisAddress' >use this address</button>
                                            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                                <Box sx={style}>
                                                    <h6>Add a new address</h6> 
                                                    {
                                                    ErroreMsg === true ? <div className="ErrorMsg">Not all the fields have been filled out correctly!</div> : null
                                                    } 
                                                    <form className="formReview">
                                                    <div className="field">
                                                        <label>FULL NAME *</label>
                                                        <input type="text" name="full_name" onChange={(e)=>handlChange(e)} placeholder="Enter your full name" id="full_name" defaultValue={`${Customer[0]["first_name"]} ${Customer[0]["last_name"]}`}/>
                                                    </div>
                                                    <div className="field">
                                                    <label>address *</label>
                                                        <input type="text" name="address" onChange={(e)=>handlChange(e)} placeholder="hamza.out@example.com" id="address" />
                                                    </div> 
                                                    <div className="field">
                                                    <label>Phone number</label>
                                                        <input type="number" name="phone" onChange={(e)=>handlChange(e)} placeholder="Phone number (optional)" id="phone" />
                                                    </div> 
                                                    <div className="field">
                                                    <label>postal code</label>
                                                        <input type="number" name="postal_code" onChange={(e)=>handlChange(e)} placeholder="Postal code (optional)" id="postal_code" />
                                                    </div> 
                                                    <div className="field">
                                                        <label>city *</label>
                                                        <input type="text" name="city" onChange={(e)=>handlChange(e)} placeholder="City name" id="city"/>
                                                    </div>
                                                    <div className="field">
                                                        <label>state *</label>
                                                        <select name="state" onChange={(e)=>handlChange(e)} id="state">
                                                        <option value="">---</option>
                                                        {Region.map((ele , idx)=>(
                                                            <option value={ele} key={idx}>{ele}</option>
                                                        ))}
                                                        </select>
                                                    </div>
                                                    <div className="field">
                                                        <label>Country *</label>
                                                        <select name="country" onChange={(e)=>handlChange(e)} id="country">
                                                        <option value="">---</option>
                                                        <option value="Morocco">Morocco</option>
                                                        </select>
                                                    </div>
                                                    <button onClick={(e)=>{addAddress(e)}} className='submit'>Add address</button>
                                                    </form>
                                                </Box>
                                            </Modal>                                
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="checkout-items"> shipping Method</div>
                            <div className="checkout-items"> Items and shipping</div>
                        </div>
                        <div className="shopcart-total">
                            <ul>
                                <li>SUBTOTAL</li>
                                <li>{FormatPrice(200)}</li>
                            </ul>
                            <ul>
                                <li>Shipping</li>
                                <li>{FormatPrice(7)}</li>
                            </ul>
                            <div className="grandTotal">
                                <span>Order total</span>
                                <span className="price">{FormatPrice(207)}</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </>
            )       
        }
    }else{
        navigate("/login")
    }
}
