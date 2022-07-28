import Header from './global/Header';
import Footer from './global/Footer';

const Layout = ({ children, designData }) => {
  return (
    <div>
      <Header designData={designData} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
