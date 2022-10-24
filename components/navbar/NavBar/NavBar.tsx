import React from "react";
import { Container, NavContainerDesktop } from "./NavBar.styles";
import { LogoBanner } from "@/components/common/LogoBanner";
import { Hamburger } from "@/components/navbar/Hamburger";
import { MenuDesktop } from "../MenuDesktop";
import { OverlayMobile } from "../OverlayMobile";

type Props = {};

export const NavBar: React.FC<Props> = () => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const menuEl = React.useRef<HTMLElement>(null);

  // Handle menu hiding on item click
  React.useEffect(() => {
    const { current } = menuEl;

    const handleItemClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a")) {
        setIsMenuVisible((isMenuVisible) => !isMenuVisible);
      }
    };

    // current!.addEventListener("click", handleItemClick);

    return () => {
      // current!.removeEventListener("click", handleItemClick);
    };
  }, []);

  const toggleMenu = React.useCallback(() => {
    setIsMenuVisible((isMenuVisible) => !isMenuVisible);
  }, []);

  return (
    <Container>
      <LogoBanner />
      <NavContainerDesktop>
        <MenuDesktop />
      </NavContainerDesktop>
      <div className="lg:hidden">
        <Hamburger onClick={toggleMenu} aria-label="Open menu" />
        <OverlayMobile
          isVisible={isMenuVisible}
          handleMenuToggle={toggleMenu}
        />
      </div>
    </Container>
  );
};
