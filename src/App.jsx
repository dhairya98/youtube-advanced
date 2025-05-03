import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import SearchResults from "./components/SearchResults";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: <SearchResults />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/watch",
        element: <Watch />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <div className="h-[calc(100vh-25px)] overflow-y-auto mt-5">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
