import * as THREE from 'three';
import { Coordinates } from '../props';

export interface LightProps {
  color?: THREE.ColorRepresentation;
  position: Coordinates;
  scene: THREE.Scene;
  intensity?: number;
}