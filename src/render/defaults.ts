import { RenderProps } from "./props";

export const RenderDefaultProps: Required<Pick<RenderProps, 'height' | 'width'>> = {
  height: window.innerHeight,
  width: window.innerWidth,
};