import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import AddRoommate from "../components/AddRoommate";
import UpdateRoommate from "../components/UpdateRoommate";
import BrowseListings from "../components/BrowseListings";
import RoommateDetails from "../components/RoommateDetails";


const router = createBrowserRouter(
    [
        {
            path:"/",
            Component:Home,
            children:[

                {
                    index:true,
                    loader:()=>fetch('http://localhost:3000/roommates'),
                    Component:HomeLayout
                },
                {
                    path:'addRoommate',
                    Component:AddRoommate
                },
                {
                  path:'browseListing',
                  Component:BrowseListings

                },
               {
                path:'/roommate/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                Component:RoommateDetails
               },
                {
                    path:'updateRoommate',
                    Component:UpdateRoommate
                }

            ]
        },
        {
            path:'/auth',
            Component:<h2>Authentication Layout</h2>
        },
        {
            path:'/*',
            Component:<h2>Error 404</h2>
        },
    ]);

 export default router;