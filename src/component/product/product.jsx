import {AddToCartContext,FormatPrice} from "../Context/ContextFile";
// import RecommendedItemsSlider from "../Slider/RecommendedItemsSlider";
import { useContext, useState , useEffect } from "react";
import CustomSeparator from "../breadcrumbs/breadcrumbs";
import paymentImg from "../../assets/images/payment.png"
import {Link, useLocation } from 'react-router-dom';
// import CustomerReviews from "../reviews/Review";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from "axios";
import "./product.css" 
import {AllProductsContext} from "../../component/Context/ContextFile"
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const style = {
  position: 'absolute', top: '40%', left: '50%',
  transform: 'translate(-50%, -50%)', width: 580,
  height:"auto" ,  bgcolor: 'background.paper',
  boxShadow: 24, p: 4,
};
const style2 = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)', width: 550,
  bgcolor: 'background.paper', boxShadow: 24, p: 4,
  display:'flex',flexDirection: 'column',color:"#191919",
  fontSize: '16px',fontWeight: '500',alignItems: 'center',
  height: '152px',justifyContent: 'space-between'
};

// this style for progress of stars review
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  // borderRadius: 5, 
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#ffc107' : '#308fe8',
  },
}));

function Product() {
  const AllProducts = useContext(AllProductsContext)
  // to create a date 
  var options = {year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  const location = useLocation();
  const [Quantity,setQuantity] = useState(1)
  const [valueRank, setvalueRank] = useState(2);
  const [ErroreMsg, setErroreMsg] = useState(false);
  const [thanksFroReview, setThanksFroReview] = useState(false);
  const [Review, setReview] = useState({
    name:"",
    email:"",
    title:"",
    value:"",
    content:"",
    product_id:"",
    date:""
  });
  const [Reviews , setReviews] = useState([])
  const [Ratings , setRating] = useState([])
  const [currentPage , setCurrentPage] = useState(1)
  const [ReviewsPerPage] = useState(5)
  const [page, setPage] = useState(1);
  const AddToCart = useContext(AddToCartContext)

  
  
  // get current review 
  const indexOfLastReview = currentPage * ReviewsPerPage
  const indexOfFirstReview = indexOfLastReview - ReviewsPerPage
  const currentReview = Reviews.slice(indexOfFirstReview,indexOfLastReview)


  const result = AllProducts.find( ele =>{ return ele.product_id === parseInt(location.hash.substring(1)) })
  // const womenDataItem = womenData.find( ele =>{ return ele.product_id === parseInt(location.hash.substring(1)) })
  // const accessoriesDataItem = accessoriesData.find( ele =>{ return ele.product_id === parseInt(location.hash.substring(1)) })

  // if(menDataItem !== undefined){  result = menDataItem }
  // else if(womenDataItem !== undefined){  result = womenDataItem }
  // else if(accessoriesDataItem !== undefined){  result = accessoriesDataItem }


  const click_positif=()=>{
    setQuantity(Quantity+1)
    result.product_quantity = Quantity+1;
  }
  const click_negatif=()=>{
    if(Quantity === 1){
      setQuantity(1)
      result.product_quantity = 1
    }else{
      setQuantity(Quantity-1)
      result.product_quantity = Quantity-1;
    }    
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{
    setOpen(false);
    setErroreMsg(false)
  } 

  const handlChange=(e)=>{
    setReview({
      ...Review,
      value:valueRank,
      product_id:parseInt(result.product_id) ,
      [e.target.name]:e.target.value,date:today.toLocaleDateString("en-US", options) 
    })
  }

  // method for add reviews in database
  const sendReview=(e)=>{
    e.preventDefault()
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var title = document.getElementById("title").value
    var content = document.getElementById("content").value

    if(name === "" || email === "" || title === "" || content === ""){
      setErroreMsg(true)
    }else{
      setErroreMsg(false)
      handleClose()
      setThanksFroReview(true)
      // console.log(Review)
      axios.post('http://localhost/data/review.php',Review).then((response) => {
        console.log(response.data)
      }).catch((error)=> {
        console.log(error);
      });
    }
  }

  // useEffect for get the data review from database 
  // useEffect(()=>{
  //   const productId = {"product_id":location.hash.substring(1)}
  //   axios.post('http://localhost/data/getReviews.php',productId).then((response) => {
  //     setReviews(response.data);
  //     // console.log(response.data)
  //   }).catch((error)=> {
  //     console.log(error);
  //   });
  // }, [thanksFroReview , location.hash.substring(1)]);
  
  // useEffect for get the rating data from database 
  // useEffect(()=>{
  //   const productId = {"product_id":location.hash.substring(1)}
  //   axios.post('http://localhost/data/getRating.php',productId).then((response) => {
  //     // console.log(response.data)
  //     setRating(response.data)
  //     setCurrentPage(1)
  //     setPage(1)
  //   }).catch((error)=> {
  //     console.log(error);
  //   });
  // }, [thanksFroReview , location.hash.substring(1)]);

  var fiveStar =Math.round(parseInt((Ratings.five_star_review / Ratings.total_review)*100))  
  var fourStar =Math.round(parseInt((Ratings.four_star_review / Ratings.total_review)*100) ) 
  var threeStar =Math.round(parseInt((Ratings.three_star_review / Ratings.total_review)*100) ) 
  var twoStar =Math.round(parseInt((Ratings.two_star_review / Ratings.total_review)*100) ) 
  var oneStar =Math.round(parseInt((Ratings.one_star_review / Ratings.total_review)*100) ) 
  
  // Method to change the page
  const paginate = (event, value) => {
    setCurrentPage(value)
    setPage(value);
  };

  return (
        result !== undefined ?
          result.length === 0 
          ? 
            <div className="empty">
              <span>There is no products</span>
            </div>
          :
          <>
          <CustomSeparator Get="product" name={result.product_name}/>
            <div className="product-cart">
              <div className="container">
                <div className="Row">
                  <div className="image-section">
                    <div className="image">
                      <img src={require(`../../assets/images/products/${result.product_image}`)} alt="" />
                    </div>
                  </div>
                  <div className="description">
                    <h5>{result.product_name}</h5>
                    <div className="price">{FormatPrice(result.product_price)}
                    </div>
                    <div className="TaxIncluded">Tax included.</div>
                    <div className="reviews">
                      <Stack spacing={1}>
                        {
                          Ratings.avg === undefined
                          ?<Rating name="half-rating" value={0} precision={0.5} readOnly size="small"/>
                          :<Rating name="half-rating" value={Ratings.avg} precision={0.5} readOnly size="small"/>
                        }
                      
                        <span className="stock">({Ratings.total_review} reviews)</span>
                      </Stack>
                    </div>
                    <div className="details">
                      <span className="Availability">Availability: <span className="stock">{result.status}</span></span>
                      <span className="Availability">Department: <span className="stock">{result.categorie}</span></span>
                      <span className="Availability">Collection: <span className="stock">{result.collection}</span></span>
                      <span className="Availability">Size: <span className="stock">{result.size}</span></span>
                    </div>
                    {/* <p><i> {result.description} </i></p> {FormatPrice(price)} */}
                    <div className="ProductDescreption">
                        <h6>DESCRIPTION</h6>
                        <p>
                          {result.description}
                        </p>
                    </div>
                    <div className="Quantity">
                      <div className="QTY">
                        <button type="button"  id="positif" onClick={click_negatif}><RemoveRoundedIcon/></button>
                        <input readOnly name="msgQantity float-end ms-2 me-2" type="text" id="msg" value={Quantity}/>
                        <button type="button" id="nigatif" onClick={click_positif}><AddRoundedIcon /></button>
                      </div>
                      {
                        result.status === "out of stock"
                        ?
                        <button className="addToCart soldOut"> sold out </button>
                        :
                        <button className="addToCart" onClick={()=>AddToCart(result)}> Add to cart </button>
                      }
                      
                    </div>
                    <div className="BuyNow">
                      {
                        result.status === "out of stock"
                        ?
                        <abbr title="out of stock"><button className="soldOut">Buy it Now</button></abbr>
                        :
                        <Link to="/checkout"><button>Buy it Now</button></Link>
                      }
                      
                    </div>
                    <div className="footer_payment">
                      <label>Payment methods</label>
                      <img src={paymentImg} alt="payment method" className="payment-img" />
                    </div>
                  </div>
                </div>
                <div className="Reviews">
                  <div className="Ratings">
                    <div className="customer">
                        <div>
                          <h2>Customer reviews</h2>
                          <Stack spacing={1} className="AllRating">
                            {
                            Ratings.avg === undefined
                            ?<Rating name="half-rating" value={0} precision={0.5} readOnly />
                            :<Rating name="half-rating" value={Ratings.avg} precision={0.5} readOnly/>
                            }
                            <span className="globalRatings">{Ratings.avg===undefined?0:Ratings.avg.toFixed(1)} out of 5</span>
                          </Stack>
                          <span className="basedReview">{Ratings.total_review===undefined?0:Ratings.total_review} ratings</span>
                        </div>
                        <table>
                          <tbody>
                            <tr>
                              <td>5 start</td>
                              <td>
                                <div className="progress">
                                  <BorderLinearProgress variant="determinate" value={isNaN(fiveStar)?0:fiveStar} />
                                </div>
                              </td>
                              <td>{isNaN(fiveStar)? 0 : fiveStar}%</td>
                            </tr>
                            <tr>
                              <td>4 start</td>
                              <td>
                                <div className="progress">
                                  <BorderLinearProgress variant="determinate" value={isNaN(fourStar)?0:fourStar} />
                                </div>
                              </td>
                              <td>{isNaN(fourStar)? 0 : fourStar}%</td>
                            </tr>
                            <tr>
                              <td>3 start</td>
                              <td>
                                <div className="progress">
                                  <BorderLinearProgress variant="determinate" value={isNaN(threeStar)?0:threeStar} />
                                </div>
                              </td>
                              <td>{isNaN(threeStar)? 0 : threeStar}%</td>
                            </tr>
                            <tr>
                              <td>2 start</td>
                              <td>
                                <div className="progress">
                                  <BorderLinearProgress variant="determinate" value={isNaN(twoStar)?0:twoStar} />
                                </div>
                              </td>
                              <td>{isNaN(twoStar)? 0 : twoStar}%</td>
                            </tr>
                            <tr>
                              <td>1 start</td>
                              <td>
                                <div className="progress">
                                  <BorderLinearProgress variant="determinate" value={isNaN(oneStar)?0:oneStar} />
                                </div>
                              </td>
                              <td>{isNaN(oneStar)? 0 : oneStar}%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                  <div className="reviewsContent">
                    <div className="WriteReviews">
                      <div className="ForThanks">
                        <h2>Reviews</h2>
                        {
                          thanksFroReview === true ? <div className="megReview">Thank you for submitting a review!</div> : null
                        }
                      </div>
                      <span onClick={handleOpen} className="writereview">Write a customer review</span>
                    </div>
                    {
                      JSON.parse(window.localStorage.getItem("seccess")) === true 
                      ?
                      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                      <Box sx={style}>
                        <h6>WRITE A REVIEW</h6>
                        {
                          ErroreMsg === true ? <div className="ErrorMsg">Not all the fields have been filled out correctly!</div> : null
                        }
                        <form className="formReview">
                          <div className="field">
                            <label>NAME</label>
                            <input type="text" name="name" onChange={(e)=>handlChange(e)} placeholder="Enter your name" id="name"/>
                          </div>
                          <div className="field">
                            <label>EMAIL</label>
                            <input type="email" name="email" onChange={(e)=>handlChange(e)} placeholder="hamza.out@example.com" id="email" />
                          </div>
                          <div className="field">
                            <label>RATING</label>
                            <Rating name="value" value={valueRank} onChange={(event, newValue) => { setvalueRank(newValue); }}/>
                          </div>
                          <div className="field">
                            <label>REVIEW TITLE</label>
                            <input type="text" name="title" onChange={(e)=>handlChange(e)} placeholder="Give your review a title" id="title"/>
                          </div>
                          <div className="field">
                            <label>BODY OF REVIEW</label>
                            <textarea cols="30" rows="10" onChange={(e)=>handlChange(e)} name="content" placeholder="Write your comments here" style={{"minHeight":"100px"}} id="content"></textarea>
                          </div>
                          <button onClick={(e)=>{sendReview(e)}}>SUBMIT REVIEW</button>
                        </form>
                      </Box>
                      </Modal>
                      :
                      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                      <Box sx={style2}>
                        <p>Please login or register and you will be able to add your review</p>
                        <div>
                          <Link to="/login"><button className="Button">SIGN IN</button></Link>
                          <Link to="/register"><button className="registerButton">REGISTER</button></Link>
                        </div>
                      </Box>
                      </Modal>
                    }
                    
                    {
                    <div className="empty">
                      <span>No customer reviews</span>
                    </div>
                    // Reviews.length === 0 
                    // ?
                    // :
                    // <CustomerReviews 
                    //   Reviews={currentReview} 
                    //   ReviewsPerPage={ReviewsPerPage} 
                    //   totalReviews={Reviews.length}
                    //   paginate={paginate}
                    //   page={page}
                    //  />
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* <RecommendedItemsSlider AllData={allData}/> */}
            </>
        : null
      )
}

export default Product
