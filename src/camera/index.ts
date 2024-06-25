import * as THREE from 'three';

import { CameraProps } from './props';
import { CameraDefaultProps } from './defaults';

export const Camera = ({
  cameraPosition = CameraDefaultProps.cameraPosition,
  aspect = CameraDefaultProps.aspect,
  near = CameraDefaultProps.near,
  fov = CameraDefaultProps.fov,
  far = CameraDefaultProps.far,
}: CameraProps = CameraDefaultProps) => {
  // Camera
  const camera = new THREE.PerspectiveCamera(
    fov,
    aspect,
    near,
    far
  );

  // Posição
  // Distancia e Inclinação
  camera.position.set(
    cameraPosition?.x!,
    cameraPosition?.y!, // Distancia de altura
    cameraPosition?.z!  // Inclinação
  );

  return {
    camera
  };
};
