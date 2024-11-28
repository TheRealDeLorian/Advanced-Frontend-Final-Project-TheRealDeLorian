import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Settings } from "./components/pages/Settings";
import { NavBar } from "./components/NavBar";
import { TempleExplorer } from "./components/pages/TempleExplorer";


function App() {
  return (
    <>
      <Toaster />
      <NavBar></NavBar>
      <ErrorBoundary fallback={<div>Oops! An error has occurred.</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temples" element={<TempleExplorer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
