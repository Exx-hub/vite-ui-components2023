import { ToastContainer } from "react-toastify";
import "animate.css";
import "react-toastify/dist/ReactToastify.min.css";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Reservation from "./components/Reservation";
import HoldingContent from "./components/HoldingContent";
import Pbrf from "./components/Pbrf";

import Carousel from "./components/Carousel";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorTest from "./components/ErrorTest";
import TestingPlayground from "./components/TestingPlayground";
import UseEffect from "./components/UseEffect";
import AccordionPage from "./components/AccordionPage";
import CollapsiblePage from "./components/CollapsiblePage";

const Testing = () => <div>HOME DUMMY CONTENT</div>;

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <SideNav />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Testing />} />
              <Route path="/pbrf" element={<Pbrf />} />
              <Route path="/holding" element={<HoldingContent />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route path="/playground" element={<TestingPlayground />} />
              <Route path="/useEffect" element={<UseEffect />} />
              <Route
                path="/error"
                element={
                  <ErrorBoundary>
                    <ErrorTest />
                  </ErrorBoundary>
                }
              />

              <Route path="/accordion" element={<AccordionPage />} />
              <Route path="/collapsible" element={<CollapsiblePage />} />
            </Routes>
          </div>

          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
