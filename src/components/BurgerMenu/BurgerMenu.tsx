import styles from "./BurgerMenu.module.scss";

type burgerProps = {
  onClick: () => void;
};

export default function BurgerMenu({ onClick }: burgerProps) {
  return (
    <div className={styles.burgerMenu}>
      <img src="/images/icon-menu.svg" alt="burger_menu" onClick={onClick} />
    </div>
  );
}
