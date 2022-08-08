import WithHeaderAndFooter from "../layout/WithHeaderAndFooter";
import Home from "./Home";


function HomeFrame() {
 
  return (
    <>
      <WithHeaderAndFooter children={ <Home /> }/>
    </>
  );
}

export default HomeFrame;

