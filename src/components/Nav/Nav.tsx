import styles from "./Nav.module.scss";
import navElems from "../../utils/nav.json";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        {navElems.map((item, index) => (
          <li key={index}>{item.category}</li>
        ))}
      </ul>
    </nav>
  );
}
