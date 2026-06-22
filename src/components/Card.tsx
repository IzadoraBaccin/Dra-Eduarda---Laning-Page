type CardProps = {
  imagem: string;
  titulo: string;
  descricao: string;
};

export default function Card({ imagem, titulo, descricao }: CardProps) {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={imagem} alt={titulo} />
      </div>

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <hr />
    </div>
  );
}
