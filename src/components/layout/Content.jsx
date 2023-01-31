import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from './../../views/examples/Param';
import NotFound from './../../views/examples/notFound';
 
const Content = props => (
  <main className="Content">
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route exact path="/param/:id" element={<Param />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="*" element={<NotFound />} />

    </Routes>
   
  </main>
);
 
export default Content;

//This repository contains my codes from a react's course. That one consists in the navigation and routes parts, where I do a simple project with the teacher to practice.

//Esse repositório contém meus códigos de um curso de react. Esse específico, consiste na parte de navegação e rotas, na qual juntamente com o professor, eu faço um simples projeto para praticar.