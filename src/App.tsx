import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Settings } from "./pages/Settings";
import { NavBar } from "./components/customLayouts/NavBar";
import { TempleExplorer } from "./pages/TempleExplorer";
import { NewEntry } from "./pages/Journal/NewEntry";
import {Journal} from "./pages/Journal/Journal";
import { PrivateRoute } from "./authentication/PrivateRoute";

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
          <Route path="/new" element={<PrivateRoute><NewEntry /></PrivateRoute>} />
          <Route path="/journal" element={<PrivateRoute><Journal /></PrivateRoute>} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
