import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import {FormatPrice} from "../Context/ContextFile"
	
const Cart = ({details}) => {
  return (
    <div className="showcase">
        <div className="showcase-banner">
        <img src={require(`../../assets/images/products/${details.product_image}`)} alt="Mens Winter Leathers Jackets" width="300" className="product-img default"/>
        {
          details.status==="in stock" ? null : <p className="showcase-badge angle black">sale</p>
        }
        <div className="showcase-actions">
            <abbr title='add to favorite'><button className="btn-action"><FavoriteBorderRoundedIcon /></button></abbr>
            <button className="btn-action"><RemoveRedEyeOutlinedIcon /></button>
            <abbr title='add to cart'><button className="btn-action"><EnhancedEncryptionOutlinedIcon /></button></abbr>
        </div>
        </div>
        <div className="showcase-content">
        <a href="#jh" className="showcase-category">{details.product_name}</a>
        <a href="#j"><h3 className="showcase-title">{details.description}</h3></a>
        <div className="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
        </div>
        <div className="price-box">
            <p className="price">{FormatPrice(details.product_price)}</p> 
            <del>{FormatPrice(details.old_price)}</del>
        </div>
        </div>
    </div>
  )
}

export default Cart