import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="createEvent" element={<CreateEvent />} />
          <Route path="eventDetails" element={<EventDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
