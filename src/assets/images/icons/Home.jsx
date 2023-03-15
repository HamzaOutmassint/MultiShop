import './home.scss';
import { NavLink } from "react-router-dom"
import { useContext} from "react";
import Cart from '../../components/cart/cart';
import {sliderOne , sliderTwo , sliderThree , menImg ,womenImg ,accessoirImg} from "../Images"
import { AllData } from '../../components/Context/ContextFile';
import deliveryTruck  from "../../components/images/Logo/delivery-truck-truck-svgrepo-com.svg"
import returnBox  from "../../components/images/Logo/return-box.svg"
import customerSupport  from "../../components/images/Logo/customer-support.svg"
import Skeleton from '@mui/material/Skeleton';

function Home() {
  const allData = useContext(AllData)
  return (
    <>
    <div className='container-fluid'>
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> 
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active therdImage">
            <img src={sliderThree} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sliderTwo} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sliderOne} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className='container mt-4 mb-2'>
      <div className="row">
        {/* <span className="title">CATEGORIES<span></span> <hr/></span> */}
        <span className='text-center title'>CATEGORIES</span>
      </div>
      <div className='row categories'>
        <NavLink to="Men" className='col-lg-4 col-sm-12'>
          <div className=' menImg'>
              <img src={menImg} loading="lazy" alt="menImage" />
          </div>
          </NavLink>
          <NavLink to="Women" className='col-lg-4 col-sm-12'>
          <div className=' womenImg'>
            
              <img src={womenImg} loading="lazy" alt="womenImage"/>
          </div>
          </NavLink>
          <NavLink to="Accessories" className='col-lg-4 col-sm-12'>
          <div className=' accessiorImg' id='bestSeller'>
              <img src={accessoirImg} loading="lazy" alt="AccessiorImage"/>
          </div>
          </NavLink>
      </div>
    </div>
    <div className='container mb-2 productsContainer' >
      <div className="row">
        {/* <span className="title">All Products<span></span> <hr/></span>  */}
        <span className='text-center title col-lg-12 col-sm-12 col-md-12' >
          BEST SELLER 
          <span>TOP PRODUCTS OF THIS WEEK</span>
        </span>
        <div className="row ">
          {
            allData.length > 0 
            ?
              allData.map((ele,index)=>(
                <Cart Style="home" 
                  key={index}
                  product_image={ele.product_image} product_name={ele.product_name} 
                  product_price={ele.product_price} old_price={ele.old_price} 
                  product_id={ele.product_id} page="Home"
                  item={ele}
                  status={ele.status}
                />
              ))
            :
              <>
              <div className='text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
              </>
          }
        </div>
      </div>
    </div>
    <div style={{backgroundColor : "#fff" , alignItems: "center" , display : "flex" , height:"220px"}}>
      <div className='container mb-2 support'>
        <div className='row forYou'>
          <div className='col-xs-12 col-md-6 col-lg-4'>
            <img src={deliveryTruck} alt="delivery truck" />
            <div className='freeShiping'>
              <span>FREE SHIPING</span>
              <p>Orders 50$ or more</p>
            </div>
          </div>
          <div className='col-xs-12 col-md-6 col-lg-4'>
            <img src={customerSupport} alt="support" style={{height: "55px"}} />
            <div className='freeShiping'>
              <span>SUPPORT 24/7</span>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className='col-xs-12 col-md-6 col-lg-4'>
            <img src={returnBox} alt="return box" />
            <div className='freeShiping'>
              <span>FREE RETURNS</span>
              <p>Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Home