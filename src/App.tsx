import { ToastContainer } from "react-toastify";
import "animate.css";
import "react-toastify/dist/ReactToastify.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Reservation from "./components/Reservation";
import HoldingContent from "./components/HoldingContent";
import Pbrf from "./components/Pbrf";

import "./App.css";
import Carousel from "./components/Carousel";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorTest from "./components/ErrorTest";

const Testing = () => <div>TESTING</div>;

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
              <Route
                path="/error"
                element={
                  <ErrorBoundary>
                    <ErrorTest />
                  </ErrorBoundary>
                }
              />
            </Routes>
          </div>

          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
