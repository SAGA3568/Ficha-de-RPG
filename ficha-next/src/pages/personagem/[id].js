import React from "react";
import styles from "../../styles/personagem/view.module.css";
import { api } from "../api/api";

export default function ViewCharacter({ data }) {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={data.image} />
        <div>
          <h1 className={`${styles.containerTitle}`}>{data.name}</h1>

          <div className={styles.containerInformation}>
            <div className={styles.info}>
              <span>Classe</span>
              <p>{data.type}</p>
            </div>

            <div className={styles.info}>
              <span>Idade</span>
              <p>{data.age}</p>
            </div>

            <div className={styles.info}>
              <span>Raça</span>
              <p>{data.breed}</p>
            </div>

            <div className={styles.info}>
              <span>Altura</span>
              <p>{data.height}</p>
            </div>

            <div className={styles.info}>
              <span>Sexo</span>
              <p>{data.genre === "M" ? "Masculino" : "Feminino"}</p>
            </div>

            <div className={styles.info}>
              <span>Peso</span>
              <p>{data.weight}kg</p>
            </div>

            {data.item_1 && (
              <div className={styles.infoRed}>
                <span>{data.item_1}</span>
                <p>{data.effect_1}</p>
              </div>
            )}

            {data.item_2 && (
              <div className={styles.infoRed}>
                <span>{data.item_2}</span>
                <p>{data.effect_2}</p>
              </div>
            )}
            {data.item_3 && (
              <div className={styles.infoRed}>
                <span>{data.item_3}</span>
                <p>{data.effect_3}</p>
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className={styles.containerAttributes}>
          <div className={styles.infoComplete}>
            <span>Envenenamento</span>
            <p>{data.poisoning == 0 ? "Não" : "Sim"}</p>
          </div>

          <div className={styles.infoComplete}>
            <span>Sangue</span>
            <p>{data.bleeding == 0 ? "Não" : "Sim"}</p>
          </div>

          <div className={styles.info}>
            <span>FOR</span>
            <p>{data.strength}</p>
          </div>

          <div className={styles.info}>
            <span>INT</span>
            <p>{data.intelligence}</p>
          </div>

          <div className={styles.info}>
            <span>RES</span>
            <p>{data.resistance}</p>
          </div>

          <div className={styles.info}>
            <span>CAR</span>
            <p>{data.charisma}</p>
          </div>

          <div className={styles.info}>
            <span>REF</span>
            <p>{data.reflexes}</p>
          </div>

          <div className={styles.info}>
            <span>DES</span>
            <p>{data.dexterity}</p>
          </div>
        </section>

        <section className={styles.image}>
          <div className={styles.history}>
            <h2 className={styles.containerSubtitle}>História</h2>

            <p>{data.history}</p>
          </div>
        </section>
      </main>
    </div>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const response = await api
    .get(`/api/fichas/${context.params.id}`)
    .then((response) => {
      return response.data;
    });

  return {
    props: {
      data: response,
    },
  };
}
