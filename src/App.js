import React from "react";

import { Route, Routes } from "react-router-dom";
import Indexpage from "./components/Indexpage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Indexpage/>} />
    </Routes>
  );
};

export default App;
