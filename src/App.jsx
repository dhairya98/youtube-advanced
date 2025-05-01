import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <div className="h-[calc(100vh-100px)] overflow-y-auto">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
