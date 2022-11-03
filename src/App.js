import { Result } from "postcss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";


const App = () => {
    
    return(

  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/quiz" exact element={<Quiz />} /> */}
      <Route path="/result" exact element={<Result />} />
    </Routes>
  </BrowserRouter>
)};

export default App;
