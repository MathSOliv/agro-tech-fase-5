import "./styles.css";

export default function DonationsPage() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Dados enviados com sucesso!");
    event.target.reset();
  }

  return (
    <section className="body_content">
      <div className="content_container">
        <h2 className="donate_text">Doe e ajude o próximo!</h2>
        <div className="stats_container">
          <div className="helped_count">
            <p className="helped_number">+10 MIL</p>
            <p className="helped_text">FAMÍLIAS BENEFICIADAS</p>
          </div>
          <div className="value_count">
            <p className="value_number">+20 MIL</p>
            <p className="value_text">KG ARRECADADOS MENSALMENTE</p>
          </div>
        </div>
        <h3 className="form_title">Doe voçê também:</h3>
        <form id="formulario" onSubmit={handleSubmit}>
          <label for="nome">Nome Completo:</label>
          <input className="form_field" type="text" name="nome" required />

          <label for="valor_doado">Valor R$:</label>
          <input
            className="form_field"
            type="number"
            name="valor_doado"
            required
          />

          <input className="botao_salvar" type="submit" value="DOAR" />
        </form>
      </div>
    </section>
  );
}
