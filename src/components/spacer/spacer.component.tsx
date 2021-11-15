import React from "react";
import styled, { DefaultTheme } from "styled-components/native";

interface ISpacer {
  position: string;
  size: string;
  theme: DefaultTheme;
}

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  bottom: "margin-bottom",
  right: "margin-right",
};

const getVariant = (position: string, size: string, theme: DefaultTheme) =>
  /* @ts-ignore */
  `${positionVariant[position]}:${theme.space[sizeVariant[size]]}`;

export const Spacer = styled.View<ISpacer>`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
