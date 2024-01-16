// import Image from "../Image/Image";
import styles from "./Caroussel.module.scss";
import { useState } from "react";
import Image from "../Image/Image";

// type CarousselProps = {
//   children: ReactNode;
// };

export default function Caroussel() {
  const [currentImage, setCurrentImage] = useState();

  return (
    <div className={styles.caroussel}>
      {/* <Image
        variant="caroussel"
        src="/images/prodPictures/image-product-1.jpg"
        alt="photo_caroussel"
      /> */}
    </div>
  );
}
