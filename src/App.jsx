import "./styles/App.css";
import { Context, ContextWrapper } from "./utils/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import DetailAbout from "./layout/Spaces/DetailAbout/DetailAbout";

//para que me sirve poner un exact en home, o tres, justo aquí

//Queda comprobar los a href de Home
//CONTACTO A FLICKR
//ver que no queden archivos import sobrantes

function App() {
  return (
    <>
      <ContextWrapper>
        <Router>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/detail-work" element={<ItemDetailContainer />} />
            <Route path="/detail-about" element={<DetailAbout />} />
          </Routes>
        </Router>
      </ContextWrapper>
    </>
  );
}

export default App;
