import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Oops! An error has occurred.</div>}>
        <Home />
      </ErrorBoundary>
    </>
  );
}

export default App;
