import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/styles.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <section className={styles.section}>
          <h2 className={styles.title2}>Gestão em Postos de Combustiveis</h2>
          <div className={styles.container}>
          <h3 className={styles.title3}>Quem Somos</h3>
          <p className={styles.p2}>
            Somos uma empresa dedicada a fornecer soluções inovadoras e
            eficientes para a gestão de postos de combustíveis. Nosso sistema de
            gestão foi desenvolvido com foco em facilitar as operações diárias,
            aumentar a produtividade e garantir a satisfação dos clientes.
          </p>
        </div>
        <div className={styles.container}>
        <h3 className={styles.title3}>Nossa missão</h3>
        <p className={styles.p2}>
          Nossa missão é transformar a maneira como os postos de combustíveis
          operam, proporcionando uma ferramenta robusta, intuitiva e confiável.
          Trabalhamos incessantemente para oferecer um suporte de qualidade,
          garantindo que nossos clientes possam focar no crescimento de seus
          negócios enquanto cuidamos da tecnologia.
        </p>
        </div>
        <div className={styles.container}>
        <h3 className={styles.title3}>O que Fazemos</h3>
        <p className={styles.p2}>
          Distribuímos um sistema de gestão completo que abrange todas as
          necessidades dos postos de combustíveis, desde o controle de estoque
          até a gestão de vendas e atendimentos. Nosso software é flexível e
          pode ser adaptado para atender às especificidades de cada cliente,
          oferecendo:
        </p>
        <p className={styles.p1}>
          <b>Controle de Estoque:</b> Monitore o abastecimento de combustíveis e
          produtos com precisão.
        </p>
        <p className={styles.p1}>
          <b>Gestão de Vendas:</b> Acompanhe as vendas em tempo real e obtenha
          relatórios detalhados.
        </p>
        <p className={styles.p1}>
          <b>Suporte Técnico:</b> Nossa equipe de suporte está sempre pronta
          para ajudar, garantindo o funcionamento ininterrupto do sistema.
        </p>
        <p className={styles.p1}>
          <b>Integração:</b> Nosso sistema pode ser integrado a outras
          ferramentas e plataformas para uma gestão mais abrangente.
        </p>
        </div>
        <div className={styles.container}>
        <h3 className={styles.title3}>Por que Escolher Nosso Sistema?</h3>
        <p className={styles.p1}>
          <b>Experiência e Conhecimento:</b> Com anos de experiência no setor,
          entendemos as necessidades e desafios dos postos de combustíveis.
        </p>
        <p className={styles.p1}>
          <b>Tecnologia de Ponta:</b> Utilizamos a tecnologia mais recente para
          garantir a segurança, eficiência e inovação em nossos serviços.
        </p>
        <p className={styles.p1}>
          <b>Suporte Incomparável:</b> Nossa equipe está disponível 24/7 para
          oferecer suporte técnico e assistência, assegurando que nossos
          clientes nunca fiquem sem ajuda.
        </p>
        </div>
        <div className={styles.container}>
        <h3 className={styles.title3}>Entre em Contato</h3>
        <p className={styles.p2}>
          Se você está pronto para levar a gestão do seu posto de combustíveis
          para o próximo nível, entre em contato conosco! Estamos ansiosos para
          mostrar como nosso sistema pode fazer a diferença no seu negócio.
        </p>
        <p className={styles.p3}>
          <br />
          <b>Dérick Lima:</b> 34 9632-0082
        </p>
        <p className={styles.p3}>
          <b>Erick Valério:</b> 34 9869-0082
        </p>
        <p className={styles.p3}>
          <b>Devair Silva:</b> 34 9880-0082
        </p>
        </div>
      </section>
    </div>
  );
}
