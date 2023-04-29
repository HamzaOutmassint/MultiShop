import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import userImage from "../../assets/images/icons/user-image.png"
import Pagination from '@mui/material/Pagination';

const CustomerReviews =({Reviews , totalReviews , ReviewsPerPage , paginate , page})=>{
    const pageNumbers = Math.ceil(totalReviews / ReviewsPerPage) 
    return(
        <>{
        Reviews.map((ele,index)=>(
            <div className="spr-review" key={index}>
                <div className="spr-review-header">
                <div className='AccountDetails'>
                    <Stack direction="row" spacing={2}>
                    <Avatar  alt="user image"  src={userImage}  sx={{ width: 30, height: 30 }}/>
                    </Stack>
                    <div className='name'>{ele.name}</div>
                </div>
                <div className="rating">
                    <Stack spacing={1}>
                    <Rating name="size-small" readOnly value={parseInt(ele.value)}/>
                    </Stack>
                    <span className="review-title">{ele.title}</span>
                </div>
                <span className="nameAndTime">
                    Reviewed on {ele.dateReview}
                </span>
                </div>
                <div className="spr-review-content">
                <p>{ele.content}</p>
                </div>
            </div>
            ))
        }
        <Stack spacing={2}>
            <Pagination count={pageNumbers} page={page} defaultPage={1}  size="small" onChange={paginate}/>
        </Stack>
        </>
        )
}

export default CustomerReviews;
