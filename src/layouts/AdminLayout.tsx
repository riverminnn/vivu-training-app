import { ReactNode } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Sidebar from "../shared/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => (
    <div className="h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-h-screen overflow-hidden flex">
            <Sidebar />
            <div className="main-content overflow-y-auto flex-grow md:ml-64 ml-12 p-4">
                <div className="content ">
                    {children}
                </div>
                <Footer />
            </div>
        </main>
    </div>
)

export default Layout;
