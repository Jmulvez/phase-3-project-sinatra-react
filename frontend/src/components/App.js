import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={Home}/>
            </Routes>
        </div>
    )
}

export default App;