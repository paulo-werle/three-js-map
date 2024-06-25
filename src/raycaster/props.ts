import * as THREE from 'three';

export interface RaycasterProps {
  model: THREE.Object3D;
  camera: THREE.Camera;
  distance?: number;
  callback?: (intersection: THREE.Intersection, event: MouseEvent | TouchEvent) => void;
}