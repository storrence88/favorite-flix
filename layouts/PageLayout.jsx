import  Header from "../components/Header/Header";
const PageLayout = (props) => {
    return ( 
        <>
        <Header />
        {props.children}
        </>
     );
}
 
export default PageLayout;