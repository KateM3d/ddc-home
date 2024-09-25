import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Expertise from "./components/expertise/Expertise";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Reasons from "./components/reasons/Reasons";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/portfolio" element={<div>Portfolio Page</div>} />
        <Route path="/faq" element={<div>FAQ Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
      <About />
      <Expertise />
      <Reasons />
      <Portfolio />
      <Clients />
      <Feedback />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
