import { ReactNode } from "react";
import styles from "./ProdPreview.module.scss";

type ProdPreviewProps = {
  children: ReactNode;
};

export default function ProdPreview({ children }: ProdPreviewProps) {
  return <div className={styles.prodPreview}>{children}</div>;
}
