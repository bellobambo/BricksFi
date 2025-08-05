import Home from "../component/pages/Home";
import Marketplace from "../component/pages/Marketplace";
import WaitList from "../component/pages/WaitList";
import NotFound from "../component/pages/NotFound";

export const routes = [
  {
    path: "/",
    element: Home,
    name: "Home",
    showInNav: true,
  },
  {
    path: "/marketplace",
    element: Marketplace,
    name: "Marketplace",
    showInNav: true,
  },
  {
    path: "/waitlist",
    element: WaitList,
    name: "Waitlist",
    showInNav: true,
  },
  {
    path: "*",
    element: NotFound,
    name: "Not Found",
    showInNav: false,
  },
];

export default routes;
