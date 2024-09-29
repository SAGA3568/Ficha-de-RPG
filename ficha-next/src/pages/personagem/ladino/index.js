import React, { useState } from "react";
import styles from "../../../styles/personagem/hero.module.css";
import stylesLadino from "../../../styles/personagem/ladino.module.css";
import { createData } from "@/pages/api/characters";
import { useRouter } from "next/router";

export default function Ladino() {
  const [currentImage, setCurrentImage] = useState("/img/Ladino.jpeg");
  const [field, setField] = useState({
    name: "",
    genre: "M",
    history: "",
    age: null,
    height: null,
    breed: "H",
    strength: null,
    intelligence: null,
    resistance: null,
    charisma: null,
    reflexes: null,
    dexterity: null,
    hit_point: null,
    fury: null,
    magic: null,
    faith: null,
    stamina: null,
    bleeding: false,
    poisoning: false,
    item_1: "",
    effect_1: "",
    item_2: "",
    effect_2: "",
    item_3: "",
    effect_3: "",
  });
  const router = useRouter();

  const images = [
    "/img/Ladino.jpeg",
    "/img/Tipo Ladino/Homem.jpeg",
    "/img/Tipo Ladino/Mulher.jpeg",
    "/img/Tipo Ladino/Elfo.jpeg",
    "/img/Tipo Ladino/Elfa.jpeg",
  ];

  const changeImageByIndex = (indexImage) => {
    setCurrentImage(images[indexImage]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...field,
      image: currentImage,
      type: "Ladino",
    };

    const response = await createData(payload);

    if (response) router.back();
  };

  return (
    <div className={`${styles.wrapper} ${stylesLadino.wrapper}`}>
      <div className={`${styles.container} ${stylesLadino.container}`}>
        <header>
          <div
            className={`${styles.containerTitle} ${stylesLadino.containerTitle}`}
          >
            <h1>Ladino</h1>
          </div>
        </header>

        <main>
          <div className={styles.profile} id="profile">
            <img src={currentImage} id="Ladino" />

            <div className={`${styles.otherProfile}`} id="other-profile">
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Tipo Ladino/Homem.jpeg"
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
                  src="/img/Tipo Ladino/Mulher.jpeg"
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
                  src="/img/Tipo Ladino/Elfo.jpeg"
                  onClick={() => {
                    changeImageByIndex(3);
                  }}
                />
                <input
                  type="button"
                  value="Elfo"
                  onClick={() => {
                    changeImageByIndex(3);
                  }}
                />
              </div>
              <div className={`${styles.imageProfile}`}>
                <img
                  src="/img/Tipo Ladino/Elfa.jpeg"
                  onClick={() => {
                    changeImageByIndex(4);
                  }}
                />
                <input
                  type="button"
                  value="Elfa"
                  onClick={() => {
                    changeImageByIndex(4);
                  }}
                />
              </div>
            </div>
          </div>
          <form
            className={`${styles.containerForm}`}
            id="container-form"
            onSubmit={onSubmit}
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
                    onChange={(e) => {
                      setField({ ...field, name: e.target.value });
                    }}
                    id="nome"
                  />
                </div>

                <label for="age">Idade</label>
                <input
                  type="number"
                  name="age"
                  className={`${styles.age}`}
                  id="age"
                  onChange={(e) => {
                    setField({ ...field, age: e.target.value });
                  }}
                />

                <label for="raca">Raça</label>
                <select
                  name="raca"
                  id="raca"
                  onChange={(e) => {
                    setField({ ...field, breed: e.target.value });
                  }}
                  className={`${styles.breed}`}
                >
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
                  onChange={(e) => {
                    setField({ ...field, height: e.target.value });
                  }}
                />

                <label for="genre">Sexo</label>
                <select
                  name="genre"
                  id="genre"
                  onChange={(e) => {
                    setField({ ...field, genre: e.target.value });
                  }}
                  className={`${styles.genre}`}
                >
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
                  onChange={(e) => {
                    setField({ ...field, weight: e.target.value });
                  }}
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
                  className={`${styles.attributes} ${stylesLadino.attributes}`}
                >
                  <label for="Forca">Força</label>
                  <input
                    type="number"
                    name="for"
                    id="for"
                    onChange={(e) => {
                      setField({ ...field, strength: e.target.value });
                    }}
                  />
                </div>
                <div
                  className={`${styles.attributes} ${stylesLadino.attributes}`}
                >
                  <label for="inteligencia">Inteligência</label>
                  <input
                    type="number"
                    name="int"
                    id="int"
                    onChange={(e) => {
                      setField({ ...field, intelligence: e.target.value });
                    }}
                  />
                </div>
                <div
                  className={`${styles.attributes} ${stylesLadino.attributes}`}
                >
                  <label for="resistencia">Resistência</label>
                  <input
                    type="number"
                    name="res"
                    id="res"
                    onChange={(e) => {
                      setField({ ...field, resistance: e.target.value });
                    }}
                  />
                </div>
                <div
                  className={`${styles.attributes} ${stylesLadino.attributes}`}
                >
                  <label for="carisma">Carisma</label>
                  <input
                    type="number"
                    name="cas"
                    id="cas"
                    onChange={(e) => {
                      setField({ ...field, charisma: e.target.value });
                    }}
                  />
                </div>
                <div
                  className={`${styles.attributes} ${stylesLadino.attributes}`}
                >
                  <label for="reflexos">Reflexos</label>
                  <input
                    type="number"
                    name="ref"
                    id="ref"
                    onChange={(e) => {
                      setField({ ...field, reflexes: e.target.value });
                    }}
                  />
                </div>
                <div
                  className={`${styles.attributes} ${stylesLadino.attributes}`}
                >
                  <label for="destreza">Destreza</label>
                  <input
                    type="number"
                    name="des"
                    id="des"
                    onChange={(e) => {
                      setField({ ...field, dexterity: e.target.value });
                    }}
                  />
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
                  <textarea
                    name="his"
                    id="his"
                    onChange={(e) => {
                      setField({ ...field, history: e.target.value });
                    }}
                  ></textarea>
                </div>
              </fieldset>
            </div>

            <div id="status" className={`${styles.status}`}>
              <fieldset>
                <legend>Status</legend>
                <div className={`${styles.life}`}>
                  <label for="hp">PV</label>
                  <input
                    type="number"
                    name="hp"
                    id="hp"
                    onChange={(e) => {
                      setField({ ...field, hit_point: e.target.value });
                    }}
                  />
                </div>
                <div className={`${styles.fury}`}>
                  <label for="furia">Furia</label>
                  <input
                    type="number"
                    name="fu"
                    id="fu"
                    onChange={(e) => {
                      setField({ ...field, fury: e.target.value });
                    }}
                  />
                </div>
                <div className={`${styles.injury}`}>
                  <label for="sagramento">Sangramento</label>
                  <input
                    type="checkbox"
                    name="sague"
                    id="sague"
                    onChange={(e) => {
                      setField({ ...field, bleeding: e.target.checked });
                    }}
                  />
                </div>
                <div className={`${styles.venom}`}>
                  <label for="poison">Envenenado</label>
                  <input
                    type="checkbox"
                    name="poison"
                    id="poison"
                    onChange={(e) => {
                      setField({ ...field, poisoning: e.target.checked });
                    }}
                  />
                </div>
              </fieldset>
            </div>

            <div className={`${styles.item}`}>
              <fieldset>
                <legend>Equipamentos</legend>
                <div className={`${styles.armor}`}>
                  <label for="equip">Item</label>
                  <input
                    type="text"
                    name="arma1"
                    id="arma1"
                    onChange={(e) => {
                      setField({ ...field, item_1: e.target.value });
                    }}
                  />
                </div>
                <div className={`${styles.efeito}`}>
                  <label for="ele">Efeito</label>
                  <select
                    name="ele"
                    id="ele"
                    onChange={(e) => {
                      setField({ ...field, effect_1: e.target.value });
                    }}
                  >
                    <option value="Nenhum efeito">Nenhum</option>
                    <option value="Fogo">Fogo</option>
                    <option value="Água">Água</option>
                    <option value="Terra">Terra</option>
                    <option value="Veneno">Veneno</option>
                    <option value="Sangramento">Sangramento</option>
                    <option value="Medo">Medo</option>
                    <option value="Cura">Cura</option>
                  </select>
                </div>
                <div className={`${styles.armor}`}>
                  <label for="equip">Item</label>
                  <input
                    type="text"
                    name="arma1"
                    id="arma1"
                    onChange={(e) => {
                      setField({ ...field, item_2: e.target.value });
                    }}
                  />
                </div>
                <div className={`${styles.efeito}`}>
                  <label for="ele">Efeito</label>
                  <select
                    name="ele"
                    id="ele"
                    onChange={(e) => {
                      setField({ ...field, effect_2: e.target.value });
                    }}
                  >
                    <option value="Nenhum efeito">Nenhum</option>
                    <option value="Fogo">Fogo</option>
                    <option value="Água">Água</option>
                    <option value="Terra">Terra</option>
                    <option value="Veneno">Veneno</option>
                    <option value="Sangramento">Sangramento</option>
                    <option value="Medo">Medo</option>
                    <option value="Cura">Cura</option>
                  </select>
                </div>
                <div className={`${styles.armor}`}>
                  <label for="equip">Item</label>
                  <input
                    type="text"
                    name="arma1"
                    id="arma1"
                    onChange={(e) => {
                      setField({ ...field, item_3: e.target.value });
                    }}
                  />
                </div>
                <div className={`${styles.efeito}`}>
                  <label for="ele">Efeito</label>
                  <select
                    name="ele"
                    id="ele"
                    onChange={(e) => {
                      setField({ ...field, effect_3: e.target.value });
                    }}
                  >
                    <option value="Nenhum efeito">Nenhum</option>
                    <option value="Fogo">Fogo</option>
                    <option value="Água">Água</option>
                    <option value="Terra">Terra</option>
                    <option value="Veneno">Veneno</option>
                    <option value="Sangramento">Sangramento</option>
                    <option value="Medo">Medo</option>
                    <option value="Cura">Cura</option>
                  </select>
                </div>
              </fieldset>
            </div>

            <button type="submit">Confirmar</button>
          </form>
        </main>
      </div>
    </div>
  );
}
