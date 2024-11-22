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
  contentRef: React.RefObject<HTMLDivElement>;
  handleClickOutside: (e: React.MouseEvent) => void;
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

  // 모달 외부 클릭 시 모달 닫기
  const contentRef = useRef<HTMLDivElement>(null);
  // ref를 달아놓은 요소가 클릭한 노드에 포함되어 있지 않으면 모달이 닫힙니당
  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!contentRef.current?.contains(target)) {
      clearModal();
    }
  };

  return (
    <GlobalModalContext.Provider
      value={{ modal, setModal, clearModal, contentRef, handleClickOutside }}>
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
