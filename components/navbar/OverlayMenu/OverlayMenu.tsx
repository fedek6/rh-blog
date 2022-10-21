import React from "react";
import { CloseButton } from "@/components/common/CloseButton";
import { Menu } from "@/components/navbar/Menu";
import { MAIN_MENU } from "@/config/menu";

type Props = {
  handleMenuClose: () => void;
};

export const OverlayMenu: React.FC<Props> = React.memo(function OverlayMenu({
  handleMenuClose,
}) {
  return (
    <>
      <div className="flex justify-end">
        <CloseButton onClick={handleMenuClose} />
      </div>
      <nav className="text-xl font-display font-bold pt-10">
        <Menu items={MAIN_MENU} className="flex flex-col space-y-4" />
      </nav>
    </>
  );
});
