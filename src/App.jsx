import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard";
import ManageBanhTrang from "./pages/banhtrang";
import ManageNuocMam from "./pages/nuocmam";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
