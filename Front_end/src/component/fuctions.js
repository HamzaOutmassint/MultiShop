
const handlProduct = (PTS)=>{
  if(PTS === "brand"){
    if(document.querySelector(`.product-${PTS} .title .min`).classList.value === "min"){
      document.querySelector(`.product-${PTS} .wear-${PTS}`).className=`wear-${PTS} negative`
      document.querySelector(`.product-${PTS} .wear-${PTS} .price`).className=`display`
      document.querySelector(`.product-${PTS} .wear-${PTS} button`).className=`display`
      document.querySelector(`.product-${PTS} .title .plus`).className="plus"
      document.querySelector(`.product-${PTS} .title .min`).className="min active"
      document.querySelector(`.product-${PTS} .title`).className="title colorTitle"
    }else if(document.querySelector(`.product-${PTS} .title .plus`).classList.value === "plus"){
      document.querySelector(`.product-${PTS} .wear-${PTS}`).className=`wear-${PTS}`
      document.querySelector(`.product-${PTS} .wear-${PTS} .display`).className=`price`
      document.querySelector(`.product-${PTS} .wear-${PTS} button`).className=`MuiButtonBase-root MuiButton-root MuiButton-outlined
       MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall css-1k23hlb-MuiButtonBase-root-MuiButton-root`
      document.querySelector(`.product-${PTS} .title .plus`).className="plus active"
      document.querySelector(`.product-${PTS} .title .min`).className="min"
      document.querySelector(`.product-${PTS} .title`).className="title"
    }
  }else{
    if(document.querySelector(`.product-${PTS} .title .min`).classList.value === "min"){
      document.querySelector(`.product-${PTS} .wear-${PTS}`).className=`wear-${PTS} negative`
      document.querySelector(`.product-${PTS} .title .plus`).className="plus"
      document.querySelector(`.product-${PTS} .title .min`).className="min active"
      document.querySelector(`.product-${PTS} .title`).className="title colorTitle"
    }else if(document.querySelector(`.product-${PTS} .title .plus`).classList.value === "plus"){
      document.querySelector(`.product-${PTS} .wear-${PTS}`).className=`wear-${PTS}`
      document.querySelector(`.product-${PTS} .title .plus`).className="plus active"
      document.querySelector(`.product-${PTS} .title .min`).className="min"
      document.querySelector(`.product-${PTS} .title`).className="title"
    }
  }
    
}
export default handlProduct


export const Departments=[ "all products", "winter","summer","jeans","footwear","jacket" ]
export const Sizes=["S" , "M" , "X" , "XL" , "XLL"]
export const brands=["nike","adidas","zara","lacost","lovi's"]
