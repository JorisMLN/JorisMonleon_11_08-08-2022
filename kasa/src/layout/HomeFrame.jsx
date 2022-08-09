import WithHeaderAndFooter from "./WithHeaderAndFooter"
import Home from "../features/home/Home";


const HomeFrame = () => {
 
  return (
    <>
      <WithHeaderAndFooter children={ <Home /> }/>
    </>
  );
}

export default HomeFrame;

