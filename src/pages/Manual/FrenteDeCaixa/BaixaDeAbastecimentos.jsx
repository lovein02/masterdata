import Manual from "../../Manual";
import styles from "../globals.module.css";

export default function BaixaDeAbastecimentos() {
  return (
    <>
      <Manual />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title2}>Baixa de Abastecimentos</h2>
          <div className={styles.container}>
            <div className={styles.column}>
              <h3 className={styles.title3}>
                Baixa de Abastecimentos
                <br />
                *CONSUMIDOR PADRÃO*
              </h3>
              <p className={styles.p1}>
                Na tela inicial do Frente de Caixa selecione o botão<span className={styles.fontBold}>VENDER POR CUPOM FISCA(F8)</span>
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/venderPorCupomFiscal.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>Na tela<span className={styles.fontBold}>ABASTECIMENTOS</span>selecione com a barra de espaço do teclado os abastecimentos que deseja baixar manualmente. Em seguida selecione o botão<span className={styles.fontBold}> BAIXA (F4).</span>
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/abastecimentos.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Observe que em momento algum o cliente foi escolhido e o sistema
                começa a totalizar o cupom para o{" "}
                <span className={styles.fontBold}>CONSUMIDOR PADRÃO</span>.{" "}
                <br />
                Nesta fase você pode incluir mais abastecimentos, itens não
                combustíveis ou cancelar a venda iniciada.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/vendaConsumidorPadrao.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Prossiga para o recebimento da venda selecionando o botão
                RECEBER (F10)
              </p>
              <img src="/assets/imgs/baixa-abastecimento/receber.png" alt="" />
              <p className={styles.p1}>
                Escolha agora o Tipo de Recebimento conforme as opções
                disponíveis no painel à direita
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/tipoRecebimento.png"
                alt=""
              />
              <p className={styles.p1}>
                Na janela Valor a Receber o sistema mostra o valor a receber da
                venda. Se desejar lançar o troco (no caso do Dinheiro), informe
                um valor maior que tenha recebido do cliente. Pressione o botão
                F2 - OK
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valorReceber.png"
                alt=""
              />
              <p className={styles.p1}>
                Após informar o valor do recebimento o cupom é finalizado e
                mostra se existe troco na venda ou não.
              </p>
              <img src="/assets/imgs/baixa-abastecimento/troco.png" alt="" />
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
