import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import {AllProductsContext} from "../../component/Context/ContextFile"
import mainBanner from "../../assets/images/banner-7.jpg"
import therdBanner from "../../assets/images/banner-6.jpg"
import {useState , useContext } from 'react';
import Cart from '../../component/cart/Cart';
import "./home.css"
import Skeleton from '@mui/material/Skeleton';

function Home() {
  const AllProducts = useContext(AllProductsContext)
  const [clothesDropDown , setClothesDropDown]= useState(null);
  const [glassesDropDown , setGlassesDropDown]= useState(null);
  const [bagDropDown , setBagDropDown]= useState(null);

  return (
    <>
      <main>
        {/*--------------------------- BANNER ---------------------------------------*/}
        <div className="banner">
          <div className="container">
            <div className="slider-container has-scrollbar">
              <div className="slider-item">
                <img src={mainBanner} alt="women's latest fashion sale" className="banner-img" />
                <div className="banner-content">
                  <p className="banner-subtitle">Trending item</p>
                  <h2 className="banner-title">Men's latest fashion sale</h2>
                  <p className="banner-text">
                    starting at &dollar; <b>20</b>.00
                  </p>
                  <a href="#h" className="banner-btn">Shop now</a>
                </div>
              </div>
              <div className="slider-item">
                <img src={therdBanner} alt="new fashion summer sale" className="banner-img" />
                <div className="banner-content">
                  <p className="banner-subtitle">Sale Offer</p>
                  <h2 className="banner-title">New fashion summer sale</h2>
                  <p className="banner-text">
                    starting at &dollar; <b>29</b>.99
                  </p>
                  <a href="#shop" className="banner-btn">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-container">
          <div className="container">
          {/* - SIDEBAR */}
            <div className="sidebar  has-scrollbar">
              <div className="sidebar-category">
                <div className="sidebar-top">
                  <h2 className="sidebar-title">Category</h2>
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
                        <a href="#shirt" className="sidebar-submenu-title">
                          <button className="product-name">Shirt</button>
                          {/* <data value="300" className="stock" title="Available Stock">300</data> */}
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#jacket" className="sidebar-submenu-title">
                        <button className="product-name">jacket</button>
                          {/* <data value="50" className="stock" title="Available Stock">50</data> */}
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#dress" className="sidebar-submenu-title">
                        <button className="product-name">dress & frock</button>
                          {/* <data value="87" className="stock" title="Available Stock">87</data>: */}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-menu-category">
                    <button className="sidebar-accordion-menu" onClick={()=>setGlassesDropDown(!glassesDropDown)}>
                      <div className="menu-title-flex"><p className="menu-title">Footwear</p></div>
                      <div>
                          {
                              glassesDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                          }
                      </div>
                    </button>
                    <ul id="glasses" className={glassesDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"}>
                      <li className="sidebar-submenu-category">
                        <a href="#sunglasses" className="sidebar-submenu-title">
                          <p className="product-name">Sports</p>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#leness" className="sidebar-submenu-title">
                          <p className="product-name">Formal</p>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#leness" className="sidebar-submenu-title">
                          <p className="product-name">Casual</p>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#leness" className="sidebar-submenu-title">
                          <p className="product-name">Party Wear</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-menu-category">
                    <button className="sidebar-accordion-menu" onClick={()=>setBagDropDown(!bagDropDown)}>
                      <div className="menu-title-flex"><p className="menu-title">WATCHES</p></div>
                      <div>
                          {
                              bagDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                          }
                      </div>
                    </button>
                    <ul id="bag" className={bagDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"} >
                      <li className="sidebar-submenu-category">
                        <a href="#bag" className="sidebar-submenu-title">
                          <p className="product-name">Pocket Watch</p>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#backbag" className="sidebar-submenu-title">
                          <p className="product-name">Smart Watch</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* - PRODUCT GRID */}
            <div className="product-main">
              <h2 className="title">New Products</h2>
              <div className="product-grid">
                <>
                  {
                    AllProducts.length > 0
                    ?
                      AllProducts.map(ele=>(
                        <Cart details={ele} key={ele.product_id} style={`firstStyle`} />
                      )) 
                    :
                    <>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                      <div><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                    </>
                  }
                </>
              </div>
            </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default Home