import FilterProduct from "./FilterProduct"
import './filterSide.css'

function FilterSide({ProductBySize,ProductByType,brands,handlProduct,Data,filterProducts,filterByPrice}) {


  return (
    <nav className="section-left">
      <FilterProduct 
        handlProduct={handlProduct} 
        title="department" 
        mainClass="product-type"
        socendClass="wear-type"
        ProductBy={ProductByType}
        parameter="type"
        filterProducts={filterProducts}
        Data={Data}
        id="s"
        />

        <FilterProduct 
        handlProduct={handlProduct} 
        title="size" 
        mainClass="product-size"
        socendClass="wear-size"
        ProductBy={ProductBySize}
        parameter="size"
        filterProducts={filterProducts}
        Data={Data}
        id="s"
        />
        
      <FilterProduct 
        handlProduct={handlProduct} 
        title="prices" 
        mainClass="product-brand"
        socendClass="wear-brand"
        ProductBy={brands}
        parameter="brand"
        filterByPrice={filterByPrice}
        Data={Data}
        id="j"
        />

    </nav>
  )
}

export default FilterSide