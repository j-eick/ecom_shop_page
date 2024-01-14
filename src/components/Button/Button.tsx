import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: string;
  children?: ReactNode;
  iconSrc?: string;
};

export default function Button({ children, variant }: ButtonProps) {
  const styleClasses = classNames({
    [styles.thumbnailArrow]: variant === "thumbnailArrow",
    [styles.buttonCounterAmount]: variant === "buttonCounterAmount",
    [styles.addToCart]: variant === "addToCart",
  });

  return (
    <button data-variant={variant} className={styleClasses}>
      {children}
    </button>
  );
}
