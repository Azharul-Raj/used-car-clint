
import './App.css'
import { route } from "./layouts/route";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from 'axios';

axios.defaults.baseURL='http://localhost:3001'

function App() {
  const router = route;
  const queryClint = new QueryClient();
  return (
    <div className="App">
      <RouterProvider router={router}>
      <QueryClientProvider client={queryClint}>
      </QueryClientProvider>
    </RouterProvider>
    </div>
  );
}

export default App;
