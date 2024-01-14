import { ReactNode } from "react";
import styles from "./Page.module.scss";

export default function Page({ children }: { children: ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}
