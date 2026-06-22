import Card from "./Card";
import "../styles/solutions.css";

import rosto from "../assets/icons/rosto.png";
import brilho from "../assets/icons/brilho.png";
import creme from "../assets/icons/creme.png";

export default function Solutions() {
  return (
    <section id="solutions">
      <header className="solutions-header">
        <h2>Benefícios do Botox</h2>

        <p>
          O Botox é um dos tratamentos estéticos mais realizados do mundo,
          proporcionando rejuvenescimento facial com resultados naturais e
          harmoniosos.
        </p>
      </header>

      <div className="cards">
        <Card
          imagem={rosto}
          titulo="Redução de Rugas"
          descricao="Suaviza linhas de expressão da testa, glabela e região dos olhos."
        />

        <Card
          imagem={brilho}
          titulo="Prevenção do Envelhecimento"
          descricao="Ajuda a prevenir o aprofundamento das rugas ao longo do tempo."
        />

        <Card
          imagem={creme}
          titulo="Resultado Natural"
          descricao="Tratamento personalizado respeitando a harmonia e a beleza natural do rosto."
        />
      </div>
    </section>
  );
}
