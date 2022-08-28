import Item from "../components/Item";

const ItemList = ({ data }) => {
  return (
    <>
      {/* type === "general" && */}
      {data.map((dataItem) => (
        <Item key={dataItem.id} itemData={dataItem} />
      ))}
    </>
  );
};

export default ItemList;
