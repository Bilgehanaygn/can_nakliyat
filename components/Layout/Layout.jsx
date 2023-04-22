import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WhatsAppIcon from "../Icons/WhatsAppIcon/WhatsAppIcon";

const Layout = ({ children }) => {
  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      <Header />
      <WhatsAppIcon />
      {children}
    </div>
  );
};

export default Layout;
