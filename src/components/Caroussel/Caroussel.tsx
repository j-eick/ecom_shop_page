// import Image from "../Image/Image";
import { ReactNode } from "react";
import styles from "./Caroussel.module.scss";
import Image from "../Image/Image";

type CarousselProps = {
  children: ReactNode;
};

export default function Caroussel({ children }: CarousselProps) {
  return (
    <div className={styles.caroussel}>
      <Image variant="caroussel" src="/images/" alt="photo_caroussel" />
    </div>
  );
}
