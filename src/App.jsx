import "./styles/App.css";
import { ContextWrapper } from "./utils/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DetailWork from "./layout/Spaces/DetailWork/DetailWork";
import ItemListContainer from "./components/ItemListContainer";

//import NavBar from "./layout/NavBar/NavBar";

function App() {
  return (
    <>
      <ContextWrapper>
        {/* <NavBar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/detail-work" element={<DetailWork />} />
          </Routes>
        </Router>
      </ContextWrapper>
    </>
  );
}

export default App;
