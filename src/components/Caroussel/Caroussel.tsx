// import Image from "../Image/Image";
import { ReactNode } from "react";
import styles from "./Caroussel.module.scss";

type CarousselProps = {
  children: ReactNode;
};

export default function Caroussel({ children }: CarousselProps) {
  return <div className={styles.caroussel}>{children}</div>;
}
