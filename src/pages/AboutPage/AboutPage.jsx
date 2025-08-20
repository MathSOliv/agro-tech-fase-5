import "./styles.css";

export default function AboutPage() {
  return (
    <section className="home_body">
      <div className="container">
        <div className="card">
          <h2 className="about_title">Quem somos nós ?</h2>
          <div className="picture_container">
            <div className="picture_box">
              <img src="../doacao.png" />
            </div>
          </div>
          <div className="about_us_txt">
            <p>
              O SODAL é um sistema solidário que nasceu com um único propósito:
              combater a fome por meio da conexão entre quem pode doar e quem
              mais precisa. Atuamos como uma ponte entre comércios que desejam
              contribuir com doações de alimentos e comunidades em situação de
              vulnerabilidade, garantindo que o que sobra em um lugar possa
              fazer a diferença em outro. Nosso trabalho vai além da logística —
              é movido por empatia, responsabilidade social e o desejo genuíno
              de transformar realidades. Buscamos diariamente novos parceiros e
              comércios que queiram se unir a essa causa, enquanto identificamos
              famílias e instituições que enfrentam dificuldades para garantir
              uma refeição digna. Com o apoio de voluntários e doadores, o SODAL
              torna possível algo essencial: levar alimento, dignidade e
              esperança para quem precisa. Doe, participe, compartilhe. Juntos,
              somos mais fortes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
