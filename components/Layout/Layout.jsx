import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {

    return (
        <div style={{width:"100vw",  overflowX:"hidden"}} >
            <Header/>
            {children}
        </div>
    )
}

export default Layout;