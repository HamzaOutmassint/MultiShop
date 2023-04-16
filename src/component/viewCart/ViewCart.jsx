import CustomSeparator from "../breadcrumbs/breadcrumbs";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import "./viewCart.css"
import { FormatPrice } from "../Context/ContextFile";
// import RecommendedItemsSlider from "../Slider/RecommendedItemsSlider";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

function ViewCart({cartItem , DeleteItemFromTheCart , handlDecrement , handlInecrement , clearAll}) {

  let totalCartPrice = 0;
  return (
    <>
    <CustomSeparator Get="cart"/>
    <div className="container">
        <div>
        <div className='emptyCart'>
            <LocalMallOutlinedIcon sx={{ fontSize: 145 , color:"rgb(192 178 178 / 52%)" }} />
            <h5>SHOPPING CART IS EMPTY</h5> 
            <span>You have no items in your shopping cart.</span>
            <Link to="/" ><button className="Button">CONTINUE SHOPPING</button></Link>
        </div>
          {/* {cartItem.length === 0
           ?
            <>
              <div className='text-center emptyCart'>
                  <i className="bi bi-handbag" ></i>
                  <h5>SHOPPING CART IS EMPTY</h5> 
                  <span>You have no items in your shopping cart.</span><br />
                  <Link to="/" ><button className="Button">CONTINUE SHOPPING</button></Link>
              </div>
            </>
            :
            <>
            <div className="mb-4">
              <h5 className="text-center mt-3 mb-3">SHOPPING CART</h5>
              <div className="shopcart">
                <div className="shopcart-items">
                  <table>
                    <tbody>
                      {cartItem.map((item,index)=>{
                        totalCartPrice += parseInt(item.product_price) * parseInt(item.product_quantity)
                        return (
                          <tr key={index}>
                            <td style={{marginRight:"10px"}}>
                              <img  className="image" src={require(`../images/${item.product_image}`)} alt="" />
                            </td>
                            <td className="name"><Link to={`/product#${item.product_id}`}>{item.product_name}</Link></td>
                            <td className="price">{FormatPrice(item.product_price)}</td>
                            <td className="quntity">
                              <div className="QTY">
                                <button type="button"  id="positif" onClick={()=>handlDecrement(item.product_id)}><i className="bi bi-dash"></i></button>
                                  <input readOnly name="msgQantity float-end ms-2 me-2" type="text" id="msg" value={item.product_quantity}/>
                                <button type="button" id="nigatif" onClick={()=>handlInecrement(item.product_id)}><i className="bi bi-plus"></i></button>
                              </div>
                            </td>
                            <td className="newPrice">{FormatPrice(parseInt(item.product_price) * parseInt(item.product_quantity))}</td>
                            <td className="remove">
                              <IconButton aria-label="delete" size="small" onClick={()=>DeleteItemFromTheCart(item)}>
                                <DeleteIcon fontSize="inherit" />
                              </IconButton>
                              </td>
                          </tr>
                        )})}
                    </tbody>
                  </table>
                  <Link to="/cart" onClick={()=>clearAll()} className="clear-all"><span className="clearAll"  >CLEAR SHOPPING CART</span></Link>
                </div>
                <div className="shopcart-total">
                  <div>
                    <div className="subTotal">
                      <span>SUBTOTAL</span>
                      <span className="price">{FormatPrice(totalCartPrice)}</span>
                    </div>
                    <div className="grandTotal">
                      <span>GRAND TOTAL</span>
                      <span className="price">{FormatPrice(totalCartPrice)}</span>
                    </div>
                    <div className="buttons">
                      <Link to="/checkout" className="checkout">Proceed to checkout</Link>
                      <Link to="/"><Button variant="outlined" size="small" className='backToShop'> Back to shop </Button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          }
             */}
        </div>
    </div>
    {/* {
      cartItem.length !== 0 ? <RecommendedItemsSlider AllData={AllData}/> : null
    }  */}
    </>
  )
}

export default ViewCart