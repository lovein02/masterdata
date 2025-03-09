import Manual from "../../Manual";
import styles from "./styles.module.css";

export default function LoginFrenteCaixa() {
  return (
    <>
      <Manual />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title2}>Abertura e Fechamento de Caixa</h2>
          <div className={styles.container}>
            <div className={styles.column}>
              <h3 className={styles.title3}>Login no sistema</h3>
              <p className={styles.p1}>
                1º Dê um duplo clique no ícone do Frente de Caixa na área de
                trabalho do PDV
              </p>
              <img
                src="/assets/imgs/login-suprimento/iconeFrenteCaixa.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                2º Após abrir o Frente de Caixa, selecione na tela inicial o
                botão <span className={styles.fontBold}>LOGIN (CTRL + L)</span>
              </p>
              <img
                src="/assets/imgs/login-suprimento/login.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                3º Escolha o seu NOME na lista de usuários, DIGITE A SENHA e
                selecione o botão{" "}
                <span className={styles.fontBold}>F2 – OK.</span>
              </p>
              <img
                src="/assets/imgs/login-suprimento/selecaoUsuario.png"
                alt=""
                className={styles.imgManual}
              />
            </div>

            <div className={styles.column}>
              <h3 className={styles.title3}>Abertura do Caixa</h3>
              <p className={styles.p1}>
                4º Na tela inicial do Frente de Caixa selecione o botão ABRIR
                MOVIMENTO (CTRL + A).
              </p>
              <img
                src="/assets/imgs/login-suprimento/abrirMovimento.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                5º O sistema pergunta se deseja abrir o movimento. Clique na
                opção Sim da mensagem.
              </p>
              <img
                src="/assets/imgs/login-suprimento/confirmarAbrirMovimento.png"
                alt=""
                className={styles.imgManual}
              />
              <h3 className={styles.title3}>Fechamento de Caixa</h3>
              <p className={styles.p1}>
                {" "}
                Encerradas as atividades no Frente de Caixa e finalizada a
                jornada de trabalho, o atendente deve Fechar o Movimento de
                Venda para que sejam feitas as conferencias dos valores
                recebidos e das operaçoes realizadas durante o dia ou turno.
              </p>
              <p className={styles.p1}>
                Na tela inicial do Frente de Caixa selecione o botao FECHAR
                MOVIMENTO (CTRL + A)
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/fecharMovimento.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                O sistema exibe mensagem de confirmaçao e pergunta de deseja
                imprimir o relatorio gerencial do fechamento. Selecione Sim.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/confirmarFecharCaixa.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Em seguida o sistema mostra a janela Relatorio de Vendas e voce
                tem a opçao de imprimir ou nao.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/relatorioFechamentoDeCaixa.png"
                alt=""
                className={styles.imgManual}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
