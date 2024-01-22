import classNames from "classnames";
import styles from "./Image.module.scss";

type imgProps = {
  src: string;
  alt: string;
  width?: number;
  variant?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

export default function Logo({ src, alt, width, variant, onClick }: imgProps) {
  const styleClasses = classNames({
    [styles.logo]: variant === "logo",
    [styles.cart]: variant === "cart",
    [styles.profile]: variant === "profile",
    [styles.caroussel]: variant === "caroussel",
    [styles.prod_thumbnails]: variant === "prod_thumbnails",
    [styles.prod_thumbnails_active]: variant === "prod_thumbnails_active",
    [styles.closeIcon]: variant === "closeIcon",
    [styles.default]: !variant,
  });

  return (
    <img
      className={styleClasses}
      src={src}
      alt={alt}
      width={width}
      onClick={onClick}
    />
  );
}
