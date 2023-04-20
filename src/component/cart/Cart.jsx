import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import {AddToCartContext, AddToWishlistContext, FormatPrice} from "../Context/ContextFile"
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./cart.css"
import { useContext } from 'react';


const Cart = ({details , style}) => {
  const AddToCart = useContext(AddToCartContext)
  const AddToWishlist = useContext(AddToWishlistContext)
  if(style === 'firstStyle'){
    return (
      <div className="showcase">
          <div className="showcase-banner">
            <img src={require(`../../assets/images/products/${details.product_image}`)} alt="Mens Winter Leathers Jackets" width="300" className="product-img default"/>
            {
              details.status==="in stock" ? null : <p className="showcase-badge angle black">sale</p>
            }
            <div className="showcase-actions">
                <abbr title='add to favorite'>
                  <button className="btn-action" onClick={()=>AddToWishlist(details.product_id)}><FavoriteBorderRoundedIcon /></button>
                </abbr>
                <Link to={`/product#${details.product_id}`}><button className="btn-action"><RemoveRedEyeOutlinedIcon /></button></Link>
                {
                  details.status==="in stock" 
                  ? 
                    <abbr title='add to cart'>
                      <button className="btn-action" onClick={()=>AddToCart(details)}><EnhancedEncryptionOutlinedIcon /></button>
                    </abbr>
                  : 
                    <abbr title='sold out'>
                      <button className="btn-action soldOut"><EnhancedEncryptionOutlinedIcon /></button>
                    </abbr>
                }
            </div>
          </div>
          <div className="showcase-content">
          <Link to={`/product#${details.product_id}`} className="showcase-category">{details.product_name}</Link>
          <Link to={`/product#${details.product_id}`}><h3 className="showcase-title">{details.description}</h3></Link>
          <div className="showcase-rating">
            <Rating name="half-rating" value={0} precision={0.5} readOnly size="small"/>
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
                <Rating name="half-rating" value={0} precision={0.5} readOnly size="small"/>
                <span className="rating-avg">0</span>
                <span className="total-reviews">(0 reviews)</span>
              {/*   {
                  rating.avg === undefined 
                  ? <Rating name="half-rating" value={0} precision={0.5} readOnly/>
                  : <Rating name="half-rating" value={rating.avg} precision={0.5} readOnly/>
                }
                <span className="rating-avg">{rating.avg===undefined?0:rating.avg.toFixed(1)}</span>
                <span className="total-reviews">({rating.total_review} reviews)</span>
               */}
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
            {details.status === "out of stock"
            ?
            <Button variant="contained"  size="small" className="soldOut">
              sold out
            </Button>
            :
            <Button variant="contained"  size="small">
              Add to cart
            </Button>
            }
            
            {
            // JSON.parse(window.localStorage.getItem("seccess")) === true 
            // ?
            //   favoriteProduct === "1" 
            //   ? 
            //   <Button variant="contained" className="active" size="small" onClick={()=>AddToWishlist(item)}>
            //     Wishlist
            //   </Button>
            //   :
            //   <Button variant="contained" size="small" onClick={()=>AddToWishlist(item)}>
            //     Wishlist
            //   </Button>
            // :
            //   <>
            //     <Button variant="contained" size="small" onClick={handleOpen}>
            //       Wishlist
            //     </Button>
            //     <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            //       <Box sx={style}>
            //         <p>Please login and you will add product to your wishlist</p>
            //         <div>
            //           <Link to="/login"><button className="Button">SIGN IN</button></Link>
            //           <Link to="/register"><button className="registerButton">REGISTER</button></Link>
            //         </div>
            //       </Box>
            //     </Modal>
            //   </>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Cart