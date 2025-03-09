import Manual from "../../Manual";
import styles from "../globals.module.css";

export default function FormaDeRecebimento() {
  return (
    <>
      <Manual />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title2}>Baixa de Abastecimentos</h2>
          <div className={styles.container}>
            <div className={styles.column}>
            <h3 className={styles.title3}>RECEBIMENTOS</h3>
              <p className={styles.p1}>
                No Frente de Caixa é possível usar diversos TIPOS DE
                RECEBIMENTOS ao baixar vendas. A seguir abordaremos de forma
                resumida cada um dos tipos ao receber uma venda.
                <br />
                Vamos simular a baixa de um abastecimento até chegarmos no
                momento de receber a venda e lá mostraremos os detalhes desses
                recebimentos numa venda ao CONSUMIDOR.
              </p>
              <p className={styles.p1}>
                No painel à direita temos diversas opções de TIPOS DE
                RECEBIMENTOS e deles derivam as mais variadas Formas de
                Recebimentos.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/tipoRecebimento1.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                As FORMAS DE RECEBIMENTOS vêm dos tipos de recebimentos. Vejamos
                dois exemplos a seguir, sendo o tópico 10, uma venda baixada por
                Espécie de Caixa e o tópico 11, uma venda sendo baixada por
                Cartão de Débito
              </p>
              <h3 className={styles.title3}>ESPÉCIE DE CAIXA (F2)</h3>
              <p className={styles.p1}>
                Para baixar uma venda com Dinheiro basta pressionar o botão
                ESPÉCIE DE CAIXA (F2).
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/especieCaixa.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                No campo Valor a Receber preencha com o valor menor para
                completar com outro tipo; ou preencha com valor igual para
                completar o total da venda ou preencha com valor maior para
                voltar o troco.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valorReceber3.png"
                alt=""
                className={styles.imgManual}
              />
              <h3 className={styles.title3}>CARTÃO DE DÉBITO (F3)</h3>
              <p className={styles.p1}>
                Para baixar uma venda com Cartão de Débito basta pressionar o
                botão CARTÃO DE DÉBITO (F3).
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/cartaoDebito.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Na janela Forma de Recebimento escolha a bandeira do CARTÃO DE
                DÉBITO na lista de opções e pressione o botão F2 - Ok. Depois,
                no campo Valor a Receber, preencha com o valor menor para
                completar com outro tipo; preencha com valor igual para
                completar o total da venda ou preencha com valor maior para
                voltar o troco.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/bandeiraFormaRecebimento.png"
                alt=""
                className={styles.imgManual}
              />

              <h3 className={styles.title3}>CARTÃO DE CRÉDITO (F4)</h3>
              <p className={styles.p1}>
                Para baixar uma venda com Cartão de Crédito basta pressionar o
                botão CARTÃO DE CRÉDITO (F4).
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/cartaoCredito.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Na janela Forma de Recebimento escolha a bandeira do CARTÃO DE
                CRÉDITO na lista de opções e pressione o botão F2 - Ok. Depois,
                no campo Valor a Receber, preencha com o valor menor para
                completar com outro tipo; preencha com valor igual para
                completar o total da venda ou preencha com valor maior para
                voltar o troco.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/bandeiraFormaRecebimento1.png"
                alt=""
                className={styles.imgManual}
              />

            </div>

            <div className={styles.column}>
              <h3 className={styles.title3}>VALE-FRETE (F5)</h3>
              <p className={styles.p1}>
                Para baixar uma venda com Vale-Frete basta pressionar o botão
                VALE-FRETE (F5)
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valeFrete.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Na janela Vale Frete selecione o botão F3 - Adicionar Vale Frete
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valeFrete1.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Na janela Forma de Recebimento escolha a CARTA FRETE e pressione
                o botão F2 - Ok
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valeFrete2.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Agora preencha os dados da CARTA FRETE e pressione o botão F2 -
                Ok
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valeFrete3.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                {" "}
                Volte na janela Vale Frete, selecione a CARTA FRETE adicionada e
                pressione o botão F2 - OK.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valeFrete4.png"
                alt=""
                className={styles.imgManual}
              />
              <p className={styles.p1}>
                Normalmente a CARTA FRETE possui TROCO, então, na janela Troco
                escolha o CHEQUE TROCO ou digite o valor do VALE CRÉDITO para
                dar o troco ao cliente.
              </p>
              <img
                src="/assets/imgs/baixa-abastecimento/valeFrete5.png"
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
