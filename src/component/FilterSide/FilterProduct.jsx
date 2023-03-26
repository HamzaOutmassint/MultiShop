import { Link } from "react-router-dom";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import Button from '@mui/material/Button';
import { useState } from "react";



function FilterProduct({handlProduct , title , mainClass , socendClass , ProductBy , parameter ,filterByPrice ,filterProducts , id}) {
  // var min = document.getElementById("min")
  // var max = document.getElementById("max")
  const [clothesDropDown , setClothesDropDown]= useState(null);
  const [glassesDropDown , setGlassesDropDown]= useState(null);
  const [bagDropDown , setBagDropDown]= useState(null);

  return (
    <div className="sidebar  has-scrollbar">
      <div className="sidebar-category">
        <ul className="sidebar-menu-category-list">
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" onClick={()=>setClothesDropDown(!clothesDropDown)}>
              <div className="menu-title-flex"> <p className="menu-title">Department</p></div>
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
  )
}

export default FilterProduct



/*

<div className="filter-section">
      <div className={mainClass}>
          <div className="title" onClick={()=>handlProduct(parameter)}>
              <h5>{title}</h5>
              <span className="min"><KeyboardArrowDownIcon sx={{ fontSize: 26 , marginTop: "10px" }}/></span>
              <span className="plus active"><KeyboardArrowUpIcon sx={{ fontSize: 26 ,marginTop: "10px" }}/></span>
          </div>
          <div className={socendClass}>
            {
              id==="s"?
              <>
                <ul>
                  {ProductBy.map((ele)=>(
                      <Link to={`?${title} =${ele}`} onClick={()=>filterProducts(ele,title)} key={ele}><li>{ele}</li></Link>
                  ))}
                </ul>               
              </>
              :
              <>
                <div className="price">
                  <div>
                    <span>min</span>
                    <input type="number" placeholder="$0.00" id="min" required />
                  </div>
                  <span style={{ marginBottom: "6px"}}>-</span>
                  <div style={{display: "flex" , flexDirection: "column"}}>
                    <span style={{marginLeft: "14px"}}>max</span>
                    <input type="number" placeholder="$0.00" id="max" required />
                  </div>
                </div>
                <Button variant="outlined" size="small" onClick={(e)=>{if(min.value==="" || max.value===""){e.preventDefault()}else{filterByPrice(min.value,max.value);min.value="";max.value=""}}}>
                  Apply
                </Button>
              </>
            }
          </div>
      </div>
    </div>

*/