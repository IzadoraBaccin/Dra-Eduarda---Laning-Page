import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("Enviando...");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          mensagem,
        }),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        setStatus("Erro ao enviar mensagem.");
      }
    } catch (error) {
      setStatus("Erro ao conectar com o servidor.");
    }
  }

  return (
    <section id="contact">
      <span className="section-tag">CONTATO</span>

      <h2>Agende sua avaliação</h2>

      <p>
        Tire suas dúvidas ou solicite uma avaliação personalizada. Estou pronta
        para ajudar você a alcançar resultados naturais e harmoniosos.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Escreva sua mensagem..."
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <button type="submit">Enviar Mensagem</button>

        {status && <p>{status}</p>}
      </form>
    </section>
  );
}