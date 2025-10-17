import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { Register } from "../../pages/register/Register";
import { Main } from "../../pages/main/Main";
import { Recovery } from "../../pages/recovery/Recovery";
import { User } from "../../pages/user/User";
import { Skills } from "../../pages/skills/Skills";
import { Languages } from "../../pages/languages/Languages";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recovery",
        element: <Recovery />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/user/:id/skills",
        element: <Skills />,
      },
      {
        path: "/user/:id/languages",
        element: <Languages />,
      },
    ]}
])