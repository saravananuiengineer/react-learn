import { lazy, Suspense } from 'react'
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
    createBrowserRouter,
    RouterProvider, Outlet
} from "react-router-dom";
//import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import SimmerCards from './components/SimmerCards'
import Cart from './components/Cart'
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js'

const Grocery = lazy(() => import('./components/Grocery'));

const AboutUs = lazy(()=> import('./components/About'))

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<SimmerCards />}><AboutUs /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<SimmerCards />}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/bangalore/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/bangalore/:id",
                element: <RestaurantMenu />
            }

        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
