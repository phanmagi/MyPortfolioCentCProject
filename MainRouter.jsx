//MyPortfolio, Zachary Lyons, 301192787, 2024-09-27

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Service from './src/services';
import Project from './src/project';
//import CustomImage from './src/customlogo.jpg'


const MainRouter = () => (
    <div>
        <Layout />
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
);

export default MainRouter;