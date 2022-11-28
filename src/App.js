
import './App.css'
import { route } from "./layouts/route";
import { RouterProvider } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL='https://usedcarzone-server.vercel.app'
function App() {
  const router = route;
  return (
    <div className="App">
      <RouterProvider router={router}>
        </RouterProvider>
    </div>
  );
}

export default App;
