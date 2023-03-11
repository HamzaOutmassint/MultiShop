import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


import mainBanner from "../../assets/images/banner-7.jpg"
import therdBanner from "../../assets/images/banner-6.jpg"
import dress from "../../assets/images/icons/dress.svg"
import glasses from "../../assets/images/icons/glasses.svg"
import bag from "../../assets/images/icons/bag.svg"
import "./home.css"
import { useEffect, useState } from 'react';

function Home() {
  const [clothesDropDown , setClothesDropDown]= useState(null);
  const [glassesDropDown , setGlassesDropDown]= useState(null);
  const [bagDropDown , setBagDropDown]= useState(null);
  useEffect(() => {
    if(clothesDropDown){
        document.getElementById("clothes").classList.add('active');
    }else if(clothesDropDown === false){
        document.getElementById("clothes").classList.remove('active');
    }
  }, [clothesDropDown])
  useEffect(() => {
    if(glassesDropDown){
        document.getElementById("glasses").classList.add('active');
    }else if(glassesDropDown === false){
        document.getElementById("glasses").classList.remove('active');
    }
  }, [glassesDropDown])
  useEffect(() => {
    if(bagDropDown){
        document.getElementById("bag").classList.add('active');
    }else if(bagDropDown === false){
        document.getElementById("bag").classList.remove('active');
    }
  }, [bagDropDown])
  return (
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
                <a href="#" className="banner-btn">Shop now</a>
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
                <a href="#" className="banner-btn">Shop now</a>
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
                  <ul id="clothes" class="sidebar-submenu-category-list">
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
                        <p class="product-name">Shirt</p>
                        <data value="300" class="stock" title="Available Stock">300</data>
                      </a>
                    </li>
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
                        <p class="product-name">jacket</p>
                        <data value="50" class="stock" title="Available Stock">50</data>
                      </a>
                    </li>
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
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
                  <ul id="glasses" class="sidebar-submenu-category-list">
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
                        <p class="product-name">Sunglasses</p>
                        <data value="50" class="stock" title="Available Stock">50</data>
                      </a>
                    </li>
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
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
                  <ul id="bag" class="sidebar-submenu-category-list" >
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
                        <p class="product-name">Shopping Bag</p>
                        <data value="62" class="stock" title="Available Stock">62</data>
                      </a>
                    </li>
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
                        <p class="product-name">Gym Backpack</p>
                        <data value="35" class="stock" title="Available Stock">35</data>
                      </a>
                    </li>
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
                        <p class="product-name">Purse</p>
                        <data value="80" class="stock" title="Available Stock">80</data>
                      </a>
                    </li>
                    <li class="sidebar-submenu-category">
                      <a href="#" class="sidebar-submenu-title">
                        <p class="product-name">Wallet</p>
                        <data value="75" class="stock" title="Available Stock">75</data>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* <div class="product-showcase">
              <h3 class="showcase-heading">best sellers</h3>
              <div class="showcase-wrapper">
                <div class="showcase-container">
                  <div class="showcase">
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75" class="showcase-img" />
                    </a>
                    <div class="showcase-content">
                      <a href="#">
                        <h4 class="showcase-title">baby fabric shoes</h4>
                      </a>
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                      <div class="price-box">
                        <del>$5.00</del>
                        <p class="price">$4.00</p>
                      </div>
                    </div>
                  </div>
                  <div class="showcase">
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt" class="showcase-img" width="75" height="75" />
                    </a>
                    <div class="showcase-content">
                      <a href="#">
                        <h4 class="showcase-title">men's hoodies t-shirt</h4>
                      </a>
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>
                      <div class="price-box">
                        <del>$17.00</del>
                        <p class="price">$7.00</p>
                      </div>
                    </div>
                  </div>
                  <div class="showcase">
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/3.jpg" alt="girls t-shirt" class="showcase-img" width="75" height="75" />
                    </a>
                    <div class="showcase-content">
                      <a href="#">
                        <h4 class="showcase-title">girls t-shirt</h4>
                      </a>
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>
                      <div class="price-box">
                        <del>$5.00</del>
                        <p class="price">$3.00</p>
                      </div>
                    </div>
                  </div>
                  <div class="showcase">
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/4.jpg" alt="woolen hat for men" class="showcase-img" width="75" height="75" />
                    </a>
                    <div class="showcase-content">
                      <a href="#">
                        <h4 class="showcase-title">woolen hat for men</h4>
                      </a>
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                      <div class="price-box">
                        <del>$15.00</del>
                        <p class="price">$12.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
      </div>
    </div>
  </main>
  )
}

export default Home