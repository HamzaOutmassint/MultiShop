import "./navbar.css";
import logo from "../../assets/images/logo/logo1.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import {Link} from "react-router-dom"
import { Drawer, Box, Typography } from '@mui/material'
import {useState , useEffect} from "react"

function Navbar() {
  /*---------- this state for the sidebar in -------------*/
  const [open, setOpen] = useState(false);
  /*------------------------------end----------------------------------- */
  const [menuOpen , setMenuOpen]= useState(null);

  useEffect(() => {
    if(menuOpen){
        console.log("open")
        document.getElementById("submenu-category-list").classList.add('active');
    }else if(menuOpen === false){
        console.log("close")
        document.getElementById("submenu-category-list").classList.remove('active');
    }
  }, [menuOpen])
  

  return (
    <header>
        {/*------------------------ start header top -----------------------*/}
        <div className="header-top">
            <div className="container">
                <ul className="header-social-container">
                    <li><a href="#" className="social-link"> <FacebookRoundedIcon sx={{ fontSize: 20 }}/></a></li>
                    <li><a href="#" className="social-link"> <TwitterIcon sx={{ fontSize: 20 }}/></a></li>
                    <li><a href="#" className="social-link"> <InstagramIcon sx={{ fontSize: 20 }}/></a></li>
                    <li><a href="#" className="social-link"><LinkedInIcon sx={{ fontSize: 20 }}/></a></li>
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
                <a href="#" className="header-logo"><img src={logo} alt="multishop's logo" width="100" height="26" /></a>

                <div className="header-search-container">
                    <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
                    <button className="search-btn"> <SearchRoundedIcon /></button>
                </div>

                <div className="header-user-actions">
                    <button className="action-btn"><PersonOutlineRoundedIcon fontSize="26px" style={{":hover":{"color":'#fff'}}}/></button>
                    <button className="action-btn"><FavoriteBorderRoundedIcon fontSize="26px"/><span className="count">0</span></button>
                    <button className="action-btn"><LocalMallOutlinedIcon fontSize="26px"/><span className="count">8</span></button>
                </div>
            </div>
        </div>
        {/*------------------------ end header main -----------------------*/}

        {/*------------------------ start header bottom -----------------------*/}
        <nav className="desktop-navigation-menu">
            <div className="container">
                <ul className="desktop-menu-category-list">
                    <li className="menu-category"><a href="#" className="menu-title">Home</a></li>
                    <li className="menu-category"><a href="#" className="menu-title">Men's</a></li>
                    <li className="menu-category"><a href="#" className="menu-title">Women's</a></li>
                    <li className="menu-category"><a href="#" className="menu-title">Accessories</a></li>
                </ul>
            </div>
        </nav>
        {/*------------------------ end header bottom -----------------------*/}

        {/*-------------------start the navbar of phone and ipads-------------*/}

        <div className="mobile-bottom-navigation">
            <button className="action-btn" data-mobile-menu-open-btn onClick={()=>setOpen(true)}><MenuRoundedIcon  sx={{ fontSize: 40 }} /></button>
            <button className="action-btn"><LocalMallRoundedIcon/><span className="count">0</span></button>
            <button className="action-btn"><HomeRoundedIcon  sx={{ fontSize: 40 }}/></button>
            <button className="action-btn"><FavoriteRoundedIcon/><span className="count">0</span></button>
            <button className="action-btn" data-mobile-menu-open-btn><GridViewRoundedIcon/></button>
        </div>

        <Drawer variant='temporary' open={open} onClose={() => setOpen(false)}>
            <Box p={2} width='270px' textAlign='center' role='presentation'>
                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>
                    <button className="menu-close-btn" onClick={()=>setOpen(false)}><HighlightOffRoundedIcon /></button>
                </div>
                <div className="mainMenu">
                    <Link to="#">home <KeyboardArrowRightRoundedIcon /></Link>
                    <Link to="#">men <KeyboardArrowRightRoundedIcon /></Link>
                    <Link to="#">women <KeyboardArrowRightRoundedIcon /></Link>
                    <Link to="#">accessories <KeyboardArrowRightRoundedIcon /></Link>
                </div>
                <div className="menu-bottom">
                    <ul className="menu-category-list">
                        <li className="menu-category">
                            <button className="accordion-menu" onClick={()=>setMenuOpen(!menuOpen)}>
                                <p className="menu-title">Currency</p>
                                {menuOpen === false || menuOpen === null ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
                            </button>
                            <ul id="submenu-category-list" className="submenu-category-list">
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">USD &dollar;</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">EUR &euro;</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="menu-social-container">
                        <li><a href="#" className="social-link"><FacebookRoundedIcon sx={{ fontSize: 25 }}/></a></li>
                        <li><a href="#" className="social-link"><TwitterIcon sx={{ fontSize: 25 }}/></a></li>
                        <li><a href="#" className="social-link"><InstagramIcon sx={{ fontSize: 25 }}/></a></li>
                        <li><a href="#" className="social-link"><LinkedInIcon sx={{ fontSize: 25 }}/></a></li>
                    </ul>
                </div>
            </Box>
        </Drawer>

    </header>
  )
}

export default Navbar
