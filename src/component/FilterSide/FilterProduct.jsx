import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';



function FilterProduct({handlProduct , title , mainClass , socendClass , ProductBy , parameter ,filterByPrice ,filterProducts , id}) {
  var min = document.getElementById("min")
  var max = document.getElementById("max")

  return (
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
  )
}

export default FilterProduct