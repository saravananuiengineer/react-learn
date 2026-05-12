import { useDispatch, useSelector } from 'react-redux'
import {clearCart} from '../utils/cartSlice'
const Cart = () => {
    const data = useSelector(state=>state?.cart?.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return(
        <>
        <button className="w-[120px] h-8 bg-[#ef4f5f] text-white font-semibold rounded-md hover:bg-[#e63d4d] transition-colors duration-200" onClick={handleClearCart}>Clear Cart</button>
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-body md:me-4 mb-4 md:mb-0">
                <li className="w-full">
                    <div>
                        {
                            data?.map(({ id, media, name, desc }, index) => {
                                const imageUrl = media?.[0]?.image?.url;
                                return (
                                    <div key={id} className="flex gap-4 p-4 mb-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                        <div className="flex-shrink-0">
                                            {imageUrl && <img src={imageUrl} alt={name} className="w-24 h-24 object-cover rounded-md" />}
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-semibold text-gray-800 mb-1">
                                                {name}
                                            </h4>
                                            {desc && (
                                                <p className="text-sm text-gray-600 mb-2">
                                                    {desc}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>

            </ul>
        </>
    )
}

export default Cart;