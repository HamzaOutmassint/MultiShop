import CustomSeparator from "../breadcrumbs/breadcrumbs";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom"
import "./viewCart.css"
import { FormatPrice } from "../Context/ContextFile";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

function ViewCart({cartItem , DeleteItemFromTheCart , handlDecrement , handlInecrement , clearShopingCart}) {

  let totalCartPrice = 0;
  return (
    <>
    <CustomSeparator Get="cart"/>
    <div className="container">
        <div>
          {cartItem.length === 0
           ?
            <div className='emptyCart'>
              <LocalMallOutlinedIcon sx={{ fontSize: 145 , color:"rgb(192 178 178 / 52%)" }} />
              <h5>SHOPPING CART IS EMPTY</h5> 
              <span>You have no items in your shopping cart.</span>
              <Link to="/" ><button className="Button">CONTINUE SHOPPING</button></Link>
            </div>
            :
            <>
            <div className="container-shopping-cart">
              <h5 className="shopping-cart-title">SHOPPING CART</h5>
              <div className="shopcart">
                <div className="shopcart-items">
                  <table>
                    <tbody>
                      {cartItem.map((item,index)=>{
                        totalCartPrice += parseInt(item.product_price) * parseInt(item.product_quantity)
                        return (
                          <>
                          <tr key={index} >
                            <div className="largeDevices">
                              <td style={{marginRight:"10px"}}>
                                <img  className="image" src={require(`../../assets/images/products/${item.product_image}`)} alt="" />
                              </td>
                              <td className="name"><Link to={`/product#${item.product_id}`}>{item.product_name}</Link></td>
                              <td className="price">{FormatPrice(item.product_price)}</td>
                              <td className="quntity">
                                <div className="QTY">
                                  <button type="button"  id="positif" onClick={()=>handlDecrement(item.product_id)}><RemoveRoundedIcon/></button>
                                    <input readOnly name="msgQantity float-end ms-2 me-2" type="text" id="msg" value={item.product_quantity}/>
                                  <button type="button" id="nigatif" onClick={()=>handlInecrement(item.product_id)}><AddRoundedIcon /></button>
                                </div>
                              </td>
                              <td className="newPrice">{FormatPrice(parseInt(item.product_price) * parseInt(item.product_quantity))}</td>
                              <td className="remove">
                                <IconButton aria-label="delete" size="small" onClick={()=>DeleteItemFromTheCart(item.product_id)}>
                                  <DeleteIcon fontSize="inherit" />
                                </IconButton>
                              </td>
                            </div>
                            <div className="smallDevices">
                              <div className="headerMain">
                                <td style={{marginRight:"10px"}}>
                                  <img  className="image" src={require(`../../assets/images/products/${item.product_image}`)} alt="" />
                                </td>
                                <td className="name"><Link to={`/product#${item.product_id}`}>{item.product_name}</Link></td>
                                <td className="price">{FormatPrice(item.product_price)}</td>
                              </div>
                              <div  className="headerBottom">
                                <td className="quntity">
                                  <div className="QTY">
                                    <button type="button"  id="positif" onClick={()=>handlDecrement(item.product_id)}><RemoveRoundedIcon/></button>
                                      <input readOnly name="msgQantity float-end ms-2 me-2" type="text" id="msg" value={item.product_quantity}/>
                                    <button type="button" id="nigatif" onClick={()=>handlInecrement(item.product_id)}><AddRoundedIcon /></button>
                                  </div>
                                </td>
                                <td className="newPrice">{FormatPrice(parseInt(item.product_price) * parseInt(item.product_quantity))}</td>
                                <td className="remove">
                                  <IconButton aria-label="delete" size="small" onClick={()=>DeleteItemFromTheCart(item.product_id)}>
                                    <DeleteIcon fontSize="inherit" />
                                  </IconButton>
                                </td>
                              </div>
                            </div>
                          </tr>
                          {/* <tr key={index} className="smallDevices">
                            <div>
                              <td style={{marginRight:"10px"}}>
                                <img  className="image" src={require(`../../assets/images/products/${item.product_image}`)} alt="" />
                              </td>
                              <td className="name"><Link to={`/product#${item.product_id}`}>{item.product_name}</Link></td>
                              <td className="price">{FormatPrice(item.product_price)}</td>
                            </div>
                            <div>
                              <td className="quntity">
                                <div className="QTY">
                                  <button type="button"  id="positif" onClick={()=>handlDecrement(item.product_id)}><RemoveRoundedIcon/></button>
                                    <input readOnly name="msgQantity float-end ms-2 me-2" type="text" id="msg" value={item.product_quantity}/>
                                  <button type="button" id="nigatif" onClick={()=>handlInecrement(item.product_id)}><AddRoundedIcon /></button>
                                </div>
                              </td>
                              <td className="newPrice">{FormatPrice(parseInt(item.product_price) * parseInt(item.product_quantity))}</td>
                              <td className="remove">
                                <IconButton aria-label="delete" size="small" onClick={()=>DeleteItemFromTheCart(item)}>
                                  <DeleteIcon fontSize="inherit" />
                                </IconButton>
                              </td>
                            </div>
                          </tr> */}
                          </>
                        )})}
                    </tbody>
                  </table>
                  <Link to="/cart" onClick={()=>clearShopingCart()} className="clear-all"><span className="clearAll"  >CLEAR SHOPPING CART</span></Link>
                </div>
                <div className="shopcart-total">
                  <ul>
                    <li>SUBTOTAL</li>
                    <li>{FormatPrice(totalCartPrice)}</li>
                  </ul>
                  <div className="grandTotal">
                    <span>GRAND TOTAL</span>
                    <span className="price">{FormatPrice(totalCartPrice)}</span>
                  </div>
                  <div className="buttons">
                    <Link to="/checkout" className="checkout">Proceed to checkout</Link>
                    <Link to="/"> Back to shop </Link>
                  </div>
                </div>
              </div>
            </div>
            </>
          } 
        </div>
    </div>
    </>
  )
}

export default ViewCart