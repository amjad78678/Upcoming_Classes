import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpcomingClassesPage from "./pages/UpcomingClassesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UpcomingClassesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
