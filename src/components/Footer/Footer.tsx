import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img src="/Logo_SODAL-Photoroom.webp" alt="Logo SODAL" />
        </div>
        <div className="footer_links">
          <a href="#">INÍCIO</a>
          <a href="about/">SOBRE</a>
          <a href="doacoes/">DOAÇÕES</a>
          <a href="contato/">FALE CONOSCO</a>
          <a href="ranking/">RANKING</a>
        </div>
      </div>
      <div className="footer_direitos">
        <p>&copy; 2025 SODAL. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
