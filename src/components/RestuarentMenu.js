import { useParams } from "react-router-dom";

const RestuarentMenu = () => {

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async() => {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9615398&lng=79.2961468&restaurantId=${resID}`);
    //     const json = await data.json();
    //     console.log(json);
    // }


    const { resID } = useParams();

    return (
        <div className = "menu-container">
            <h1>RestuarentMenu</h1>
            <h2> Menu Items</h2>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Pasta</li>
                <li>Salad</li>
                <li>Dessert</li>
                <li>Drink</li>
                <li>Ice Cream</li>
                <li>Cake</li>
                <li>Restaurant ID: {resID}</li>
            </ul>
        </div>
    )
}

export default RestuarentMenu;