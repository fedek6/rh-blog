import React from "react";
import { Logo } from "@/components/common/Logo";
import { BackButton } from "@/components/common/BackButton";
import { CloseButton } from "@/components/common/CloseButton";
import { SearchButton } from "@/components/common/SearchButton";
import { Menu } from "@/components/navbar/Menu";
import { MAIN_MENU } from "@/config/menu";
import {
  Container,
  SlideContainer,
  SlidingContainer,
  Slide,
} from "./OverlayMobile.styles";

interface Props {
  isVisible: boolean;
  handleMenuToggle: () => void;
}

type Views = "menu" | "search";

export const OverlayMobile: React.FC<Props> = ({
  isVisible,
  handleMenuToggle,
}) => {
  const [view, setView] = React.useState<Views>("menu");
  const slide = React.useMemo(() => (view === "menu" ? 0 : 1), [view]);

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
            <Menu items={MAIN_MENU} />
          </Slide>
          <Slide>Search</Slide>
        </SlidingContainer>
      </SlideContainer>
    </Container>
  );
};
