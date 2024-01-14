import Button from "./components/Button/Button";
import Caroussel from "./components/Caroussel/Caroussel";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Page from "./components/Page/Page";
import Product from "./components/Product/Product";
import productStyle from "./components/Product/Product.module.scss";
import Image from "./components/Image/Image";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Nav from "./components/Nav/Nav";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState } from "react";

function App() {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState<boolean>(false);

  return (
    <Page>
      <Header>
        <BurgerMenu onClick={() => {}} />
        <SideMenu isSideMenuOpen={isSidemenuOpen}>
          <Nav />
        </SideMenu>
      </Header>
      <Main>
        <Caroussel>caroussel</Caroussel>
        <Product>
          {/* +++++  COMPANY NAME  +++++ */}
          <div className={productStyle.company}>SNEAKER COMPANY</div>

          {/* +++++  PRODUCT TILE  +++++ */}
          <div className={productStyle.title}>
            Fall Limited Edition Sneakers
          </div>

          {/* +++++  PRODUCT DESCRIPTION  +++++ */}
          <div className={productStyle.desciption}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </div>

          {/* +++++  PRODUCT PRICE  +++++ */}
          <ul className={productStyle.priceContainer}>
            <li className={productStyle.price}>$125.00</li>
            <li className={productStyle.discount}>50%</li>
            <li className={productStyle.formerPrice}>$250.00</li>
          </ul>

          {/* +++++  PRODUCT CHECKOUT  +++++ */}
          <div className={productStyle.checkout}>
            <ul className={productStyle.ulCounterContainer}>
              <li className={productStyle.liLess}>
                <Button
                  variant="buttonCounterAmount"
                  className={productStyle.buttonCounterLess}
                >
                  <Image src="/images/icon-minus.svg" alt="button_less" />
                </Button>
              </li>
              <li className={productStyle.liCounter}>
                <span>0</span>
              </li>
              <li className={productStyle.liMore}>
                <Button
                  variant="buttonCounterAmount"
                  className={productStyle.buttonCounterMore}
                >
                  <Image src="/images/icon-plus.svg" alt="button_more" />
                </Button>
              </li>
            </ul>
            <Button variant="addToCart" iconSrc="/images/icon-cart.svg">
              {/* <span icon="addToCartIcon" /> */}
              <Image src="/images/icon-cart.svg" alt="cart_icon" width={16} />
              Add to cart
            </Button>
          </div>
        </Product>
      </Main>
    </Page>
  );
}

export default App;
