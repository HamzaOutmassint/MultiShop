import "./wishlist.css"
import { Link } from "react-router-dom"
import CustomSeparator from "../breadcrumbs/Breadcrumbs"
import Cart from "../cart/Cart"
// import { useEffect } from "react"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

function Wishlist({wishlist}) {
  // const SE_wishlist = JSON.parse(window.localStorage.getItem("SE_wishlist"))
  // useEffect(()=>{
  //   if(wishlist.length >= 3){
  //     document.getElementById("WishlistContent").className="WishlistContent SecondWishlistContent"
  //   }else{
  //     document.getElementById("WishlistContent").className="WishlistContent"
  //   }
  // },[wishlist])
  return (
    <>
    <CustomSeparator Get="wishlist"/>
    <div className="container">
      <div id="WishlistContent" className='text-center WishlistContent'> 
      {wishlist.length === 0 ? <></> : <h5 className="text-center p-3">MY WISHLIST</h5> }
          {
            JSON.parse(window.localStorage.getItem("seccess")) === true 
            ? 
            wishlist.length === 0 
              ? 
              <div className="IfTheListIsEmpty">
                <i className="emptyHeart"><FavoriteBorderRoundedIcon sx={{ fontSize: 180 , color:"rgba(41, 39, 39, 0.768)" }}/><span></span></i>
                <h5>Your Favorites list is Empty</h5>
                <span>Start adding items to your Watchlist today! Simply tap ‘Add to watchlist’ next to the item you want to keep a close eye on </span><br />
                <Link to="/" ><button className="btn-signIn">CONTINUE SHOPPING</button></Link>
              </div>
              : 
              <div className="IfTheListIsFullOff">
                {wishlist.map(ele=>(
                    <Cart 
                        key={ele.product_id}
                        details={ele} 
                        style = {`firstStyle`}
                      />
                ))}
              </div>
            :
            <div className="IfTheListIsEmpty">
              <i className="emptyHeart"><FavoriteBorderRoundedIcon sx={{ fontSize: 180 , color:"rgba(41, 39, 39, 0.768)" }}/><span></span></i>
              <h5>WISHLIST</h5> 
              <span>Please login and you will add product to your wishlist</span>
              <div className='btn-section'>
                <Link to="/login"><button className="btn-signIn">SIGN IN</button></Link>
                <Link to="/register"><button className="registerButton">REGISTER</button></Link>
              </div>
            </div>
          }
      </div>
    </div>
    </>
  )
}

export default Wishlist

