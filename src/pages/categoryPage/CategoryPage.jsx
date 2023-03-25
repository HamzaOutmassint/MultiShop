import CustomSeparator from '../../component/breadcrumbs/breadcrumbs'

export const CategoryPage = ({get}) => {
    if(get==="Men"){
        return (
          <>
          <CustomSeparator Get="Men"/>
          {/* <Products 
            page="Men"
            handlProduct={handlProduct} 
            ProductByType={ProductByType} 
            ProductBySize={ProductBySize}
            brands={brands}
            productImage={sweatshirtBlue} Style={style} 
            handlSecondProductStyle={handlSecondProductStyle} 
            handlFirstProductStyle={handlFirstProductStyle}
            Data={menData}
          /> */}
          </>
        )
    }else if(get==="Women"){
        return(
          <>
          <CustomSeparator Get="Women"/>
          {/* <Products 
            page="Women"
            handlProduct={handlProduct} 
            ProductByType={ProductByType} 
            ProductBySize={ProductBySize}
            brands={brands}
            productImage={jacket} Style={style} 
            handlSecondProductStyle={handlSecondProductStyle} 
            handlFirstProductStyle={handlFirstProductStyle}
            Data={womenData}
          /> */}
          </>
        )
    }else if(get==="Accessories"){
        return(
          <>
          <CustomSeparator Get="Accessories"/>
          {/* <Products 
            page="Accessories"
            handlProduct={handlProduct} 
            ProductByType={ProductByType} 
            ProductBySize={ProductBySize}
            brands={brands}
            productImage={Cap} Style={style} 
            handlSecondProductStyle={handlSecondProductStyle} 
            handlFirstProductStyle={handlFirstProductStyle}
            Data={accessoriesData}
          /> */}
          </>
        )
    }
}
