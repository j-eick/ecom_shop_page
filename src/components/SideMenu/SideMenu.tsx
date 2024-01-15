import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Sidemenu.module.scss";

console.clear();

type sideMenuProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  isSideMenuOpen: boolean;
};

export default function Sidemenu({ children, isSideMenuOpen }: sideMenuProps) {
  const styleClasses = classNames({
    [styles.closed]: !isSideMenuOpen,
    [styles.open]: isSideMenuOpen,
  });

  return (
    <div className={styleClasses} data-sidemenu={isSideMenuOpen}>
      {children}
    </div>
  );
}
