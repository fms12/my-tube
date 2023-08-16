import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResult from './components/SearchResult';
import store from "./utils/redux/store";
import { Provider } from "react-redux";


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
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>

    <div className="m-0 p-0 border-0 bg-[#0f0f0f] w-[100vw] min-h-[100vh] box-border">
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
