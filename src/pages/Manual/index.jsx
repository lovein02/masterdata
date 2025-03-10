import Link from "next/link";
import styles from "./styles.module.css";

export default function Manual() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navBar}>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">Frente de Caixa</Link>
            <div className={styles.dropdownContent}>
              <Link href="/Manual/FrenteDeCaixa/LoginFrenteCaixa">Login / Fechamento PDV</Link>
              <Link href="/Manual/FrenteDeCaixa/BaixaDeAbastecimentos">Baixa de Abastecimentos</Link>
              <Link href="/Manual/FrenteDeCaixa/FormaDeRecebimento">Forma de Recebimento</Link>
              {/*<Link href="/Manual/FrenteDeCaixa/VendaDeItens">Venda de Itens</Link>
              <Link href="/Manual/FrenteDeCaixa/BaixaRapidaDeAbastecimentos">Baixa rápida de Abastecimentos</Link>
              <Link href="/Manual/FrenteDeCaixa/CancelamentoDeVenda">Cancelamento de Venda</Link>
              <Link href="/Manual/FrenteDeCaixa/NfeNoFrenteDeCaixa">Emitindo NFe no PDV</Link>
              <Link href="/AdiantamentoDeCliente">Adiantamento de Cliente</Link>
              <Link href="/monitoramentoPista">Cadastro de cartão IDF no PDV</Link>
              <Link href="/Manual/FrenteDeCaixa/ConsultasERelatorios">Consultas e Relatórios</Link>*/}
            </div>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">Corporativo</Link>
            <div className={styles.dropdownContent}>
              <Link href="/Manual/Corporativo/CadastroDePessoa">Cadastro Pessoa</Link>
              <Link href="/Manual/Corporativo/CadastroDeCliente">Cadastro Cliente</Link>
              <Link href="/Manual/Corporativo/CadastroDeClienteSimplificado">Cadastro Cliente Simplificado</Link>
              {/*<Link href="/Manual/Corporativo/ClasseDeCliente">Classe de Cliente</Link>
              <Link href="/Manual/Corporativo/ContratoDeCredito">Contrato de Crédito</Link>*/}
              <Link href="/Manual/Corporativo/CadastroDeColaborador">Cadastro de Colaborador</Link>
              {/*<Link href="/Manual/Corporativo/CadastroDeUsuario">Cadastro de Usuário</Link>*/}
            </div>
          </li>
         {/* <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">Suprimento</Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Cadastro de Item</Link>
              <Link href="#">Ajuste de Estoque</Link>
            </div>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">L.M.C</Link>
          </li>
        */}
        </ul>
      </nav>
    </header>
  );
}
