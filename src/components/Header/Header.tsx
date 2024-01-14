import styles from "./Header.module.scss";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <div className={styles.header}>{children}</div>;
}
