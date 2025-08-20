import "./styles.css";

export default function HomePage() {
  return (
    <section class="home_body">
      <h1>SODAL</h1>

      <div class="container">
        <div class="card">
          <div class="image_card">
            <img src="/doacao.png" alt="ponto de doação SODAL" />
          </div>
          <div class="text_card">
            <p>
              Na SODAL, acreditamos que cuidar do próximo é o primeiro passo
              para transformar o mundo. Desde 2015, trabalhamos com dedicação
              para levar apoio, dignidade e oportunidades a comunidades em
              situação de vulnerabilidade. Nossa missão é clara: promover o
              bem-estar, a inclusão social e o desenvolvimento humano por meio
              de projetos sustentáveis e ações solidárias. Atuamos em diversas
              frentes, como assistência social, educação, saúde, e apoio a
              crianças, jovens e famílias.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <div class="image_card">
            <img
              src="/pessoas_doando.png"
              alt="algumas pessoas colocando comida para doação"
            />
          </div>
          <div class="text_card">
            <p>
              Somos uma instituição sem fins lucrativos, mantida por parcerias,
              voluntários e pessoas como você — que acreditam que cada gesto de
              solidariedade pode fazer toda a diferença. Junte-se a nós e faça
              parte dessa corrente do bem. Juntos, podemos mudar histórias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
