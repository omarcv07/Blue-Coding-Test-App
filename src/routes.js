import { Navigate } from "react-router-dom";
import GifsPage from "./pages/Gifs";
import GifsHistory from "./pages/GifsHistory";

const routes = [
    {
        element: <GifsPage />,
        path: "gifs",
    },
    {
        element: <GifsHistory />,
        path: 'history',
    },
    {
        path: "*",
        element: <Navigate to="/gifs" />,
    },
];

export default routes;
