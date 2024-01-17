// import Image from "../Image/Image";
import styles from "./Caroussel.module.scss";
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// type CarousselProps = {
//   children: ReactNode;
// };

export default function Caroussel() {
  const [currentImage, setCurrentImage] = useState();

  return (
    <div className={styles.caroussel}>
      <span className={styles.back}>
        <FaAngleLeft />
      </span>
      <span className={styles.next}>
        <FaAngleRight />
      </span>
    </div>
  );
}
