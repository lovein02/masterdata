import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

import logoImg from "../../../public/assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.logo}
            alt="Logo Master Data"
            src={logoImg}
            priority
          />
        </Link>
            <ul className={styles.navBar}>
            <Link href="/" className={styles.navItem}> Inicio </Link>
            {/*<Link href="/Produtos" className={styles.navItem}> Produtos </Link>*/}
            <Link href="/Manual" className={styles.navItem}> Manual </Link>
           {/* <Link href="/Sobre" className={styles.navItem}> Sobre </Link>*/}
            </ul>
      </nav>
    </header>
  );
}
