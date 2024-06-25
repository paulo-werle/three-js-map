import * as THREE from 'three';

import { SceneProps } from './props';
import { SceneDefaultProps } from './defaults';

export const Scene = ({
  background = SceneDefaultProps.background,
}: SceneProps = SceneDefaultProps) => {
  // Cena
  const scene = new THREE.Scene();

  // Cor de fundo
  scene.background = new THREE.Color(background);

  return {
    scene,
  };
};
