import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Errorpage from "../pages/404/Errorpage";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Homepage from "../pages/Homepage/Homepage";
import Moments from "../pages/Moments/Moments";
import PlaceDetails from "../pages/PlaceDetails/PlaceDetails";
import Places from "../pages/Places/Places";
import GroupDetails from "../pages/TourGroups/GroupDetails";
import TourGroups from "../pages/TourGroups/TourGroups";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/places',
                element: <Places/>
            },
            {
                path: '/places/:placeName',
                element: <PlaceDetails/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails/>
            },
            {
                path: '/tour-groups',
                element: <TourGroups/>
            },
            {
                path: '/tour-groups/:id',
                element: <GroupDetails/>
            },
            {
                path: '/moments',
                element: <Moments/>
            },
            {
                path: '*',
                element: <Errorpage/>
            }
        ]
    }
])