import { css } from "styled-components";

export const PRIMARY_COLOR = "#388cff";

export const BOLD_FONT = css`
  font-weight: 600;
  font-size: 1.6rem;
`;
export const MEDIUM_FONT = css`
  font-weight: 500;
  font-size: 1.4rem;
`;

export type RowBoxProps = {
  gap?: number;
  justify?: "space-between" | "center" | "flex-start";
  width?: number;
  margin?: "right" | "center";
};

export const RowAttrs = css<RowBoxProps>`
  width: ${({ width }) => (width ? `${width}%` : "fit-content")};
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  gap: ${({ gap }) => (gap ? `${gap}rem` : "1rem")};
  ${({ margin }) => {
    switch (margin) {
      case "right":
        return css`
          margin-right: auto;
        `;
      case "center":
        return css`
          margin: 0 auto;
        `;
      default:
        return css`
          margin: 0;
        `;
    }
  }}
`;
