import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Cart = () => {
  return (
    <div class="showcase">
        <div class="showcase-banner">
        <img src={require('../../assets/images/products/jacket-3.jpg')} alt="Mens Winter Leathers Jackets" width="300" class="product-img default"/>
        <p class="showcase-badge">15%</p>
        <div class="showcase-actions">
            <abbr title='add to favorite'><button class="btn-action"><FavoriteBorderRoundedIcon /></button></abbr>
            <button class="btn-action"><RemoveRedEyeOutlinedIcon /></button>
            <abbr title='add to cart'><button class="btn-action"><EnhancedEncryptionOutlinedIcon /></button></abbr>
        </div>
        </div>
        <div class="showcase-content">
        <a href="#jh" class="showcase-category">jacket</a>
        <a href="#j"><h3 class="showcase-title">Mens Winter Leathers Jackets</h3></a>
        <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
        </div>
        <div class="price-box">
            <p class="price">$48.00</p>
            <del>$75.00</del>
        </div>
        </div>
    </div>
  )
}

export default Cart