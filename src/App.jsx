import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollUpButton from "./components/ScrollUpButton";
import ScrollManager from "./components/ScrollManager";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Page() {
  return (
    <>
      <ScrollManager />
      <ScrollUpButton />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/home" element={<Page />} />
      <Route path="/about" element={<Page />} />
      <Route path="/services" element={<Page />} />
      <Route path="/skills" element={<Page />} />
      <Route path="/projects" element={<Page />} />
      <Route path="/contact" element={<Page />} />
      <Route path="*" element={<Page />} />
    </Routes>
  );
}
