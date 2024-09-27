import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elementSlide = document.getElementById("slide");
    const imagesToSlide = [
      "img/grupo.jpg",
      "img/grupo2.jpg",
      "img/grupo3.jpg",
      "img/grupo4.jpg",
      "img/grupo5.jpeg",
      "img/grupo6.jpg",
    ];
    var i = 0;

    function slides() {
      elementSlide.src = imagesToSlide[i];

      if (i < imagesToSlide.length - 1) {
        i++;
      } else {
        i = 0;
      }
      setTimeout(slides, 4000);
    }

    slides();
  }, []);

  return (
    <>
      <Head>
        <title>Caverna do Dragão</title>
        <meta name="description" content="Site de RPG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.containerTitle}>
              <h1>Caverna Do Dragão</h1>
            </div>
            <div className={styles.containerSlide}>
              <img className={styles.slide} id="slide" src="img/grupo.jpg" />
            </div>
          </header>

          <main className={styles.main}>
            <div className={styles.containerSubtitle}>
              <h2>Escolha Sua Classe</h2>
            </div>

            <div className={styles.containerSelection}>
              <div className={`${styles.hero} ${styles.hero0}`}>
                <Link href="pg/barbaro.html">
                  <img src="img/Barbaro.jpeg" />
                  <span>Barbaro</span>
                </Link>
              </div>
              <div className={`${styles.hero} ${styles.hero1}`}>
                <Link href="pg/mago.html">
                  <img src="img/Mago.jpeg" />
                  <span>Mago</span>
                </Link>
              </div>
              <div className={`${styles.hero} ${styles.hero2}`}>
                <Link href="pg/ladino.html">
                  <img src="img/Ladino.jpeg" height="" />
                  <span>Ladino</span>
                </Link>
              </div>
              <div className={`${styles.hero} ${styles.hero3}`}>
                <Link href="pg/paladino.html">
                  <img src="img/Paladino.jpeg" height="" />
                  <span>Paladino</span>
                </Link>
              </div>
              {/* <div className="hero hero4">
            <Link href="#">
              <img src="img/Druida.jpeg" height="" />
              <span>Druida</span>
            </Link>
          </div>
          <div className="hero hero5">
            <Link href="#">
              <img src="img/Bardo.jpeg" height="" />
              <span> Bardo </span>
            </Link>
          </div>  */}
            </div>
          </main>

          <footer className={styles.footer}>
            <span>Copyright &copy; 2024 | Todos os Direitos Reservados </span>
          </footer>
        </div>
      </div>
    </>
  );
}
