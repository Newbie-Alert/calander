import { CurrentDateType } from "../../hooks/date/type";

export type Props = {
  date: CurrentDateType;
  onClick: (type: "prev" | "next") => void;
};
