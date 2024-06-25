import * as THREE from 'three';

import { GridHelperProps } from './props';
import { GridHelperDefaultProps } from './defaults';

export const GridHelper = ({
  size,
  scene,
  colorCenterLine = GridHelperDefaultProps.colorCenterLine,
  colorGrid = GridHelperDefaultProps.colorGrid,
}: GridHelperProps) => {
  // Helper
  const gridHelper = new THREE.GridHelper(
    size,
    size,
    colorCenterLine,
    colorGrid
  );

  // Adicionando helper a cena
  scene.add(gridHelper);

  return (
    gridHelper
  )
};
