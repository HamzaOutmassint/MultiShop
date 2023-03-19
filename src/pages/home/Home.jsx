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

        <div class="product-container">
          <div class="container">
          {/* - SIDEBAR */}
            <div class="sidebar  has-scrollbar">
              <div class="sidebar-category">
                <div class="sidebar-top">
                  <h2 class="sidebar-title">Category</h2>
                  <button class="sidebar-close-btn">
                    <KeyboardArrowUpRoundedIcon />
                  </button>
                </div>
                <ul class="sidebar-menu-category-list">
                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" onClick={()=>setClothesDropDown(!clothesDropDown)}>
                      <div class="menu-title-flex"> <p class="menu-title">Clothes</p></div>
                      <div>
                          {
                              clothesDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                          }
                      </div>
                    </button>
                    <ul id="clothes" class={clothesDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"}>
                      <li class="sidebar-submenu-category">
                        <a href="#shirt" class="sidebar-submenu-title">
                          <p class="product-name">Shirt</p>
                          <data value="300" class="stock" title="Available Stock">300</data>
                        </a>
                      </li>
                      <li class="sidebar-submenu-category">
                        <a href="#jacket" class="sidebar-submenu-title">
                          <p class="product-name">jacket</p>
                          <data value="50" class="stock" title="Available Stock">50</data>
                        </a>
                      </li>
                      <li class="sidebar-submenu-category">
                        <a href="#dress" class="sidebar-submenu-title">
                          <p class="product-name">dress & frock</p>
                          <data value="87" class="stock" title="Available Stock">87</data>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" onClick={()=>setGlassesDropDown(!glassesDropDown)}>
                      <div class="menu-title-flex"><p class="menu-title">Glasses</p></div>
                      <div>
                          {
                              glassesDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                          }
                      </div>
                    </button>
                    <ul id="glasses" class={glassesDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"}>
                      <li class="sidebar-submenu-category">
                        <a href="#sunglasses" class="sidebar-submenu-title">
                          <p class="product-name">Sunglasses</p>
                          <data value="50" class="stock" title="Available Stock">50</data>
                        </a>
                      </li>
                      <li class="sidebar-submenu-category">
                        <a href="#leness" class="sidebar-submenu-title">
                          <p class="product-name">Lenses</p>
                          <data value="48" class="stock" title="Available Stock">48</data>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-menu-category">
                    <button class="sidebar-accordion-menu" onClick={()=>setBagDropDown(!bagDropDown)}>
                      <div class="menu-title-flex"><p class="menu-title">Bags</p></div>
                      <div>
                          {
                              bagDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                          }
                      </div>
                    </button>
                    <ul id="bag" class={bagDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"} >
                      <li class="sidebar-submenu-category">
                        <a href="#bag" class="sidebar-submenu-title">
                          <p class="product-name">Shopping Bag</p>
                          <data value="62" class="stock" title="Available Stock">62</data>
                        </a>
                      </li>
                      <li class="sidebar-submenu-category">
                        <a href="#backbag" class="sidebar-submenu-title">
                          <p class="product-name">Gym Backpack</p>
                          <data value="35" class="stock" title="Available Stock">35</data>
                        </a>
                      </li>
                      <li class="sidebar-submenu-category">
                        <a href="#purs" class="sidebar-submenu-title">
                          <p class="product-name">Purse</p>
                          <data value="80" class="stock" title="Available Stock">80</data>
                        </a>
                      </li>
                      <li class="sidebar-submenu-category">
                        <a href="#h" class="sidebar-submenu-title">
                          <p class="product-name">Wallet</p>
                          <data value="75" class="stock" title="Available Stock">75</data>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* - PRODUCT GRID */}

            <div class="product-main">
              <h2 class="title">New Products</h2>
              <div class="product-grid">
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