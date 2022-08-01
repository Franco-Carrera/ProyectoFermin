import DetailWork from "../layout/Spaces/DetailWork/DetailWork";
import DetailEvents from "../layout/Spaces/DetailEvents/DetailEvents";
import DetailHabilities from "../layout/Spaces/DetailHabilities/DetailHabilities";
import DetailGalery from "../layout/Spaces/DetailGalery/DetailGalery";
import { DetailContextWrapper } from "../utils/DetailContext";

const ItemDetailContainer = () => {
  return (
    <>
      <DetailContextWrapper>
        <DetailWork />
        <DetailEvents />
        <DetailHabilities />
        <DetailGalery />
      </DetailContextWrapper>
    </>
  );
};

export default ItemDetailContainer;
