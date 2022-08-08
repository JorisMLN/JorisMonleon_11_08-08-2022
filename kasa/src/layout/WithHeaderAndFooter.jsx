import Header from './Header';
import Footer from './Footer';
import './whaf.scss';

const WithHeaderAndFooter = ({children}) => {

  return (
    <div className="whafCapsule">
      <Header/>
        {children}
      <Footer />
    </div>
  )
}

export default WithHeaderAndFooter;
