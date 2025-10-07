import {useState, useEffect} from "react";

const useRestrauntMenu = () => {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9615398&lng=79.2961468&restaurantId=${resID}`);
        const json = await data.json();
        console.log(json);
        setMenuList(json.data.menu.items);
    }

    return menuList;
}

export default useRestrauntMenu;