import Manual from "../../Manual";
import styles from "../globals.module.css";

export default function CadastroDeClienteSimplificado() {
  return (
    <>
      <Manual />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title2}>Cadastro de Cliente Simplificado</h2>
          <iframe
            className={styles.videoYoutube}
            src="https://www.youtube.com/embed/R2hXTBGcyfg&t=68s"
            title="YouTube video player - Cadastro de Cliente"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/*<div className={styles.container}>
            <div className={styles.column}></div>

            <div className={styles.column}></div>
          </div>*/}
        </section>
      </main>
    </>
  );
}
