import { CameraProps } from "./props";

export const CameraDefaultProps: Required<CameraProps> = {
  aspect: window.innerWidth / window.innerHeight,
  cameraPosition: { x: 0, y: 2, z: 0 },
  far: 1000,
  fov: 75,
  near: 0.1,
};