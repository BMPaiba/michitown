import { HomeLayout } from "../layout/HomeLayout";
import { Home } from "../pages/Home";

export const homeRoutes = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];