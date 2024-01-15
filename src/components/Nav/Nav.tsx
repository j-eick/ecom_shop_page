import styles from "./Nav.module.scss";
import navElems from "../../utils/nav.json";
import classNames from "classnames";

type NavProps = {
  variant: string;
};

export default function Nav({ variant }: NavProps) {
  const classStyles = classNames({
    [styles.mobile]: variant === "mobile",
    [styles.non_mobile]: variant === "non_mobile",
  });

  return (
    <nav className={classStyles}>
      <ul>
        {navElems.map((item, index) => (
          <li key={index}>{item.category}</li>
        ))}
      </ul>
    </nav>
  );
}
