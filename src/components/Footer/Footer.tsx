import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img src="/Logo_SODAL-Photoroom.webp" alt="Logo SODAL" />
        </div>
        <div className="footer_links">
          <Link to="/">INÍCIO</Link>
          <Link to="/about">SOBRE</Link>
          <Link to="/donations">DOAÇÕES</Link>
          <Link to="/contact">FALE CONOSCO</Link>
          <Link to="/ranking">RANKING</Link>
        </div>
      </div>
      <div className="footer_direitos">
        <p>&copy; 2025 SODAL. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
