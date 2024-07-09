import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.card__info}>
        <p className={styles.card__title}>{props.title}</p>
        <h3 className={styles.card__description}>{props.description}</h3>
      </div>
    </div>
  );
}

export default Card;
