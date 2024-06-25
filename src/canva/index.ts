import { CanvaProps } from "./props";

export const Canva = ({ elementID }: CanvaProps) => {
  // Canvas
  const canvas = document.querySelector(elementID) as HTMLCanvasElement | null;

  if (!canvas) {
    throw new Error(`Não foi possivel localizar elemento com id: ${elementID}.`);
  }

  return {
    canvas
  };
};
