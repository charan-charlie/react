
const RestaurantCard = ({ name, cuisines, rating }) => {
    return (
        <div className = "res-card">
            <div className = "res-logo-container">
                <img 
                    className = "res-logo"
                    alt = "res-logo"
                    src = "https://www.greenqueen.com.hk/wp-content/uploads/2021/01/burger-king.jpg"
                />
            </div>
            <div className = "res-info-container">
                <div>
                    <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                </div>
                <div className = "res-rating-container">
                    <h5>⭐ {rating}</h5>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;