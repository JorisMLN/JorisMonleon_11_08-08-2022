import WithHeaderAndFooter from "./WithHeaderAndFooter"
import About from "../features/about/About";


const AboutFrame = () => {
 
  return (
    <>
      <WithHeaderAndFooter children={ <About /> }/>
    </>
  );
}

export default AboutFrame;