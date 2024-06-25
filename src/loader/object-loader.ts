import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { ObjectLoaderProps } from "./props";

// Loader GLTF
const loader = new GLTFLoader();

export const ObjectLoader = async ({
  path,
  scene,
  scale,
  position,
  onLoadCallback,
  onProgressCallback,
  onErrorCallback
}: ObjectLoaderProps) => {
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
          model.scale.set(
            scale.x,
            scale.y,
            scale.z
          );

          // Centralização
          model.position.set(
            position.x,
            position.y,
            position.z
          );

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