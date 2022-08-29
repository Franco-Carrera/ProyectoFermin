import { useEffect, useState } from "react";
import { getLinks } from "../utils/firebaseConfig";
//ItemTwo
//import Work from "../layout/Work/Work";
import ItemListTwo from "./ItemListTwo";

const ItemListContainerTwo = () => {
  const [links, setLinks] = useState([]); //o dataTwo

  //detalle de que no ponemos el mismo estado en la promesa //ahora mismo estado
  useEffect(() => {
    getLinks()
      .then((res) => setLinks(res))
      .catch((err) => console.error("Error searching items", err));
  }, []);

  return (
    <>
      {links.map((link) => (
        <ItemListTwo key={link.id} linkData={link} />
      ))}
    </>
  );
};

export default ItemListContainerTwo;
