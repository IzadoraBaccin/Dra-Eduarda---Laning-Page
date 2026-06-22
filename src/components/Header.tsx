import { useState, useEffect } from "react";
import "../styles/header.css";
import logo from "../assets/images/ebl.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <a href="#hero" className="logo">
        <img src={logo} alt="ebl" />
      </a>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#hero">Início</a>
        <a href="#solutions">Procedimentos</a>
        <a href="#testimonials">Depoimentos</a>
        <a href="#pricing">Atendimentos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}