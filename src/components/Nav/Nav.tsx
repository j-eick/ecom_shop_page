import styles from "./Nav.module.scss";
import navElems from "../../utils/nav.json";
import classNames from "classnames";

type NavProps = {
  variant?: string;
  isSidemenuOpen: boolean;
};

export default function Nav({ variant, isSidemenuOpen }: NavProps) {
  const classStyles = classNames({
    // [styles.closed]: !isSidemenuOpen,
    // [styles.open]: isSidemenuOpen,
    [styles.navMobile]: variant === "mobile",
    [styles.navWide]: variant === "non_mobile",
  });

  return (
    <nav className={classStyles}>
      <ul className={styles.ul}>
        {navElems.map((item, index) => (
          <li className={styles.li} key={index}>
            {item.category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
