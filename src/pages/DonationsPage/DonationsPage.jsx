import "./styles.css";

export default function DonationsPage() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Dados enviados com sucesso!");
    event.target.reset();
  }

  return (
    <section className="donations_body">
      <div className="hero_section">
        <h1 className="hero_title">Faça Parte da Corrente do Bem</h1>
        <p className="hero_subtitle">
          Sua doação transforma vidas e leva esperança para milhares de
          famílias.
        </p>
      </div>

      <div className="stats_grid">
        <div className="stat_card">
          <p className="stat_number">+10 MIL</p>
          <p className="stat_label">Famílias Beneficiadas</p>
        </div>
        <div className="stat_card">
          <p className="stat_number">+20 MIL</p>
          <p className="stat_label">Kg Arrecadados Mensalmente</p>
        </div>
      </div>

      <div className="form_card">
        <h2 className="form_title">Doe você também</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" name="nome" required />
          </div>

          <div className="form_group">
            <label htmlFor="valor_doado">Valor da Doação (R$)</label>
            <input type="number" id="valor_doado" name="valor_doado" required />
          </div>

          <button type="submit" className="donate_button">
            Fazer Doação
          </button>
        </form>
      </div>
    </section>
  );
}
