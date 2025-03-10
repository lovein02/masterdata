import Manual from "../../Manual";
import styles from "../globals.module.css";


export default function CadastroDePessoa() {
  return (
    <>
      <Manual />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title2}>Cadastro de Pessoa</h2>
          <iframe
            className={styles.videoYoutube}
            src="https://www.youtube.com/embed/wSYCU7DbAis"
            title="YouTube video player - Cadastro de Pessoa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
