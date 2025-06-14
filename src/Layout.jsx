
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-orange-50 ">
        <Navbar />
        <main className="flex flex-col flex-1 justify-center ">
          <section className="flex flex-col flex-1 p-4 w-full max-w-3xl mx-auto">
            <Outlet />
          </section>
        </main>
        <Footer />
    </div>
  );
}
