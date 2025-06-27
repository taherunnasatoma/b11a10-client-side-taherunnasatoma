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
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../components/Dashboard/DashboardHome";


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
                    hydrateFallbackElement: <Loading></Loading>
                },
                {
                    path: 'addRoommate',
                    element: (
                        <PrivateRoute>
                            <AddRoommate />
                        </PrivateRoute>
                    )
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
                    Component: RoommateDetails
                },



                {
                    path: 'updateRoommate/:id',
                    loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
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
            path: "/dashboard",
            element: (
                <PrivateRoute>
                    <DashboardLayout />
                </PrivateRoute>
            ),
            children: [
                {
                    index: true,
                    element: <DashboardHome />
                },

                {
                    path: "add-item",
                    element: <AddRoommate />
                },
                {
                    path: "my-items",
                    element: <MyListings />
                }
            ]
        },

        {
            path: '/*',
            Component: ErrorPage
        },
    ]);

export default router;