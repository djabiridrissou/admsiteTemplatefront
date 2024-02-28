import { Route, Routes } from "react-router-dom";
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Dashboard, Layout } from "./routes/routes";

function App() {

  return (
    <>
      <div>
        <Routes>
         
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App;
