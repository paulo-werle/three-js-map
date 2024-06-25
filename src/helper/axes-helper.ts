import * as THREE from 'three';

import { AxesHelperProps } from './props';

export const AxesHelper = ({
  size,
  scene,
}: AxesHelperProps) => {
  // Helper
  const axesHelper = new THREE.AxesHelper(
    size
  );

  // Adicionando helper a cena
  scene.add(axesHelper);

  return (
    axesHelper
  );
};
