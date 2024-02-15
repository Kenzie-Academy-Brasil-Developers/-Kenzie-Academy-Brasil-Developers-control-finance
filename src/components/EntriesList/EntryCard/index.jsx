import style from "./style.module.scss";
import trash from "../../../assets/trash.png";

export const EntryCard = ({ entry }) => {
  return (
    <li className={style.card}>
      <p>
        {entry.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div>
        <span>{entry.categoryID === 0 ? "Entrada" : "Saída"}</span>
        <img src={trash} alt="lixeira" />
      </div>
    </li>
  );
};
