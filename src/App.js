import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";

const App = () => (
<BrowserRouter>
<Routes>
<Route path="/" exact element={<Home/>}/>
<Route path="/quiz" exact element={<Quiz/>}/>
</Routes>
</BrowserRouter>
)
 


export default App;
