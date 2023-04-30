import "./navbar.css"
import logo from "../../assets/images/logo/logo1.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom"
import { Drawer, Box } from '@mui/material'
import {useState , useEffect, Fragment} from "react"
import shoppingCratIcon from "../../assets/images/icons/shopping-bag.png";
import homeIcon from "../../assets/images/icons/home.png";
import heartIcon from "../../assets/images/icons/heart (1).png";
import dashboardIcon from "../../assets/images/icons/dashboard.png";
import hamburgerIcon from "../../assets/images/icons/hamburger.png";
import { FormatPrice } from '../Context/ContextFile';
import LinearProgress from '@mui/material/LinearProgress';

function Navbar({logOut,cartItem,wishlist,DeleteItemFromTheCart,Loading}) {
  /*---------- this state for the sidebar in -------------*/
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  /*------------------------------end----------------------------------- */
  const [menuOpen , setMenuOpen]= useState(null);
  const [clothesDropDown , setClothesDropDown]= useState(null);
  const [glassesDropDown , setGlassesDropDown]= useState(null);
  const [bagDropDown , setBagDropDown]= useState(null);

  useEffect(() => {
    if(menuOpen){
        document.getElementById("submenu-category-list").classList.add('active');
    }else if(menuOpen === false){
        document.getElementById("submenu-category-list").classList.remove('active');
    }
  }, [menuOpen])
  
  /*---------------------function to calcule the total price of items-------------------- */
  let total = cartItem.reduce((total , item)=>{ 
    return total += (parseInt(item.product_price)*parseInt(item.product_quantity) )
  },0)
  /*------------------------------------------end----------------------------------------- */

  return (
    <header>
        {/*------------------------ start header top -----------------------*/}
        <div className="header-top">
            <div className="container">
                <ul className="header-social-container">
                    <li><a href="/" className="social-link"> <FacebookRoundedIcon sx={{ fontSize: 20 }}/></a></li>
                    <li><a href="/" className="social-link"> <TwitterIcon sx={{ fontSize: 20 }}/></a></li>
                    <li><a href="/" className="social-link"> <InstagramIcon sx={{ fontSize: 20 }}/></a></li>
                    <li><a href="/" className="social-link"><LinkedInIcon sx={{ fontSize: 20 }}/></a></li>
                </ul>

                <div className="header-alert-news"><p><b>Free Shipping</b>This Week Order Over - $55</p></div>

                <div className="header-top-actions">
                    <select name="currency">
                        <option value="usd">USD $</option>
                        <option value="eur">EUR &euro;</option>
                    </select>
                </div>
            </div>
        </div>
        {/*------------------------ end header top -----------------------*/}

        {/*------------------------ start header main -----------------------*/}
        <div className="header-main">
            <div className="container">
                <a href="/" className="header-logo"><img src={logo} alt="multishop's logo" width="100" height="26" /></a>

                <div className="header-search-container">
                    <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
                    <button className="search-btn"> <SearchRoundedIcon /></button>
                </div>

                <div className="header-user-actions">
                  <div className="AccountDropDown">
                    <button className="action-btn"><PersonOutlineRoundedIcon fontSize="26px" style={{":hover":{"color":'/fff'}}}/></button>
                    <ul>
                      {
                        JSON.parse(window.localStorage.getItem("seccess")) === true 
                        ? 
                          <>
                            <Link to="account"><li>Account</li></Link>
                            <Link to="login" onClick={logOut}><li> Log Out </li></Link>
                          </>
                        :
                          <>
                            <Link to="login"><li> Sign in</li></Link>
                            <Link to="register"><li>Register</li></Link>
                          </>
                      } 
                    </ul>
                  </div>
                  <div className="WishlistDropDown">
                    <Link  to="wishlist" className="action-btn"><FavoriteBorderRoundedIcon fontSize="26px"/><span className="count">{wishlist.length}</span></Link>
                  </div>
                  <div className="CartDropDown">
                    <Link  to="cart" className="action-btn"><LocalMallOutlinedIcon fontSize="26px"/><span className="count">{cartItem.length}</span></Link>
                    <ul>
                      {
                        cartItem.length > 0
                        ?
                          <li className='shopingCart'>
                            {
                              cartItem.map((item,index)=>(
                                <Fragment  key={index}>
                                <div className='ProductDetails'>
                                  <img src={require(`../../assets/images/products/${item.product_image}`)} alt="" />
                                  <div className='NameAndQuntity'>
                                    <p className="name">{item.product_name}</p>
                                    <span>{item.product_quantity} X <span>{FormatPrice(item.product_price)}</span></span>
                                  </div>
                                  <div className='delete'>
                                    <IconButton aria-label="delete" onClick={()=>DeleteItemFromTheCart(item.product_id)}>
                                      <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                  </div>
                                </div>
                                <hr/>
                                </Fragment>
                              ))
                            }
                            <div className='Total'>
                              <span className='total'>TOTAL:</span>
                              <span className='price'>{FormatPrice(total)}</span>
                            </div>
                            <div className='buttons'>
                              <Link to="/checkout" className='checkout'>Checkout</Link>
                              <Link to='cart' className='viewCart'> VIEW CART </Link>
                            </div>
                          </li>
                        :
                          <li>
                            <LocalMallOutlinedIcon sx={{ fontSize: 70 , color:"rgb(192 178 178 / 52%)", marginBottom:"8px" }} />
                            <p>No Products in the Cart</p>
                          </li>
                      }
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        {/*------------------------ end header main -----------------------*/}
        {
          Loading?<LinearProgress/>:null
        }
        {/*------------------------ start header bottom -----------------------*/}
        <nav className="desktop-navigation-menu">
            <div className="container">
                <ul className="desktop-menu-category-list">
                    <li className="menu-category"><a href="/" className="menu-title">Home</a></li>
                    <li className="menu-category"><a href="/men" className="menu-title">Men's</a></li>
                    <li className="menu-category"><a href="/women" className="menu-title">Women's</a></li>
                    <li className="menu-category"><a href="/accessories" className="menu-title">Accessories</a></li>
                </ul>
            </div>
        </nav>
        {/*------------------------ end header bottom -----------------------*/}

        {/*-------------------start the navbar of phone and ipads-------------*/}
        <div className="mobile-bottom-navigation">
            <button className="action-btn"  onClick={()=>setOpen(true)}>
              <img src={hamburgerIcon} alt="hamburgerIcon" width={40}/>
            </button>
            <Link  to="cart" className="action-btn">
              <img src={shoppingCratIcon} alt="shoppingCartIcon" width={35}/><span className="count">{cartItem.length}</span>
            </Link>
            <Link  to="/" className="action-btn">
              <img src={homeIcon} alt="homeIcon" width={35}/>
            </Link>
            <Link  to="wishlist" className="action-btn">
              <img src={heartIcon} alt="heartIcon" width={40}/><span className="count">{wishlist.length}</span>
            </Link>
            <button className="action-btn"  onClick={()=>setOpen2(true)}>
              <img src={dashboardIcon} alt="dashboardIcon" width={35}/>
            </button>
        </div>

        <Drawer variant='temporary' open={open} onClose={() => setOpen(false)}>
            <Box p={2} width='270px' textAlign='center' role='presentation'>
                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>
                    <button className="menu-close-btn" onClick={()=>setOpen(false)}><HighlightOffRoundedIcon /></button>
                </div>
                <div className="mainMenu">
                    <a href="/">home <KeyboardArrowRightRoundedIcon /></a>
                    <a href="/men">men <KeyboardArrowRightRoundedIcon /></a>
                    <a href="/women">women <KeyboardArrowRightRoundedIcon /></a>
                    <a href="/accessories">accessories <KeyboardArrowRightRoundedIcon /></a>
                </div>
                <div className="mainMenu">
                  <ul>
                  {
                        JSON.parse(window.localStorage.getItem("seccess")) === true 
                        ? 
                          <>
                            <Link to="account" onClick={() => setOpen(false)}>
                              <li><HowToRegRoundedIcon sx={{fontSize:"18px" , marginRight:"5px"}} />Account</li>
                            </Link>
                            <Link to="login" onClick={()=>{logOut() ; setOpen(false)}}>
                              <li><LogoutRoundedIcon sx={{fontSize:"18px" , marginRight:"5px"}}/> Log Out </li>
                            </Link>
                          </>
                        :
                          <>
                            <Link to="login" onClick={() => setOpen(false)}>
                              <li><LockOpenRoundedIcon sx={{fontSize:"18px" , marginRight:"5px"}} /> Sign in</li>
                            </Link>
                            <Link to="register" onClick={() => setOpen(false)}>
                              <li><HowToRegRoundedIcon sx={{fontSize:"18px" , marginRight:"5px"}} />Register</li>
                            </Link>
                          </>
                      } 
                  </ul>
                </div>
                <div className="menu-bottom">
                    <ul className="menu-category-list">
                        <li className="menu-category">
                            <button className="accordion-menu" onClick={()=>setMenuOpen(!menuOpen)}>
                                <p className="menu-title">Currency</p>
                                {menuOpen === false || menuOpen === null ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />}
                            </button>
                            <ul id="submenu-category-list" className="submenu-category-list">
                                <li className="submenu-category">
                                    <a href="#usd" className="submenu-title">USD &dollar;</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#eur" className="submenu-title">EUR &euro;</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="menu-social-container">
                        <li><a href="#f" className="social-link"><FacebookRoundedIcon sx={{ fontSize: 25 }}/></a></li>
                        <li><a href="#f" className="social-link"><TwitterIcon sx={{ fontSize: 25 }}/></a></li>
                        <li><a href="#g" className="social-link"><InstagramIcon sx={{ fontSize: 25 }}/></a></li>
                        <li><a href="#fg" className="social-link"><LinkedInIcon sx={{ fontSize: 25 }}/></a></li>
                    </ul>
                </div>
            </Box>
        </Drawer>
        <Drawer variant='temporary' open={open2} onClose={() => setOpen2(false)}>
            <Box p={2} width='270px' textAlign='center' role='presentation'>
                <div className="menu-top">
                    <h2 className="menu-title">Category</h2>
                    <button className="menu-close-btn" onClick={()=>setOpen2(false)}><HighlightOffRoundedIcon /></button>
                </div>
                <ul className="sidebar-menu-category-list">
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" onClick={()=>setClothesDropDown(!clothesDropDown)}>
                    <div className="menu-title-flex"> <p className="menu-title">Clothes</p></div>
                    <div>
                        {
                            clothesDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                        }
                    </div>
                  </button>
                  <ul id="clothes" className={clothesDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"}>
                    <li className="sidebar-submenu-category">
                      <a href="/" className="sidebar-submenu-title">
                        <p className="product-name">Shirt</p>
                        <data value="300" className="stock" title="Available Stock">300</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="/" className="sidebar-submenu-title">
                        <p className="product-name">jacket</p>
                        <data value="50" className="stock" title="Available Stock">50</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="/" className="sidebar-submenu-title">
                        <p className="product-name">dress & frock</p>
                        <data value="87" className="stock" title="Available Stock">87</data>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" onClick={()=>setGlassesDropDown(!glassesDropDown)}>
                    <div className="menu-title-flex"><p className="menu-title">Glasses</p></div>
                    <div>
                        {
                            glassesDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                        }
                    </div>
                  </button>
                  <ul id="glasses" className={glassesDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"}>
                    <li className="sidebar-submenu-category">
                      <a href="/" className="sidebar-submenu-title">
                        <p className="product-name">Sunglasses</p>
                        <data value="50" className="stock" title="Available Stock">50</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="/" className="sidebar-submenu-title">
                        <p className="product-name">Lenses</p>
                        <data value="48" className="stock" title="Available Stock">48</data>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" onClick={()=>setBagDropDown(!bagDropDown)}>
                    <div className="menu-title-flex"><p className="menu-title">Bags</p></div>
                    <div>
                        {
                            bagDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                        }
                    </div>
                  </button>
                  <ul id="bag" className={bagDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"} >
                    <li className="sidebar-submenu-category">
                      <a href="#bag" className="sidebar-submenu-title">
                        <p className="product-name">Shopping Bag</p>
                        <data value="62" className="stock" title="Available Stock">62</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="#backbag" className="sidebar-submenu-title">
                        <p className="product-name">Gym Backpack</p>
                        <data value="35" className="stock" title="Available Stock">35</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="#purs" className="sidebar-submenu-title">
                        <p className="product-name">Purse</p>
                        <data value="80" className="stock" title="Available Stock">80</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="#h" className="sidebar-submenu-title">
                        <p className="product-name">Wallet</p>
                        <data value="75" className="stock" title="Available Stock">75</data>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Box>
        </Drawer>

    </header>
  )
}

export default Navbar
