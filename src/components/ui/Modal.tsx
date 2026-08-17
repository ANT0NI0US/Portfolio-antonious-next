"use client";

import { CloseIcon } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

interface ModalContextValue {
  openName: string;
  close: () => void;
  open: (windowName: string) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
}

function ModalRoot({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (windowName: string) => setOpenName(windowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  opens: string;
  children: ReactElement<{ onClick?: () => void }>;
}

function Open({ opens: opensWindowName, children }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Open must be used within Modal");

  const { open } = context;
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

interface WindowProps {
  children: ReactElement<{ onCloseModal?: () => void }>;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Window must be used within Modal");

  const { openName, close } = context;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (name === openName) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [name, openName, close]);

  return createPortal(
    <AnimatePresence>
      {name === openName && (
        <>
          <div
            key="overlay"
            className="fixed top-0 left-0 z-110 h-full w-full bg-black/85"
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-10000000 flex h-full w-full items-center justify-center"
          >
            <div className="bg-main relative z-50 max-h-[90vh] w-[90%] rounded-md shadow-md sm:max-h-[80vh] md:w-187.5">
              <Button
                variation="delete"
                aria_label="Close-modal"
                onClick={close}
                font="absolute! top-[10px] right-[10px] w-[30px]! h-[30px]! p-2!"
              >
                <CloseIcon />
              </Button>
              <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

interface ModalComponent {
  (props: ModalProps): ReactNode;
  Open: typeof Open;
  Window: typeof Window;
}

const Modal = ModalRoot as ModalComponent;
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
