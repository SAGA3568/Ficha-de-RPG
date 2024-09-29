import React, { useCallback, useState, useEffect } from "react";
import styles from "../../styles/personagem/list.module.css";
import { getAllData, deleteData } from "../api/characters";
import Link from "next/link";

export default function ListCharacter() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(false);

  const fetchData = useCallback(async () => {
    const response = await getAllData();

    if (response) {
      setData(response);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, updateData]);

  const handleDelete = async (id) => {
    const response = await deleteData(id);

    setUpdateData((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {" "}
        <h1 className={styles.containerTitle}>Listagem de Personagens</h1>
        <div className={styles.containerCharacter}>
          {data.map((character, index) => (
            <div key={index} className={styles.character}>
              <div>
                <img src={`${character.image}`} alt={character.name} />
                <div className={styles.characterInfo}>
                  <h2>{character.name}</h2>
                  <p>{character.type}</p>
                </div>
              </div>
              <div className={styles.characterAction}>
                <button>
                  <Link href={`/personagem/${character.id}`}>Ver Detalhes</Link>
                </button>
                <button
                  onClick={() => {
                    handleDelete(character.id);
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
