import "../styles/pricing.css";

export default function Pricing() {
  return (
    <section id="pricing">
      <header className="pricing-header">
        <span className="section-tag">ATENDIMENTO</span>

        <h2>Como funciona seu atendimento</h2>
      </header>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Primeira Avaliação</h3>

          <p>Consulta individual para entender suas necessidades.</p>

          <ul>
            <li>✔ Análise facial</li>
            <li>✔ Planejamento personalizado</li>
            <li>✔ Orientações completas</li>
          </ul>

          <button>Agendar</button>
          
        </div>

        <div className="pricing-card premium">
          <span className="premium-badge">MAIS PROCURADO</span>

          <h3>Botox</h3>

          <p>Procedimento realizado com foco em naturalidade e segurança.</p>

          <ul>
            <li>✔ Aplicação personalizada</li>
            <li>✔ Resultado natural</li>
            <li>✔ Acompanhamento profissional</li>
          </ul>

          <button>Agendar</button>
        </div>

        <div className="pricing-card">
          <h3>Retorno</h3>

          <p>Revisão e acompanhamento da evolução do tratamento.</p>

          <ul>
            <li>✔ Avaliação dos resultados</li>
            <li>✔ Ajustes quando necessários</li>
            <li>✔ Suporte profissional</li>
          </ul>

          <button>Agendar</button>
        </div>
      </div>
    </section>
  );
}
