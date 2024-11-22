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
};

export const RowAttrs = css<RowBoxProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => (gap ? `${gap}rem` : "1rem")};
  margin: 0 auto;
`;
