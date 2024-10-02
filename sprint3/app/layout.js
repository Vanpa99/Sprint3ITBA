// layout.js (para toda la aplicación)
import Footer from "/components/Footer";
import Header from "/components/Header";
import Sidebar from "/components/Sidebar";
import "../styles/globals.css"; // Si tienes estilos globales

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-container">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
