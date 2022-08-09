import WithHeaderAndFooter from "./WithHeaderAndFooter"
import Housing from "../features/housing/Housing"


const HousingFrame = () => {

  return (
    <>
      <WithHeaderAndFooter children={ <Housing /> }/>
    </>
  );
}

export default HousingFrame;
