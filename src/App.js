import "./styles.css";
import GeradorTexto from "./GeradorTexto.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <h1>Bem vindo ao gerado</h1>
      <GeradorTexto />
      <Footer />
    </div>
  );
}
