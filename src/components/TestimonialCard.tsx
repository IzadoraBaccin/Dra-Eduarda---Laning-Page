type TestimonialCardProps = {
  nome: string;
  texto: string;
  estrelas: number;
  foto: string;
};

export default function TestimonialCard({
  nome,
  texto,
  estrelas,
  foto,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{texto}</p>

      <div className="testimonial-footer">
        <div className="testimonial-user">
          <div className="avatar">
            <img src={foto} alt={nome} />
          </div>

          <div>
            <h4>{nome}</h4>
            <span>Paciente</span>
          </div>
        </div>

        <div className="stars">{"⭐".repeat(estrelas)}</div>
      </div>
    </div>
  );
}
