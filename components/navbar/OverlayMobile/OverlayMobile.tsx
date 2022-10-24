import React from "react";
import { Logo } from "@/components/common/Logo";
import { BackButton } from "@/components/common/BackButton";
import { CloseButton } from "@/components/common/CloseButton";
import { Menu } from "@/components/navbar/Menu";
import { MAIN_MENU } from "@/config/menu";
import { Container } from "./OverlayMobile.styles";

interface Props {
  isVisible: boolean;
  handleMenuToggle: () => void;
}

export const OverlayMobile: React.FC<Props> = ({
  isVisible,
  handleMenuToggle,
}) => {
  return (
    <Container $isVisible={isVisible}>
      <div className="flex justify-between h-16 items-center px-5">
        <Logo className="h-8 lg:h-10" />
        <div>
          <BackButton onClick={console.log} aria-label="Return to menu" />
          <CloseButton onClick={handleMenuToggle} aria-label="Close overlay" />
        </div>
      </div>
      <nav className="text-xl font-display font-bold pt-10">
        <Menu items={MAIN_MENU} className="flex flex-col space-y-4" />
      </nav>
    </Container>
  );
};
