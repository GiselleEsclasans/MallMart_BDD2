import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar.jsx';
import Footer from "../components/Footer.jsx";

export default function Root() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}