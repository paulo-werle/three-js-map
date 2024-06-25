import * as THREE from 'three';

import { Coordinates } from '../props';

export interface ControlProps {
  camera: THREE.Camera;
  domElement: HTMLElement;
  minDistance: number;
  maxDistance: number;
  minPan: Omit<Coordinates, 'y'>;
  maxPan: Omit<Coordinates, 'y'>;
  enableRotate?: boolean;
  cameraLook?: Coordinates
  mouseButtons?: {
    LEFT?: THREE.MOUSE | null;
    MIDDLE?: THREE.MOUSE | null;
    RIGHT?: THREE.MOUSE | null;
  };
  touches?: {
    ONE?: THREE.TOUCH | null;
    TWO?: THREE.TOUCH | null;
  };
}