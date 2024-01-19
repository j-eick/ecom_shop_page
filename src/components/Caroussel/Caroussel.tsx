// import Image from "../Image/Image";
import styles from "./Caroussel.module.scss";
import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { prodPhotos } from "../../utils/products.tsx";

// type CarousselProps = {
//   prodImages: ReactNode[];
// };

console.clear();

export default function Caroussel() {
  const [counter, setCounter] = useState<number>(1);
  const [allPhotos] = useState(prodPhotos);
  // const [previousPhoto, setPreviousPhoto] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(allPhotos[0]);

  // start = 1
  // end = allPhotos.length
  // if counter = 1, "back" => 0 =>

  useEffect(() => {
    // const count = (num: number = 1) => {
    //   let lastPos: number | null = num;
    //   let newPos: number = lastPos + 1;

    //   return newPos;
    // };
    // count(-1);

    const handleBackNextButton = (counter: number) => {
      let prevPic: number | null;

      for (let i = 1; i <= allPhotos.length; i++) {
        prevPic = allPhotos.length;
        if (i === counter) {
          setCurrentImage(`image-product-${i}.jpg`);
          break;
        }
        // caroussel shows pictures backwards in full circle
        // if (counter === 0) {
        //   setCounter(allPhotos.length);
        // }
      }
      console.log(counter);
    };

    handleBackNextButton(counter);
  }, [counter, allPhotos.length]);

  return (
    <div
      className={styles.caroussel}
      style={{
        backgroundImage: `url("../../../public/images/prodPictures/${currentImage}")`,
      }}
    >
      <span
        className={styles.back}
        onClick={() => setCounter((counter - 1) % (allPhotos.length + 1))}
      >
        <FaAngleLeft />
      </span>
      <span
        className={styles.next}
        onClick={() => setCounter((counter + 1) % (allPhotos.length + 1))}
      >
        <FaAngleRight />
      </span>
    </div>
  );
}
