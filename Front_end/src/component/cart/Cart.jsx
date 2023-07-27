import {AddToCartContext, AddToWishlistContext, FormatPrice, RemoveFromWishlistContext} from "../Context/ContextFile"
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Box, Button, Modal } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import "./cart.css"
import axios from "axios";

const ModelStyle = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)', width: 500,
  bgcolor: 'background.paper', boxShadow: 24, p: 4,
  display:'flex',flexDirection: 'column',color:"#191919",
  fontSize: '16px',fontWeight: '500',alignItems: 'center',
  height: '152px',justifyContent: 'space-between'
};

const Cart = ({details , style}) => {
  const [rating , setRating] = useState([])
  const [open, setOpen] = useState(false);
  const AddToCart = useContext(AddToCartContext)
  const AddToWishlist = useContext(AddToWishlistContext)
  const DeleteItemFromTheWishlist = useContext(RemoveFromWishlistContext)

  
  useEffect(()=>{
      const productId = {"product_id":details.product_id}
      axios.post('http://localhost/data/getRating.php',productId).then((response) => {
        setRating(response.data)
      }).catch((error)=> {
        console.log(error);
      });
  }, []);

  if(style === 'firstStyle'){
    return (
      <div className="showcase">
          <div className="showcase-banner">
            <img src={require(`../../assets/images/products/${details.product_image}`)} alt="Mens Winter Leathers Jackets" width="300" className="product-img default"/>
            {
              details.status==="out of stock" ? <p className="showcase-badge angle black">sale</p> : null
            }
            <div className="showcase-actions">
                {
                  JSON.parse(window.localStorage.getItem("seccess")) === true 
                  ?
                    details.favorite_product === 1
                    ?
                      <abbr title='remove from the wishlist'>
                        <button className="btn-action" onClick={()=>DeleteItemFromTheWishlist(details.product_id)}><DeleteOutlineRoundedIcon /></button>
                      </abbr>
                    :
                      <abbr title='add to wishlist'>
                        <span className="btn-action" onClick={()=>AddToWishlist(details.product_id)}><FavoriteBorderRoundedIcon /></span>
                      </abbr>
                  :
                    <>
                    <abbr title='You need to login'>
                      <button className="btn-action" onClick={()=>setOpen(true)}><FavoriteBorderRoundedIcon /></button>
                    </abbr>
                    <Modal open={open} onClose={()=>setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                      <Box sx={ModelStyle} className='boxWishlist'>
                        <p className='msg'>Please login and you will add product to your wishlist</p>
                        <div className='btn-section'>
                          <Link to="/login"><span className="btn-signIn">SIGN IN</span></Link>
                          <Link to="/register"><span className="registerButton" >REGISTER</span></Link>
                        </div>
                      </Box>
                    </Modal>
                    </>
                }
                <abbr title='Quick view'>
                  <Link to={`/product#${details.product_id}`}><span className="btn-action" ><RemoveRedEyeOutlinedIcon /></span></Link>
                </abbr>
                {
                  details.status==="out of stock" 
                  ? 
                    <abbr title='sold out'>
                      <span className="btn-action soldOut" ><EnhancedEncryptionOutlinedIcon /></span>
                    </abbr>
                  : 
                    <abbr title='add to cart'>
                      <span className="btn-action" onClick={()=>AddToCart(details)}><EnhancedEncryptionOutlinedIcon /></span>
                    </abbr>
                }
            </div>
          </div>
          <div className="showcase-content">
          <Link to={`/product#${details.product_id}`} className="showcase-category">{details.product_name}</Link>
          <Link to={`/product#${details.product_id}`}><h3 className="showcase-title">{details.description}</h3></Link>
          <div className="showcase-rating">
            {
              rating.avg === undefined 
              ? <Rating name="half-rating" value={0} precision={0.5} readOnly size="small"/>
              : <Rating name="half-rating" value={rating.avg} precision={0.5} readOnly size="small"/>
            }
          </div>
          <div className="price-box">
              <p className="price">{FormatPrice(details.product_price)}</p> 
              <del>{FormatPrice(details.old_price)}</del>
          </div>
          </div>
      </div>
    )
  }else{
    return(
      <div className="productInSecondStyle">
          <div className="productImage">
            <Link to={`/product#${details.product_id}`}>
            <img src={require(`../../assets/images/products/${details.product_image}`)} loading="lazy"  alt="sweatshirt blue" />
            </Link>
          </div>
          <Link to={`/product#${details.product_id}`} className="description">
            <div>
            <div className="Title"><span>{details.product_name}</span></div>
              <div className="rating">
                {
                  rating.avg === undefined 
                  ? <Rating name="half-rating" value={0} precision={0.5} readOnly size="small"/>
                  : <Rating name="half-rating" value={rating.avg} precision={0.5} readOnly size="small"/>
                }
                <span className="rating-avg">{rating.avg===undefined?0:rating.avg.toFixed(1)}</span>
                <span className="total-reviews">({rating.total_review} reviews)</span>
              </div>
              <p>{details.description}</p>
            </div>
          </Link>
        <div className="addTocart">
          <div className="price">
            <span>{FormatPrice(details.product_price)}</span> 
            <small>{FormatPrice(details.old_price)}</small>
          </div>
          <div className="button">
            {
            details.status === "out of stock"
            ?
              <Button variant="contained"  size="small" className="soldOut">
                sold out
              </Button>
            :
              <Button variant="contained"  size="small" onClick={()=>AddToCart(details)}>
                Add to cart
              </Button>
            }
            {
            JSON.parse(window.localStorage.getItem("seccess")) === true 
            ?
              <Button variant="contained" size="small" onClick={()=>AddToWishlist(details.product_id)}>
                Add to Wishlist
              </Button>
            :
              <>
                <Button variant="contained" size="small" onClick={()=>setOpen(true)}> 
                  Add to Wishlist
                </Button>
                <Modal open={open} onClose={()=>setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                  <Box sx={ModelStyle} className='boxWishlist'>
                    <p>Please login and you will add product to your wishlist</p>
                    <div className='btn-section'>
                      <Link to="/login"><span className="btn-signIn" >SIGN IN</span></Link>
                      <Link to="/register"><span className="registerButton" >REGISTER</span></Link>
                    </div>
                  </Box>
                </Modal>
              </>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Cart