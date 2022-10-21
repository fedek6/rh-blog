import React from "react";
import {
  Container,
  NavContainerDesktop,
  NavContainerMobile,
} from "./NavBar.styles";
import { Logo } from "@/components/common/Logo";
import { SITE_META } from "@/config/meta";
import { Hamburger } from "@/components/navbar/Hamburger";
import { OverlayMenu } from "../OverlayMenu/OverlayMenu";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";

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

    current!.addEventListener("click", handleItemClick);

    return () => {
      current!.removeEventListener("click", handleItemClick);
    };
  }, []);

  const toggleMenu = React.useCallback(() => {
    setIsMenuVisible((isMenuVisible) => !isMenuVisible);
  }, []);

  return (
    <Container>
      <Logo logoClasses="h-8 md:h-12" aria-label={SITE_META.name} />
      <NavContainerDesktop>
        <DesktopMenu />
      </NavContainerDesktop>
      <div className="md:hidden">
        <Hamburger onClick={toggleMenu} />
        <NavContainerMobile $isVisible={isMenuVisible} ref={menuEl}>
          <OverlayMenu handleMenuClose={toggleMenu} />
        </NavContainerMobile>
      </div>
    </Container>
  );
};
