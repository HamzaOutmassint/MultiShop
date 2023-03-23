import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import mainBanner from "../../assets/images/banner-7.jpg"
import therdBanner from "../../assets/images/banner-6.jpg"
import "./home.css"
import {useState } from 'react';
import Cart from '../../component/cart/Cart';
import { Footer } from '../../component/footer/Footer';

function Home() {
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
                  <button className="sidebar-close-btn">
                    <KeyboardArrowUpRoundedIcon />
                  </button>
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
                          <p className="product-name">Shirt</p>
                          <data value="300" className="stock" title="Available Stock">300</data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#jacket" className="sidebar-submenu-title">
                          <p className="product-name">jacket</p>
                          <data value="50" className="stock" title="Available Stock">50</data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#dress" className="sidebar-submenu-title">
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
                        <a href="#sunglasses" className="sidebar-submenu-title">
                          <p className="product-name">Sunglasses</p>
                          <data value="50" className="stock" title="Available Stock">50</data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#leness" className="sidebar-submenu-title">
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
              </div>
            </div>
            {/* - PRODUCT GRID */}

            <div className="product-main">
              <h2 className="title">New Products</h2>
              <div className="product-grid">
                  {
                    <>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    </>
                  }
              </div>
            </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
  )
}

export default Home