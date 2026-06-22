import "../styles/hero.css";
import foto2 from "../assets/images/foto2.png";
import fotomobile from "../assets/images/fotomobile.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span>Especialista em Estética Facial</span>

        <h1>Realce sua beleza natural com Botox</h1>

        <p>
          Tratamentos personalizados para resultados naturais, seguros e
          elegantes.
        </p>

        <button>Agendar Avaliação</button>
      </div>

      <div className="hero-right">
        <img src={foto2} alt="foto" className="foto-desktop" />

        <img src={fotomobile} alt="fotomobile" className="foto-mobile" />
      </div>
    </section>
  );
}
