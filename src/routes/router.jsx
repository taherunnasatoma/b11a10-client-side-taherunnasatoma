import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import AddRoommate from "../components/AddRoommate";
import UpdateRoommate from "../components/UpdateRoommate";
import BrowseListings from "../components/BrowseListings";
import RoommateDetails from "../components/RoommateDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
import MyListings from "../components/MyListings";
import Loading from "../components/Loading";


const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Home,
            children: [

                {
                    index: true,
                    loader: () => fetch('http://localhost:3000/roommates'),
                    Component: HomeLayout,
                    hydrateFallbackElement:<Loading></Loading>
                },
                {
                    path: 'addRoommate',
                    Component: AddRoommate
                },
                {
                    path: 'browseListing',
                    Component: BrowseListings

                },
                 {
                    path: 'my-listings',
                    element: (
                        <PrivateRoute>
                            <MyListings />
                        </PrivateRoute>
                    )
                },


                {
                    path: '/roommate/:id',
                    loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                    element: (
                        <PrivateRoute>
                            <RoommateDetails />
                        </PrivateRoute>
                        
                    )
                },
               

               
        {
                    path: 'updateRoommate',
                    Component: UpdateRoommate
                },
                {
                    path: 'login',
                    Component: Login
                },
                {
                    path: 'register',
                    Component: Register
                }

            ]
        },
        {
            path: '/auth',
            Component: AuthLayout,
            children: [
                {
                    path: 'login',
                    Component: Login
                },
                {
                    path: 'register',
                    Component: Register
                }
            ]
        },
        {
            path: '/*',
            Component: ErrorPage
        },
    ]);

export default router;