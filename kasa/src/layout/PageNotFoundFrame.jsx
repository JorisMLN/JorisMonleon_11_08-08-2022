import WithHeaderAndFooter from "./WithHeaderAndFooter"
import PageNotFound from "../features/pageNotFound/PageNotFound";


const PageNotFoundFrame = () => {
 
  return (
    <>
      <WithHeaderAndFooter children={ <PageNotFound /> }/>
    </>
  );
}

export default PageNotFoundFrame;