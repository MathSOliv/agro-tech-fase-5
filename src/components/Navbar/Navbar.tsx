import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="barra_nav">
      <img
        src="/Logo_SODAL-Photoroom.webp"
        alt="Logo SODAL"
        className="nav_logo"
      />
      <div className="nav_links">
        <Link to="/">INÍCIO</Link>
        <Link to="/about">SOBRE</Link>
        <Link to="/donations">DOAÇÕES</Link>
        <Link to="/contact">FALE CONOSCO</Link>
        <Link to="/ranking">RANKING</Link>
      </div>
    </nav>
  );
}
