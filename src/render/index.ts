import * as THREE from 'three';

import { RenderProps } from './props';
import { RenderDefaultProps } from './defaults';

export const Render = ({
  canvas,
  width = RenderDefaultProps.width,
  height = RenderDefaultProps.height,
}: RenderProps) => {
  // Renderizador
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas,
  });

  // Tamanho
  renderer.setSize(
    width,
    height
  );

  return {
    renderer,
  };
};
