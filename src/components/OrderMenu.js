import {useState, useEffect} from 'react'
import useFetchOrders from '../utils/useFetchOrders.js'
import SimmerCards from "../components/SimmerCards"
import OrderItems from "../components/OrderItems"
const OrderMenu = (props)=>{

    const {orderData} = useFetchOrders(props.id);
    console.log(orderData?.menus);
    const menus = orderData?.menus || [];
    const [activeTab,setActiveTab] = useState(false);
    const [activeId,setActiveId] = useState(null);
    const [menuItem,setMenuItem] = useState([]); 

    useEffect(()=>{
        if (menus.length > 0) {
            const defaultMenuItem = menus[0].menu;
            setMenuItem(defaultMenuItem);
            setActiveId(defaultMenuItem.id);
        }
    },[menus])

    const getMenu = (id) => {
        const activeMenus = menus.filter((data) => data.menu.id === id);
        setMenuItem(activeMenus[0].menu);
        setActiveId(id);
    }

    return (!orderData || menus.length === 0) ? <SimmerCards />  : (
        <div>
            <div className="flex row-auto justify-between">
            <div className="w-[20%]">
                    {
                        menus.map((data) => {
                            const { name, categories, id } = data.menu
                            return (
                                <div key={id} className="w-full">
                                    <ul className="flex-column space-y space-y-4 text-sm font-medium text-body md:me-4 mb-4 md:mb-0">
                                        <li className="w-full">
                                            <button type="button" onClick={() => getMenu(id)}
                                                className={activeId === id
                                                    ?
                                                    "inline-flex items-center px-4 py-2.5 bg-brand rounded-base active w-full text-[#ef4f5f] border-r-2 border-r-[#ef4f5f] bg-[linear-gradient(90deg,_rgb(255_255_255),_rgb(255_237_239))]"
                                                    : "inline-flex items-center px-4 py-2.5 bg-brand rounded-base active w-full hover:text-[#ef4f5f] border-r-2 hover:border-r-[#ef4f5f] hover:bg-[linear-gradient(90deg,_rgb(255_255_255),_rgb(255_237_239))]"} aria-current="page">
                                                {name} ( {categories[0].category.items.length} )
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
            </div>
            <div className="w-[80%]">
               {
                 menuItem && <OrderItems details={menuItem} />
               }
            </div>
            </div>
        </div>
    )
    

}

export default OrderMenu;