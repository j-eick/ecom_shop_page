import styles from "./Nav.module.scss";
import navElems from "../../utils/nav.json";
import classNames from "classnames";
import { FaAngleRight } from "react-icons/fa";

type NavProps = {
  variant?: string;
  isSidemenuOpen?: boolean;
};

export default function Nav({ variant, isSidemenuOpen }: NavProps) {
  const classStyles = classNames({
    [styles.closed]: !isSidemenuOpen,
    [styles.open]: isSidemenuOpen,
    [styles.navMobile]: variant === "mobile",
    [styles.navWide]: variant === "non_mobile",
  });

  return (
    <nav className={classStyles} data-sidemenu={isSidemenuOpen}>
      <span className={styles.start} />
      <ul className={styles.ul}>
        {navElems.map((item, index) => (
          <li className={styles.li} key={index}>
            {item.category}
          </li>
        ))}
      </ul>
      {!isSidemenuOpen && (
        <span className={styles.end}>
          <FaAngleRight />
        </span>
      )}
    </nav>
  );
}
