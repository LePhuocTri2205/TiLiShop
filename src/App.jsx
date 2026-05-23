import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard";
import ManageBanhTrang from "./pages/banhtrang";
import ManageNuocMam from "./pages/nuocmam";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "banhtrang",
          element: <ManageBanhTrang />,
        },
        {
          path: "nuocmam",
          element: <ManageNuocMam />,
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
