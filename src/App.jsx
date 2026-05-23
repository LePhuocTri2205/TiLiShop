import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard";
import RicePaperManage from "./pages/ricePaper";
import FishSauceManage from "./pages/fishSauce";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "ricePaper",
          element: <RicePaperManage />,
        },
        {
          path: "fishSauce",
          element: <FishSauceManage />,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />
    },
    {
      path: "register",
      element: <RegisterPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
