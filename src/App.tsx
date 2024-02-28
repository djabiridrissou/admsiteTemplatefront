import { Route, Routes } from "react-router-dom";
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Dashboard, Layout } from "./routes/routes";
import { useEffect } from "react";

function App() {

  
  }, );

  return (
    <>
      <div>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="change-password" element={<ChangePassword />} /> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
           
           {/*  <Route path="debt-list" element={<DebtList />} />
            <Route path="users" element={<Users />} />
            <Route path="index-users" element={<IndexUser />}>
              <Route path="users" element={<Users />} />
              <Route path="register" element={<Register />} />
            </Route> */}
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App;
