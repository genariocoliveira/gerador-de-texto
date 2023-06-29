import "./styles.css";
import GeradorTexto from "./GeradorTexto.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <h1>BEM VINDO AO GERADOR DE CHAMADOS</h1>
      <GeradorTexto />
      <Footer />
    </div>
  );
}
