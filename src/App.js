import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Service = lazy(() => import("./components/Service"));
const Contact = lazy(() => import("./components/Contact"));


const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
