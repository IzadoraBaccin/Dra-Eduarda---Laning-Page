import "../styles/footer.css";
import logo from "../assets/images/ebl.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Dra Eduarda Baccin" />

          <p>
            Atendimento especializado em Botox com foco na naturalidade e
            segurança.
          </p>
        </div>

        <div className="footer-links">
          <h4>Links</h4>

          <a href="#hero">Início</a>

          <a href="#solutions">Benefícios</a>

          <a href="#testimonials">Depoimentos</a>

          <a href="#contact">Contato</a>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>

          <p>Cascavel - PR</p>

          <p>(45) 99999-9999</p>

          <p>contato@draeduarda.com.br</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Dra. Eduarda Baccin da Luz. Todos os direitos reservados.
      </div>
    </footer>
  );
}
