import { Routes, Route } from "react-router-dom";
import { HomePageComponent } from "../../pages/index.js";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/home" element={<HomePageComponent />} />
        <Route path="*" element={<HomePageComponent />} />
      </Routes>
    </>
  );
};
