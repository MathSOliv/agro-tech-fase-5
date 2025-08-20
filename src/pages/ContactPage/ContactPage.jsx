import { useState } from "react";
import "./styles.css";

export default function ContactPage() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const [tipoMensagem, setTipoMensagem] = useState("");

  const handleDescricaoChange = (e) => {
    setDescricao(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let erros = [];

    if (nomeCompleto.trim() === "") {
      erros.push("O nome não pode estar em branco.");
    } else if (nomeCompleto.trim().split(" ").length < 2) {
      erros.push("Nome e Sobrenome são obrigatórios.");
    }

    const emailVerific = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.trim() === "") {
      erros.push("O e-mail não pode estar em branco.");
    } else if (!emailVerific.test(email)) {
      erros.push("O e-mail deve estar em um formato válido.");
    }

    if (descricao.trim() === "") {
      erros.push("A descrição não pode estar em branco.");
    } else if (descricao.trim().length < 30 || descricao.trim().length > 500) {
      erros.push("A descrição deve ter entre 30 e 500 caracteres.");
    }

    if (erros.length > 0) {
      setMensagens(erros);
      setTipoMensagem("erro");
    } else {
      setMensagens(["Dados enviados com sucesso!"]);
      setTipoMensagem("sucesso");
      setNomeCompleto("");
      setEmail("");
      setDescricao("");
    }
  };

  return (
    <section className="home_body">
      <div className="container_form">
        <h2 className="form_title">Deixe seus dados para contato!</h2>
        <form id="formulario" onSubmit={handleSubmit}>
          <label htmlFor="nome-completo">Nome Completo:</label>
          <input
            type="text"
            name="nome-completo"
            className="form_field"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            className="form_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            className="form_field"
            rows="5"
            value={descricao}
            onChange={handleDescricaoChange}
          ></textarea>

          {mensagens.length > 0 && (
            <div
              id="mensagensForm"
              className={`mensagem ${tipoMensagem}`}
              style={{ display: "block" }}
            >
              {mensagens.map((msg, i) => (
                <p key={i}>{msg}</p>
              ))}
            </div>
          )}

          <input type="submit" value="ENVIAR" className="botao_salvar" />
        </form>
      </div>
    </section>
  );
}
