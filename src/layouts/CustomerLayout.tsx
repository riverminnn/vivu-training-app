import { ReactNode } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const CustomerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default CustomerLayout;
