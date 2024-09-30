import React, { useState } from "react";
import styles from "../../../styles/personagem/hero.module.css";
import stylesBarbaro from "../../../styles/personagem/barbaro.module.css";
import { createData } from "@/pages/api/hello";
import { useRouter } from "next/router";

export default function Barbaro() {
  const [currentImage, setCurrentImage] = useState("/img/Barbaro.jpeg");
  const [field, setField] = useState({});
  const router = useRouter();

  const images = [
    "/img/Barbaro.jpeg",
    "/img/Raças Barbaro/Homem.jpeg",
    "/img/Raças Barbaro/Mulher.jpeg",
    "/img/Raças Barbaro/Orc macho.jpeg",
    "/img/Raças Barbaro/Orc femea.jpeg",
    "/img/Raças Barbaro/Anão.jpeg",
    "/img/Raças Barbaro/Anã.jpeg",
    "/img/Raças Barbaro/Centauro.jpeg",
    "/img/Raças Barbaro/Centaura.jpeg",
  ];

  const changeImageByIndex = (indexImage) => {
    setCurrentImage(images[indexImage]);
  };

  const onSubmit = async () => {
    const payload = {
      ...field,
      image: currentImage,
      type: "Barbaro",
    };

    const response = createData(payload);

    if (response) {
      router.back();
    }
  };

  return (
    <div className={`${styles.wrapper} ${stylesBarbaro.wrapper}`}>
      <div className={`${styles.container} ${stylesBarbaro.container}`}>
        <header>
          <div
            className={`${styles.containerTitle} ${stylesBarbaro.containerTitle}`}
          >
            <h1>Barbaro</h1>
          </div>
        </header>

        <main>
          <div className={styles.profile} id="profile">
            <img src={currentImage} id="Barbaro" />

            <div className={`${styles.otherProfile}`} id="other-profile">
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Homem.jpeg"
                  onClick={() => {
                    changeImageByIndex(1);
                  }}
                />
                <input
                  type="button"
                  value="Homem"
                  onClick={() => {
                    changeImageByIndex(1);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Mulher.jpeg"
                  onClick={() => {
                    changeImageByIndex(2);
                  }}
                />
                <input
                  type="button"
                  value="Mulher"
                  onClick={() => {
                    changeImageByIndex(2);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Orc macho.jpeg"
                  onClick={() => {
                    changeImageByIndex(3);
                  }}
                />
                <input
                  type="button"
                  value="Orc Macho"
                  onClick={() => {
                    changeImageByIndex(3);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Orc femea.jpeg"
                  onClick={() => {
                    changeImageByIndex(4);
                  }}
                />
                <input
                  type="button"
                  value="Orc Femea"
                  onClick={() => {
                    changeImageByIndex(4);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Anão.jpeg"
                  onClick={() => {
                    changeImageByIndex(5);
                  }}
                />
                <input
                  type="button"
                  value="Anão"
                  onClick={() => {
                    changeImageByIndex(5);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Anã.jpeg"
                  onClick={() => {
                    changeImageByIndex(6);
                  }}
                />
                <input
                  type="button"
                  value="Anã"
                  onClick={() => {
                    changeImageByIndex(6);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Centauro.jpeg"
                  onClick={() => {
                    changeImageByIndex(7);
                  }}
                />
                <input
                  type="button"
                  value="Centauro"
                  onClick={() => {
                    changeImageByIndex(7);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Raças Barbaro/Centaura.jpeg"
                  onClick={() => {
                    changeImageByIndex(8);
                  }}
                />
                <input
                  type="button"
                  value="Centaura"
                  onClick={() => {
                    changeImageByIndex(8);
                  }}
                />
              </div>
            </div>
          </div>
          <form
            action="Guerriero"
            method="get"
            className={`${styles.containerForm}`}
            id="container-form"
          >
            <div className={`${styles.character}`}>
              <fieldset>
                <legend>Ficha de Personagem</legend>

                <div className={`${styles.containerName}`}>
                  <label for="nome">Nome:</label>
                  <input
                    type="text"
                    name="nome"
                    className={`${styles.name}`}
                    id="nome"
                  />
                </div>

                <label for="age">Idade</label>
                <input
                  type="number"
                  name="age"
                  className={`${styles.age}`}
                  id="age"
                />

                <label for="raca">Raça</label>
                <select name="raca" id="raca" className={`${styles.breed}`}>
                  <option value="H">Humano</option>
                  <option value="O">Orc</option>
                  <option value="A">Anão</option>
                  <option value="C">Centauro</option>
                </select>

                <label for="height">Altura</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  className={`${styles.height}`}
                />

                <label for="genre">Sexo</label>
                <select name="genre" id="genre" className={`${styles.genre}`}>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="H">Metamorfo</option>
                </select>
                <label for="peso">Peso</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className={`${styles.weight}`}
                />
              </fieldset>
            </div>
            <div
              id="container-attributes"
              className={`${styles.containerAttributes}`}
            >
              <fieldset>
                <legend>Atributos</legend>
                <div
                  className={`${styles.attributes} ${stylesBarbaro.attributes}`}
                >
                  <label for="Forca">Força</label>
                  <input type="number" name="for" id="for" />
                </div>
                <div
                  className={`${styles.attributes} ${stylesBarbaro.attributes}`}
                >
                  <label for="inteligencia">Inteligência</label>
                  <input type="number" name="int" id="int" />
                </div>
                <div
                  className={`${styles.attributes} ${stylesBarbaro.attributes}`}
                >
                  <label for="resistencia">Resistência</label>
                  <input type="number" name="res" id="res" />
                </div>
                <div
                  className={`${styles.attributes} ${stylesBarbaro.attributes}`}
                >
                  <label for="carisma">Carisma</label>
                  <input type="number" name="cas" id="cas" />
                </div>
                <div
                  className={`${styles.attributes} ${stylesBarbaro.attributes}`}
                >
                  <label for="reflexos">Reflexos</label>
                  <input type="number" name="ref" id="ref" />
                </div>
                <div
                  className={`${styles.attributes} ${stylesBarbaro.attributes}`}
                >
                  <label for="destreza">Destreza</label>
                  <input type="number" name="des" id="des" />
                </div>
              </fieldset>
            </div>

            <div
              id="container-history"
              className={`${styles.containerHistory}`}
            >
              <fieldset>
                <legend>História do Personagem</legend>
                <div className={`${styles.hist}`}>
                  <label for="his"></label>
                  <textarea name="his" id="his"></textarea>
                </div>
              </fieldset>
            </div>

            <div id="status" className={`${styles.status}`}>
              <fieldset>
                <legend>Status</legend>
                <div className={`${styles.life}`}>
                  <label for="hp">PV</label>
                  <input type="number" name="hp" id="hp" />
                </div>
                <div className={`${styles.fury}`}>
                  <label for="furia">Furia</label>
                  <input type="number" name="fu" id="fu" />
                </div>
                <div className={`${styles.injury}`}>
                  <label for="sagramento">Sangramento</label>
                  <input type="checkbox" name="sague" id="sague" />
                </div>
                <div className={`${styles.venom}`}>
                  <label for="poison">Envenenado</label>
                  <input type="checkbox" name="poison" id="poison" />
                </div>
              </fieldset>
            </div>

            <div className={`${styles.item}`}>
              <fieldset>
                <legend>Equipamentos</legend>
                <div className={`${styles.armor}`}>
                  <label for="equip">Item</label>
                  <input type="text" name="arma1" id="arma1" />
                </div>
                <div className={`${styles.efeito}`}>
                  <label for="ele">Efeito</label>
                  <select name="ele" id="ele">
                    <option value="n">Nenhum</option>
                    <option value="F">Fogo</option>
                    <option value="A">Água</option>
                    <option value="T">Terra</option>
                    <option value="V">Veneno</option>
                    <option value="S">Sagramento</option>
                    <option value="M">Medo</option>
                    <option value="C">Cura</option>
                  </select>
                </div>
                <div className={`${styles.armor}`}>
                  <label for="equip">Item</label>
                  <input type="text" name="arma1" id="arma1" />
                </div>
                <div className={`${styles.efeito}`}>
                  <label for="ele">Efeito</label>
                  <select name="ele" id="ele">
                    <option value="n">Nenhum</option>
                    <option value="F">Fogo</option>
                    <option value="A">Água</option>
                    <option value="T">Terra</option>
                    <option value="V">Veneno</option>
                    <option value="S">Sagramento</option>
                    <option value="M">Medo</option>
                    <option value="C">Cura</option>
                  </select>
                </div>
                <div className={`${styles.armor}`}>
                  <label for="equip">Item</label>
                  <input type="text" name="arma1" id="arma1" />
                </div>
                <div className={`${styles.efeito}`}>
                  <label for="ele">Efeito</label>
                  <select name="ele" id="ele">
                    <option value="n">Nenhum</option>
                    <option value="F">Fogo</option>
                    <option value="A">Água</option>
                    <option value="T">Terra</option>
                    <option value="V">Veneno</option>
                    <option value="S">Sagramento</option>
                    <option value="M">Medo</option>
                    <option value="C">Cura</option>
                  </select>
                </div>
              </fieldset>
            </div>

            <button type="submit" onclick="exito()">
              Confirmar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
