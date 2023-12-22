import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import { Suspense, lazy } from "react";
import ShimmerUI from "./Components/ShimmerUI";

const WatchPage = lazy(() => import("./Components/WatchPage"));

function App() {
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
          path: "watch",
          element: (
            <Suspense fallback={<ShimmerUI />}>
              <WatchPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
