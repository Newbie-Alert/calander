import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";

type ModalParams = {
  title: string;
  component: React.ReactNode;
  bottomComponent?: React.ReactNode;
  text: string;
};

type GlobalModalContextType = {
  modal: ModalParams;
  setModal: (modal: ModalParams) => void;
  clearModal: () => void;
};

const GlobalModalContext = createContext<GlobalModalContextType | undefined>(
  undefined
);

export function GlobalModalProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<ModalParams>({
    component: null,
    bottomComponent: null,
    title: "",
    text: "",
  });

  const clearModal = () => {
    setModal({
      component: null,
      bottomComponent: null,
      title: "",
      text: "",
    });
  };

  return (
    <GlobalModalContext.Provider value={{ modal, setModal, clearModal }}>
      {children}
    </GlobalModalContext.Provider>
  );
}

export function useGlobalModal() {
  const context = useContext(GlobalModalContext);
  if (context === undefined) {
    throw new Error("useGlobalModal must be used within a GlobalModalProvider");
  }
  return context;
}
