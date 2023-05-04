import './account.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import userImage from "../../assets/images/icons/user-image.png"
import { Link } from 'react-router-dom';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import axios from 'axios';
import { useState , useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import CustomSeparator from '../breadcrumbs/breadcrumbs';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)', width: 680,
  height:"auto" ,  bgcolor: 'background.paper',
  boxShadow: 24, p: 4,
};

function Account() {
  const Region = ["Béni Mellal - Khénifra","Drâa - Tafilalet",'Fès - Meknès',"Grand Casablanca - Settat","Guelmim - Oued Noun",
                  "Marrakech - Safi","Oriental","Rabat - Salé - Kénitra","Souss - Massa","Tanger - Tétouan - Al Hoceïma"]
  const token = {"token":localStorage.getItem("auth_token")}
  const [Customer , setCustomer] = useState([])
  const [TakenAddress , setTakenAddress] = useState([])
  const [ErroreMsg, setErroreMsg] = useState(false);
   // this state reloadInChanges it has no mean, just to reload the method taken() in evry change reloadInChanges
   const [reloadInChanges , setReloadInChanges] = useState([])
  const [Address , setAddress] = useState({full_name:"",address:"",phone:"",postal_code:"",city:"",state:"",country:"",token:""})
  const [EditAddress , setEditAddress] = useState({})

  // this for open and close the model (add new address)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () =>{ setOpen(false); setOpen2(false);} 
  const [index, setIndex] = useState(0);
  const [Loading,setLoading] = useState(false)

  useEffect(()=>{

    const getTheData=async()=>{
      await axios.post('http://127.0.0.1:8000/api/getAddress',token).then((response) => {
        setTakenAddress(response.data)
        setLoading(false)
      }).catch((error)=> {
        console.log(error);
      });
    }
    getTheData()

    axios.post('http://127.0.0.1:8000/api/getCustomerInfo',token).then((response) => {
      setCustomer(response.data)
    }).catch((error)=> {
      console.log(error);
    });
  },[reloadInChanges])

  const handlChange=(e)=>{
    const name = e.target.name
    const value = e.target.value
    const full_name = document.getElementById("full_name").value
    const token = localStorage.getItem("auth_token");
    setAddress((values)=>({...values,[name]:value,full_name:full_name,token:token}))
  }

   // method for add reviews in database
   const addAddress=(e)=>{
    setLoading(true)
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
      axios.post('http://127.0.0.1:8000/api/AddAddress',Address).then((response) => {
        setReloadInChanges([...reloadInChanges , Address])
      }).catch((error)=> {
        console.log(error);
      });
    }
  }

  const EditAddressFc =(id,index)=>{
    setEditAddress({id:id})
    setIndex(index)
    handleOpen2() ;
  }
  const SaveAddress=(e)=>{
    e.preventDefault()
    var full_name = document.getElementById("full_name").value
    var address = document.getElementById("address").value
    var city = document.getElementById("city").value
    var state = document.getElementById("state").value
    var country = document.getElementById("country").value
    var phone = document.getElementById("phone").value
    var postal_code = document.getElementById("postal_code").value
    const newAddress = {...EditAddress,full_name:full_name,address:address , city:city,country:country,state:state , phone:phone,postal_code:postal_code,token:localStorage.getItem("auth_token")}
    axios.put('http://127.0.0.1:8000/api/updateAddress',newAddress).then((response) => {
      setReloadInChanges([...reloadInChanges , newAddress])
      handleClose()
    }).catch((error)=> {
      console.log(error);
    });
  }
  const DeleteAddress =(ele,index)=>{
    index > 0 ? setIndex(index-1) : setIndex(0)
    const AddressInfo = {"idAddress":ele.id , "token":localStorage.getItem("auth_token")}
    axios.post('http://127.0.0.1:8000/api/deleteAddress',AddressInfo).then((response) => {
      setReloadInChanges([...reloadInChanges , AddressInfo])
    }).catch((error)=> {
      console.log(error);
    });
  }

  if(Customer.length === 0){
    return (
      <>
        <CustomSeparator Get="account"/>
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
  }
  else{
    return (
      <>
      <CustomSeparator Get="account"/>
      <div className="container mt-4 mb-5 login">
        <h5 className="text-center">YOUR ACCOUNT</h5>
        <div className="accountBox">
          <div className="accountContent">
            <div className='accountMain'>
              <div className='AccountDetails'>
                <Stack direction="row" spacing={2}>
                  <Avatar  alt="user image"  src={userImage}  sx={{ width: 56, height: 56 }}/>
                </Stack>
                <div className='moreDetails'>
                  <div className='name'>{`${Customer[0]["first_name"]} ${Customer[0]["last_name"]}`}</div>
                  <div className='emailCountry'>
                    <span>{Customer[0]["email"]}</span>
                  </div>
                </div>
                <Link to="/manage-your-profiles" className='profileSetting'>Profile setting</Link>
                <Link to="/manage-your-profiles" className='profileSettingIcon'><ManageAccountsRoundedIcon /></Link>
              </div>
              <div className='AccountDetailsResponsive'>
                <div className='moreDetails'>
                  <div className='name'>{`${Customer[0]["first_name"]} ${Customer[0]["last_name"]}`}</div>
                  <div className='emailCountry'>
                    <span>{Customer[0]["email"]}</span>
                  </div>
                </div>
                <Link to="/manage-your-profiles" className='profileSettingIcon'><ManageAccountsRoundedIcon /></Link>
              </div>
              <div className='addresses'>
                {/* this part it's for edit an address */}
                  {
                    TakenAddress.map((ele,idx)=>(
                      <div className='address' key={idx}>
                        <input type="radio" readOnly defaultChecked name="address" id={idx}/>
                        <label htmlFor={idx}>
                          {ele.user_address},{ele.city} {ele.state} {ele.postal_code} 
                        </label>
                        <div className='manageAddress'>
                          <button  onClick={()=>{ EditAddressFc(ele.id,idx)}}>edit</button>
                          <button onClick={()=>DeleteAddress(ele, idx)}>delete</button>
                        </div>
                      </div>
                    ))
                  }
                  {
                    Loading
                    ?
                    <div className='address'>
                      <Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} />
                    </div>
                    :
                    null
                  }
                  {
                    TakenAddress.length > 0 ?
                    <Modal open={open2} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                      <Box sx={style}>
                        <h6>Add a new address</h6> 
                        {
                          ErroreMsg === true ? <div className="ErrorMsg">Not all the fields have been filled out correctly!</div> : null
                        } 
                        <form className="formReview">
                          <div className="field">
                            <label>FULL NAME *</label>
                            <input type="text" name="full_name" placeholder="Enter your full name" id="full_name" defaultValue={`${TakenAddress[index]["full_name"]}`}/>
                          </div>
                          <div className="field">
                          <label>address *</label>
                            <input type="text" name="address"  placeholder="Enter your address" id="address" defaultValue={`${TakenAddress[index]["user_address"]}`}/>
                          </div> 
                          <div className="field">
                          <label>Phone number</label>
                            <input type="number" name="phone"  placeholder="Phone number (optional)" id="phone" defaultValue={`${TakenAddress[index]["phone"]}`} />
                          </div> 
                          <div className="field">
                          <label>postal code</label>
                            <input type="number" name="postal_code"  placeholder="Postal code (optional)" id="postal_code" defaultValue={`${TakenAddress[index]["postal_code"]}`} />
                          </div> 
                          <div className="field">
                            <label>city *</label>
                            <input type="text" name="city"  placeholder="City name" id="city" defaultValue={`${TakenAddress[index]["city"]}`}/>
                          </div>
                          <div className="field">
                            <label>state *</label>
                            <select name="state"  id="state" defaultValue={`${TakenAddress[index]["state"]}`}>
                              <option value="">---</option>
                              {Region.map((ele , idx)=>(
                                <option value={ele} key={idx}>{ele}</option>
                              ))}
                            </select>
                          </div>
                          <div className="field">
                            <label>Country *</label>
                            <select name="country"  id="country" defaultValue={`${TakenAddress[index]["country"]}`}>
                              <option value="">---</option>
                              <option value="Morocco">Morocco</option>
                            </select>
                          </div>
                          <button className='submit' onClick={(e)=>{SaveAddress(e)}}>Save changes</button>
                        </form>
                      </Box>
                      </Modal>
                    :
                    null
                  }
                  {/*------------------------------------end------------------------------------- */}
              </div>
              {/* this part it's for add new address */}
              <button className='addNewAddress' onClick={handleOpen}><AddOutlinedIcon sx={{ fontSize: 25 }}/>  add new address</button>
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
                    <input type="text" name="address" onChange={(e)=>handlChange(e)} placeholder="Enter your address" id="address" />
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
                  <button className='submit' onClick={(e)=>{addAddress(e)}}>Add address</button>
                </form>
              </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="accountBox">
          <div className="accountContent">
            <div className='orderMain'>
              <div className='noOrders'>
                <span><RemoveShoppingCartOutlinedIcon sx={{fontSize:111,color:"rgb(128 128 128 / 53%)",marginBottom:2}}/></span>
                <span>You haven't placed any orders yet</span>
              </div>
              {/* none orders */}
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
}

export default Account
