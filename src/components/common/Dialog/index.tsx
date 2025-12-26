import React, { ReactElement, ReactNode, useEffect } from "react";
import Button from "../Button";

// Define the types for the props
interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  children: ReactNode | ReactElement;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, closeDialog, children }) => {
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // Check if the target is the overlay and not the modal content
    if (e.target === e.currentTarget) {
      closeDialog();
    }
  };

  useEffect(() => {
    // Disable scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    // Close dialog when pressing 'Escape' key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDialog();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDialog]);

  return (
    <div
      className={`bg-primitives-black_80 fixed inset-0 z-9999 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`flex h-full transform items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        // Prevent the click event from propagating to the overlay
        onClick={(e) => {
          e.stopPropagation();
          handleOverlayClick(e);
        }}
      >
        <div className="relative h-max w-max">
          <Button
            onClick={closeDialog}
            withBackgoundImage
            backgroundImageUrl="/icons/close-stone-icon.svg"
            className="absolute -top-4 right-0 z-2 min-h-8! w-max min-w-8! bg-contain! p-0! sm:min-h-16! sm:min-w-16!"
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
