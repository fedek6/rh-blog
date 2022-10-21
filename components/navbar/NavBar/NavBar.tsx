import React from "react";
import {
  Container,
  NavContainerDesktop,
  NavContainerMobile,
} from "./NavBar.styles";
import { Logo } from "@/components/common/Logo";
import { ThemeSwitch } from "@/components/navbar/ThemeSwitch";
import { SITE_META } from "@/config/meta";
import { Menu } from "@/components/navbar/Menu";
import { Hamburger } from "@/components/navbar/Hamburger";
import { CloseButton } from "@/components/common/CloseButton";
import { MAIN_MENU } from "@/config/menu";

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

  const handleHambugerClick = () => {
    setIsMenuVisible((isMenuVisible) => !isMenuVisible);
  };

  return (
    <Container>
      <Logo logoClasses="h-8 md:h-12" aria-label={SITE_META.name} />
      <NavContainerDesktop>
        <Menu items={MAIN_MENU} className="flex space-x-4" />
        <ThemeSwitch />
      </NavContainerDesktop>
      <div className="md:hidden">
        <Hamburger onClick={handleHambugerClick} />
        <NavContainerMobile $isVisible={isMenuVisible} ref={menuEl}>
          <div className="flex justify-end">
            <CloseButton onClick={handleHambugerClick} />
          </div>
          <nav className="text-xl font-display font-bold pt-10">
            <Menu items={MAIN_MENU} className="flex flex-col space-y-4" />
          </nav>
        </NavContainerMobile>
      </div>
    </Container>
  );
};
