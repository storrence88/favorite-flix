import Header from "../components/Header/Header";
import Navbar from '../components/NavBar/Navbar';

const PageLayout = (props) => {
    return ( 
        <>
        <Navbar />
        <Header />
        {props.children}
        </>
     );
}
 
export default PageLayout;