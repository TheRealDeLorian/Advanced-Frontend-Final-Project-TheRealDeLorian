import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { Home } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Settings } from "./pages/Settings";
import { NavBar } from "./components/customLayouts/NavBar";
import { TempleExplorer } from "./pages/TempleExplorer";
import { NewEntry } from "./pages/Journal/NewEntry";
import {Journal} from "./pages/Journal/Journal";

function App() {
  return (
    <>
      <Toaster />
      <NavBar></NavBar>
      <ErrorBoundary
        fallback={
          <div>
            Oops! An error has occurred. Try refreshing and/or signing out, then
            sign back in.
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temples" element={<TempleExplorer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/new" element={<NewEntry />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
