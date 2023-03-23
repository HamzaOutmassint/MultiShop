import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Cart = () => {
  return (
    <div className="showcase">
        <div className="showcase-banner">
        <img src={require('../../assets/images/products/jacket-3.jpg')} alt="Mens Winter Leathers Jackets" width="300" className="product-img default"/>
        <p className="showcase-badge">15%</p>
        <div className="showcase-actions">
            <abbr title='add to favorite'><button className="btn-action"><FavoriteBorderRoundedIcon /></button></abbr>
            <button className="btn-action"><RemoveRedEyeOutlinedIcon /></button>
            <abbr title='add to cart'><button className="btn-action"><EnhancedEncryptionOutlinedIcon /></button></abbr>
        </div>
        </div>
        <div className="showcase-content">
        <a href="#jh" className="showcase-category">jacket</a>
        <a href="#j"><h3 className="showcase-title">Mens Winter Leathers Jackets</h3></a>
        <div className="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
        </div>
        <div className="price-box">
            <p className="price">$48.00</p>
            <del>$75.00</del>
        </div>
        </div>
    </div>
  )
}

export default Cart