import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { Coordinates } from '../props';

export interface MapLoaderProps {
  path: string;
  scene: THREE.Scene;
  scale?: Coordinates;
  onLoadCallback?: (data: GLTF) => void
  onProgressCallback?: (event: ProgressEvent<EventTarget>) => void
  onErrorCallback?: (err: unknown) => void
}

export interface ObjectLoaderProps {
  position: Coordinates;
  path: string;
  scene: THREE.Scene;
  scale: Coordinates;
  onLoadCallback?: (data: GLTF) => void
  onProgressCallback?: (event: ProgressEvent<EventTarget>) => void
  onErrorCallback?: (err: unknown) => void
}