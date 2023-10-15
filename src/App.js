import "./index.css";
import "./styles.css"
import Footer from "./Footer.js";
import Header from "./components/Header.js";
import GeradorTexto from "./GeradorTexto.js";

export default function App() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto">
        <GeradorTexto />
      </main>

      <Footer />
    </>
  );
}
