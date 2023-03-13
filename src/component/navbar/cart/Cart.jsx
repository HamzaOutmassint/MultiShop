
const Cart = () => {
  return (
    <div class="showcase">
        <div class="showcase-banner">
        <img src={require('../../../assets/images/products/jacket-3.jpg')} alt="Mens Winter Leathers Jackets" width="300" class="product-img default"/>
        <p class="showcase-badge">15%</p>
        <div class="showcase-actions">
            <button class="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
            </button>
            <button class="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
            </button>
            <button class="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
            </button>
            <button class="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
            </button>
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