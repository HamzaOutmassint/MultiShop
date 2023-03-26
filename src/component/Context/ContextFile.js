import { createContext } from "react"

// create the context add to cart
export const AddToCartContext = createContext(null);

// create the context of the wishlist
export const WishlistContext = createContext(null);

// create the context add to wishlist
export const AddToWishlistContext = createContext(null);

// create the context remove from wishlist
export const RemoveFromWishlistContext = createContext(null);

// create the context men data 
// export const MenProductsContext = createContext(null);

// // create the context women data 
// export const WomenProductsContext = createContext(null);

// // create the context Accessories data 
// export const AccessoriesProductsContext = createContext(null);

// create the context All data 
export const AllProductsContext = createContext(null);

// format the pricing
const FormatPrices = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
export const FormatPrice =(number)=>{
   return FormatPrices.format(number)
}