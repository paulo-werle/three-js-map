import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { MapLoaderProps } from "./props";

// Loader GLTF
const loader = new GLTFLoader();

export const MapLoader = ({
  path,
  scene,
  scale,
  onLoadCallback,
  onProgressCallback,
  onErrorCallback
}: MapLoaderProps) => {
  return new Promise(
    (
      resolve: (value: THREE.Object3D) => void,
      reject: (reason?: any) => void
    ) => {
      loader.load(
        path,
        (gltf: GLTF) => {
          // Cena do modelo
          const model = gltf.scene;

          // Escala
          if (scale) {
            model.scale.set(
              scale.x,
              scale.y,
              scale.z
            );
          }

          // Centralização
          const container = new THREE.Box3().setFromObject(model);
          const center = container.getCenter(new THREE.Vector3());
          model.position.sub(center);

          // Escala
          scene.add(model);

          if (onLoadCallback) {
            onLoadCallback(gltf)
          }

          resolve(model)
        },
        (event: ProgressEvent<EventTarget>) => {
          if (onProgressCallback) {
            onProgressCallback(event)
          }
        },
        (err: unknown) => {
          console.error(err)

          if (onErrorCallback) {
            onErrorCallback(err)
          }

          reject(err)
        }
      );
    }
  )
}