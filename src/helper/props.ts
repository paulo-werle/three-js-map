import * as THREE from 'three';

export interface HelperProps {
  scene: THREE.Scene;
  size: number;
}

export interface GridHelperProps {
  colorCenterLine?: THREE.ColorRepresentation;
  colorGrid?: THREE.ColorRepresentation;
  scene: HelperProps['scene'];
  size: HelperProps['size'];
}

export interface AxesHelperProps {
  scene: HelperProps['scene'];
  size: HelperProps['size'];
}