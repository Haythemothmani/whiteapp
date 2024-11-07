import { createBrowserRouter, redirect } from "react-router-dom";
import { MainLayout } from "../pages/mainLayout/MainLayout";
import GlobalError from "../pages/errorPages/GlobalError/GlobalError";
import { Landing } from "../pages/landing/Landing";
import { Samples } from "../pages/samples/Samples";

const USER_ROUTES = {
  LIST: "/users",
  BY_ID: "/users/:id",
};

export const ROUTES = {
  ...USER_ROUTES,
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: async () => redirect('/landing'),
     },
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "samples",
        element: <Samples />,
      },
    ],
    errorElement: <GlobalError />,
  },
]);
