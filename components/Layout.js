import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => {
    return (
        <div>
        <Head>
            <title>Bitcoin Prices</title>
            <link 
            rel= "stylesheet" 
            href="https://bootswatch.com/5/flatly/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">{props.children}</div>
        </div>
    );
};

export default Layout;