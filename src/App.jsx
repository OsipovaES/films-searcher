import { Layout } from "./components/layout/component";
import { UserContextProvider } from "./contexts/user";
import { Header } from "./components/header/component";
import { Home } from "./pages/home/component";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FilmPage } from "./pages/filmPage/component";

const Root = () => {
  return (
    <UserContextProvider>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </UserContextProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "film/:filmId",
        element: <FilmPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
