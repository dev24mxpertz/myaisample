import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CounterAnimation from "./components/CounterAnimation/CounterAnimation";
import IndexPage from "./components/indexPage/IndexPage";
import AboutPage from "./components/aboutPage/AboutPage";
import ContactUsPage from "./components/contactUsPage/ContactUsPage";
import BackendPage from "./components/backendPage/BackendPage";
import FrontendPage from "./components/frontendPage/FrontendPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingduration, setloadingduration] = useState(6200);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), loadingduration);
  }, []);

  return (
    <>
      {isLoading ? (
        <CounterAnimation loadingduration={loadingduration} />
      ) : (
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/AboutUs" element={<AboutPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
          <Route path="/BackendPage" element={<BackendPage />} />
          <Route path="/FrontendPage" element={<FrontendPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
