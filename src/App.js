import "./styles/App.css";
import Home from "./layout/Home/Home";
import NavBar from "./layout/NavBar/NavBar";
import Work from "./layout/Work/Work";
import About from "./layout/About/About";

function App() {
  return (
    <>
      {/* Idea de Route "/" que contenga estos Components */}
      <NavBar />
      <Home />
      <Work />
      <About />
    </>
  );
}

export default App;
