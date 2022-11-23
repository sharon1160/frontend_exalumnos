import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Jobs from "../Jobs";
import Navbar from "../Navbar";
import Profile from "../Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="bolsaTrabajo" element={<Jobs />} />
          <Route path="perfil" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
