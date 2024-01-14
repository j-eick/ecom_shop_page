import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Sidemenu.module.scss";

console.clear();

type sideMenuProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  isSideMenuOpen: boolean;
};

export default function Sidemenu({ children, isSideMenuOpen }: sideMenuProps) {
  const containerClasses = classNames(styles.container, {
    [styles.close]: !isSideMenuOpen,
    [styles.open]: isSideMenuOpen,
  });

  return (
    <div className={containerClasses} data-sidemenu={isSideMenuOpen}>
      {children}
    </div>
  );
}
