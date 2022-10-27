import React from "react";
import { Logo } from "@/components/common/Logo";
import { BackButton } from "@/components/common/BackButton";
import { CloseButton } from "@/components/common/CloseButton";
import { SearchButton } from "@/components/common/SearchButton";
import { Menu } from "@/components/navbar/Menu";
import { MAIN_MENU } from "@/config/menu";
import { Container } from "./OverlayMobile.styles";

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
      <nav className="text-xl font-display font-bold pt-10">
        <Menu items={MAIN_MENU} className="flex flex-col space-y-4" />
      </nav>
    </Container>
  );
};
