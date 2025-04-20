import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalProvider>
  )
  ;
}

export default App;
