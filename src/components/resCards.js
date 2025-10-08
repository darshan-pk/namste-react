export const ResturentCard = (props) =>{
  let {resObj = {}} = props || {}
  let {name,cuisines,costForTwo,avgRatingString} = resObj?.info || {}
  return(
    <div className="res-container">
      <div className="res-img-container">
        <img className="img-src" src= {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resObj?.info?.cloudinaryImageId}`} ></img>
      </div>
      <div className="content">
        <h5>{name}</h5>
        <h5>{cuisines?.join(", ")}</h5>
        <h5>{costForTwo}</h5>
        <h5>{avgRatingString} Star</h5>
        <h5>45 mins</h5>
      </div>
    </div>
  )
}