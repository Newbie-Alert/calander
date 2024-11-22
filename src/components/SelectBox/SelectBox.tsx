import React, { useState } from "react";
import * as St from "./style";

type Props = {
  options: (string | number)[];
  id: string;
  value: string | number;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

export default function SelectBox({ id, value, options, onClick }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <St.SelectBox onClick={handleOptionToggle}>
      {value}
      <span>▾</span>
      {isOpen && (
        <St.OptionListBox>
          {options.map((option) => {
            return (
              <St.OptionList id={id} value={option} onClick={(e) => onClick(e)}>
                {option}
              </St.OptionList>
            );
          })}
        </St.OptionListBox>
      )}
    </St.SelectBox>
  );
}
