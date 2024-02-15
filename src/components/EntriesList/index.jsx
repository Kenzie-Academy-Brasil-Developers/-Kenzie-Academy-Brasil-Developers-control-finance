import styles from "./styles.module.scss";
import { EntryCard } from "./EntryCard/index.jsx";

export const EntriesList = ({ type, entries }) => {
  return (
    <section className={styles.container}>
      <div className={styles.totalInfo}>
        <p>Soma dos Valores</p>
        <p>
          {type === "Todos"
            ? entries
                .reduce(
                  (acc, cur) =>
                    cur.categoryID === 0 ? acc + cur.value : acc - cur.value,
                  0
                )
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
            : type === "Entradas"
            ? entries
                .reduce(
                  (acc, cur) => (cur.categoryID === 0 ? acc + cur.value : acc),
                  0
                )
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
            : entries
                .reduce(
                  (acc, cur) => (cur.categoryID === 1 ? acc + cur.value : acc),
                  0
                )
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
        </p>
      </div>
      <ul className={styles.listGroup}>
        {type === "Todos"
          ? entries.map((entry) => <EntryCard key={entry.id} entry={entry} />)
          : type == "Entradas"
          ? entries
              .filter((entry) => entry.categoryID === 0)
              .map((entry) => <EntryCard key={entry.id} entry={entry} />)
          : entries
              .filter((entry) => entry.categoryID === 1)
              .map((entry) => <EntryCard key={entry.id} entry={entry} />)}
      </ul>
    </section>
  );
};
