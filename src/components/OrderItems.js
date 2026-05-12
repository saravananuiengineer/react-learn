import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'


const OrderItems = (props) => {
    const {id, name, categories = []} = props.details;
    const data = categories[0]?.category?.items;
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    
    const handleCartToggle = (item) => {
        const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
        if (isInCart) {
            dispatch(removeItem(item));
        } else {
            dispatch(addItem(item));
        }
    }
    
    const getButtonText = (item) => {
        return cartItems.some(cartItem => cartItem.id === item.id) ? 'Remove -' : 'Add +';
    }
    return (
        <div key={id} className="w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#ef4f5f]">{name}</h3>
            <ul className="flex-column space-y space-y-4 text-sm font-medium text-body md:me-4 mb-4 md:mb-0">
                <li className="w-full">


                    <div>
                        {
                            data?.map(({ item }, index) => {
                                const imageUrl = item.media?.[0]?.image?.url;
                                return (
                                    <div key={item.id} className="flex gap-4 p-4 mb-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                        <div className="flex-shrink-0">
                                            {imageUrl && <img src={imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />}
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-semibold text-gray-800 mb-1">
                                                {item.name}
                                            </h4>
                                            {item.desc && (
                                                <p className="text-sm text-gray-600 mb-2">
                                                    {item.desc}
                                                </p>
                                            )}
                                        </div>
                                        <button className="w-[120px] h-8 bg-[#ef4f5f] text-white font-semibold rounded-md hover:bg-[#e63d4d] transition-colors duration-200" onClick={()=>handleCartToggle(item)}>{getButtonText(item)}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default OrderItems;