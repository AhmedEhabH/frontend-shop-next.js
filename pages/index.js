import Head from "../components/head";
import NavBar from "../components/nav";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <NavBar />
            <div className="container">
                <h3>Home</h3>
            </div>
        </>
    )
}

Home.getInitialProps = (query) => {
    let res = {email:null}
    if (query.query.token) {
        localStorage.setItem("token", "Bearer " + query.query.token);
        res = { email: query.query.email };
    }

    return res;
}

export default Home;

