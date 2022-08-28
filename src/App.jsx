import "./styles/App.css";
import { ContextWrapper } from "./utils/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import DetailAbout from "./layout/Spaces/DetailAbout/DetailAbout";
//import Home from "./layout/Home/Home";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <ContextWrapper>
        <Router>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/detail-work" element={<ItemDetailContainer />} />
            <Route path="/detail-about" element={<DetailAbout />} />
          </Routes>
        </Router>
      </ContextWrapper>
    </>
  );
}

export default App;
