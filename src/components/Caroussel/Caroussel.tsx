// import Image from "../Image/Image";
import styles from "./Caroussel.module.scss";
import stylesProdPreview from "../ProdPreview/ProdPreview.module.scss";
import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { products } from "../../utils/products.tsx";
import ProdPreview from "../ProdPreview/ProdPreview.tsx";
import Image from "../Image/Image.tsx";
import stylesImage from "../Image/Image.module.scss";

// type CarousselProps = {
//   // prodImages: ReactNode[];
// };

console.clear();

export default function Caroussel() {
  const [counter, setCounter] = useState<number>(1);
  const [allProducts] = useState(products);
  const [currentImage, setCurrentImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>();
  // const [currentThumbnail, setCurrentThumbnail] = useState("");
  // const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState<number>();

  useEffect(() => {
    const handleBackNextButton = (counter: number) => {
      for (let i = 1; i <= allProducts.length; i++) {
        // prevPic = allProducts.length;
        if (i === counter) {
          setCurrentImage(`image-product-${i}.jpg`);
          setCurrentImageIndex(i);
          // setCurrentThumbnail(`image-product-${i}-thumbnail.jpg`);
          // setCurrentThumbnailIndex(i);
          break;
        }
      }
    };

    handleBackNextButton(counter);
  }, [counter, allProducts.length]);

  const handlePreviewPhoto = (e: React.MouseEvent<HTMLImageElement>) => {
    // code
  };

  return (
    <div className={styles.carousselContainer}>
      <div
        className={styles.caroussel}
        style={{
          backgroundImage: `url("../../../public/images/prodPictures/${currentImage}")`,
        }}
      >
        <span
          className={styles.back}
          onClick={() => setCounter((counter - 1) % (allProducts.length + 1))}
        >
          <FaAngleLeft />
        </span>
        <span
          className={styles.next}
          onClick={() => setCounter((counter + 1) % (allProducts.length + 1))}
        >
          <FaAngleRight />
        </span>
      </div>
      <ProdPreview>
        <ul className={stylesProdPreview.ul}>
          {products.map((product) => (
            <li key={product.id}>
              {currentImageIndex !== product.id ? (
                <Image
                  variant="prod_thumbnails"
                  src={`/images/prodThumbnails/${product.thumbnail}`}
                  alt="prodPhoto_1"
                  onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                    handlePreviewPhoto(e)
                  }
                />
              ) : (
                <div className={stylesImage.activeLi}>
                  <Image
                    variant="prod_thumbnails_active"
                    src={`/images/prodThumbnails/${product.thumbnail}`}
                    alt="prodPhoto_1"
                    onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                      handlePreviewPhoto(e)
                    }
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </ProdPreview>
    </div>
  );
}
