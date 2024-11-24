import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
      <Toaster />
      <ErrorBoundary fallback={<div>Oops! An error has occurred.</div>}>
        <Home />
      </ErrorBoundary>
    </>
  );
}

export default App;
