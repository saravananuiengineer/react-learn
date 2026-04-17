import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
    createBrowserRouter,
    RouterProvider, Outlet
} from "react-router-dom";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
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
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
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
