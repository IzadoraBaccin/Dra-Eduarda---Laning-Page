import TestimonialCard from "./TestimonialCard";
import "../styles/testimonials.css";

import cabeloliso from "../assets/icons/cabeloliso.png";
import cabeloondulado from "../assets/icons/cabeloondulado.png";
import cabelocacheado from "../assets/icons/cabelocacheado.png";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Depoimentos</h2>

      <div className="testimonials-grid">
        <TestimonialCard
          nome="Maria"
          texto="Atendimento excelente e resultado muito natural"
          estrelas={5}
          foto={cabeloliso}
        />

        <TestimonialCard
          nome="Juliana"
          texto="Amei meu rosto diminui muito as linhas de expressão"
          estrelas={5}
          foto={cabeloondulado}
        />

        <TestimonialCard
          nome="Fernanda"
          texto="Doutora muito atenciosa, profissional excelente"
          estrelas={5}
          foto={cabelocacheado}
        />
      </div>
    </section>
  );
}
