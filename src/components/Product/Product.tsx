import { ReactNode } from "react";
import styles from "./Product.module.scss";

type ProductProps = {
  children: ReactNode;
};

export default function Product({ children }: ProductProps) {
  return <article className={styles.product}>{children}</article>;
}
