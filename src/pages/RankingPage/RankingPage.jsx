import "./styles.css";

export default function RankingPage() {
  return (
    <section class="body_content">
      <div class="tabela_container">
        <table>
          <caption>
            <strong>Ranking de Doações Mensal</strong>
          </caption>
          <thead>
            <tr>
              <th>Nº</th>
              <th>DOADOR</th>
              <th>CATEGORIA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Restaurante Sabor da Terra</td>
              <td>Restaurante</td>
            </tr>
            <tr>
              <td>2</td>
              <td>José Almeida</td>
              <td>Pessoa</td>
            </tr>
            <tr>
              <td>3</td>
              <td>AgroVida LTDA</td>
              <td>Agricultor</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Cozinha Comunitária Esperança</td>
              <td>Outros</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Maria das Dores</td>
              <td>Pessoa</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Sítio Bom Futuro</td>
              <td>Agricultor</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Lanches do Zé</td>
              <td>Restaurante</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Ana Paula Fernandes</td>
              <td>Pessoa</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Grupo Jovem Solidário</td>
              <td>Outros</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hortifruti São Lucas</td>
              <td>Agricultor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
