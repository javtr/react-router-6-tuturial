import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/containers/layout.jsx";
import Home from "./components/containers/home.jsx";
import User from "./components/containers/user.jsx";
import Acount from "./components/pure/acount.jsx";
import Profile from "./components/pure/profile.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>} />
          <Route path="user" element={<User></User>}>
            <Route path="acount" element={<Acount></Acount>} />
            <Route path="profile" element={<Profile></Profile>} />
          </Route>
          <Route path="*" element={<h2>404 - not found</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
