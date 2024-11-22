import React, { PropsWithChildren } from "react";
import { LayoutWrapper } from "./style";

export default function Layout({ children }: PropsWithChildren) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
