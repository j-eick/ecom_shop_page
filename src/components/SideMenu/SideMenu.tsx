import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Sidemenu.module.scss";
import Image from "../Image/Image";

console.clear();

type sideMenuProps = {
  children: ReactNode;
  isSideMenuOpen: boolean;
  // onCloseSidemenu() is expected to an argument: boolean without a return value
  onCloseSidemenu: (closeSidemenu: boolean) => void;
};

export default function Sidemenu({
  children,
  isSideMenuOpen,
  onCloseSidemenu,
}: sideMenuProps) {
  const styleClasses = classNames({
    [styles.closed]: !isSideMenuOpen,
    [styles.open]: isSideMenuOpen,
  });

  const handleCloseSidemenu = () => {
    // function takes 1 argument according to sideMenuProps
    onCloseSidemenu(false);
  };

  return (
    <div className={styleClasses} data-sidemenu={isSideMenuOpen}>
      <Image
        variant="closeIcon"
        src="/images/icon-close.svg"
        alt="close_icon"
        onClick={() => handleCloseSidemenu()}
      />
      {children}
    </div>
  );
}
