import {
  Container,
  Slide,
  SlideContainer,
  SlidingContainer,
} from "./OverlayMobile.styles";
import React, { ComponentType } from "react";

import { BackButton } from "@/components/common/BackButton";
import { CloseButton } from "@/components/common/CloseButton";
import { HybridLink } from "@/components/common/HybridLink";
import { Logo } from "@/components/common/Logo";
import { MAIN_MENU } from "@/config/menu";
import { Menu } from "@/components/navbar/Menu";
import { Search } from "@/components/navbar/Search";
import { SearchButton } from "@/components/common/SearchButton";
import { ThemeButton } from "@/components/common/ThemeButton";

interface Props {
  isVisible: boolean;
  handleMenuToggle: () => void;
}

type Views = "menu" | "search";

const Link: ComponentType<HybridLink> = (props) => (
  <HybridLink
    className="block text-eerie-black font-display font-bold text-m-lg mb-61_8p px-8 py-2 hover:text-english-vermillion dark:text-platinum-300 hover:dark:text-max-yellow-red"
    {...props}
  />
);

export const OverlayMobile: React.FC<Props> = ({
  isVisible,
  handleMenuToggle,
}) => {
  const [view, setView] = React.useState<Views>("menu");
  const slide = view === "menu" ? 0 : 1;

  React.useEffect(() => {
    !isVisible && setView("menu");
  }, [isVisible]);

  return (
    <Container $isVisible={isVisible}>
      <div className="flex justify-between h-16 items-center px-5">
        <Logo className="h-8 lg:h-10" />
        <div className="flex gap-4">
          {view === "search" ? (
            <BackButton
              onClick={() => setView("menu")}
              aria-label="Return to menu"
            />
          ) : (
            <SearchButton
              onClick={() => setView("search")}
              aria-label="Show search panel"
            />
          )}
          <CloseButton onClick={handleMenuToggle} aria-label="Close overlay" />
        </div>
      </div>
      <SlideContainer>
        <SlidingContainer $slide={slide}>
          <Slide>
            <div className="pt-[10vh]">
              <Menu
                items={MAIN_MENU}
                LinkComponent={Link}
                className="text-center"
              />
              <ThemeButton />
            </div>
          </Slide>
          <Slide>
            <Search />
          </Slide>
        </SlidingContainer>
      </SlideContainer>
    </Container>
  );
};
