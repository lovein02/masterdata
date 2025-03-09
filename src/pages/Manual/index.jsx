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
              <Link href="/Manual/LoginFrenteCaixa">Login / Fechamento PDV</Link>
              <Link href="/Manual/BaixaDeAbastecimentos">Baixa de Abastecimentos</Link>
              <Link href="/formaRecebimento">Forma de Recebimento</Link>
              <Link href="/vendaDeItens">Venda de Itens</Link>
              <Link href="/baixaRapidaDeAbastecimentos">Baixa rápida de Abastecimentos</Link>
              <Link href="/cancelamentoDeVenda">Cancelamento de Venda</Link>
              <Link href="/nfeNoFrenteDeCaixa">Emitindo NFe no PDV</Link>
              <Link href="/AdiantamentoDeCliente">Adiantamento de Cliente</Link>
              <Link href="/monitoramentoPista">Cadastro de cartão IDF no PDV</Link>
              <Link href="/consultasERelatorios">Consultas e Relatórios</Link>
            </div>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">Corporativo</Link>
            <div className={styles.dropdownContent}>
              <Link href="/cadastropessoa">Cadastro Pessoa</Link>
              <Link href="/cadastrocliente">Cadastro Cliente</Link>
              <Link href="#">Cadastro Cliente Simplificado</Link>
              <Link href="#">Classe de Cliente</Link>
              <Link href="#">Contrato de Crédito</Link>
              <Link href="#">Cadastro de Colaborador</Link>
              <Link href="#">Cadastro de Usuário</Link>
            </div>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">Suprimento</Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Cadastro de Item</Link>
              <Link href="#">Ajuste de Estoque</Link>
            </div>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="#">L.M.C</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
