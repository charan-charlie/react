import React, { useState } from "react";
import RestaurantCard from "./Restuarent";
import { restaurantList } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    // const fetchData = async () => {
    //     const data = await fetch(
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );
    //     const json = await data.json();
    //     console.log(json);
    // }
    
    // fetchData();

    if (onlineStatus === false) {
        return <h1>Offline ! Please check your internet connection</h1>
    }



    return (
        <div className = "body">
            <div className = "filter-container">
                <div>
                    <input type = "text" className = "search-box"  value = {searchText} onChange = {(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick = {() => {
                        setListOfRestaurants(restaurantList.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}
                    >Search</button>
                </div>
                <button className = "filter-btn" onClick = {() => {
                    setListOfRestaurants(restaurantList.filter((restaurant) => parseFloat(restaurant.data.avgRating) > 2.0));
                }}>
                    Top Rated
                </button>     
            </div>
            <div className = "res-container">
                {listOfRestaurants.map(({ data: { id, name, avgRating, cuisines } }) => (
                   <Link to = {"/restaurants/"+id} key = {id}><RestaurantCard 
                            name = {name} 
                            rating = {avgRating} 
                            cuisines = {cuisines}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;