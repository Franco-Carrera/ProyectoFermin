import "./styles/App.css";
import { ContextWrapper } from "./utils/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import NavBar from "./layout/NavBar/NavBar";
import Home from "./layout/Home/Home";
// import Work from "./layout/Work/Work";
// import About from "./layout/About/About";
// import Contact from "./layout/Contact/Contact";
import DetailWork from "./layout/Spaces/DetailWork/DetailWork";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<NavBar />} /> */}

          <Route path="/" element={<Home />} />

          <Route path="/detail-work" element={<DetailWork />} />
        </Routes>
      </Router>

      {/*text json si sale, limpiar assets, add SEO, and principal effects, (ver web corea japan) */}
    </>
  );
}

export default App;
