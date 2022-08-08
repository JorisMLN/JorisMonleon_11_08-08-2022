import WithHeaderAndFooter from "../layout/WithHeaderAndFooter";
import Home from "./Home";


const HomeFrame = () => {
 
  return (
    <>
      <WithHeaderAndFooter children={ <Home /> }/>
    </>
  );
}

export default HomeFrame;

