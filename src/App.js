import React from "react";

import { Route, Routes } from "react-router-dom";
import Indexpage from "./components/Indexpage";
import FrontEndLayout from "./components/FrontEndLayout/FrontEndLayout";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutLayout from "./components/AboutLayout/AboutLayout";
import ContactUsLayout from "./components/ContactUsLayout/ContactUsLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Indexpage />} />
      <Route path="/Aboutus" element={<AboutLayout />} />
      <Route path="/Frontend_AI" element={<FrontEndLayout />} />
      <Route path="/ContactUs" element={<ContactUsLayout />} />
    </Routes>
  );
};

export default App;
