import styles from "./Heading.module.css";
function Heading(props) {
  return <h2 className={styles["heading"]}>{props.title}</h2>;
}

export default Heading;
