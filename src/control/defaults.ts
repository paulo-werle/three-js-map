import * as THREE from 'three';

import { ControlProps } from "./props";

export const ControlDefaultProps: Partial<ControlProps> = {
  touches: { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN },
  mouseButtons: { LEFT: THREE.MOUSE.PAN, RIGHT: null },
  cameraLook: { x: 0, y: 0, z: 0 },
  enableRotate: false,
};