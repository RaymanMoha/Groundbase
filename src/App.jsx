import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav, Footer, GLOBAL_STYLES } from "./shared";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

function Layout({ children }) {
    return (
        <div style={{ background: "#FAFAF8", fontFamily: "'DM Sans','Helvetica Neue',sans-serif", color: "#090A0B", minHeight: "100vh", overflowX: "hidden" }}>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <>
            <style>{GLOBAL_STYLES}</style>
            <BrowserRouter>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/platform" element={<Platform />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/use-cases" element={<UseCases />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}
