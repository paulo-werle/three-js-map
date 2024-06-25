import * as THREE from 'three';

import { RaycasterDefaultProps } from './defaults';
import { RaycasterProps } from './props';

export const RaycasterTouch = ({
  model,
  camera,
  distance,
  callback = RaycasterDefaultProps.callback,
}: RaycasterProps) => {
  // Raycaster
  const raycaster = new THREE.Raycaster();
  // Touch
  const touch = new THREE.Vector2();

  const onTouchStart = (event: TouchEvent) => {
    event.preventDefault();

    // Posição do toque
    touch.x =  (event.touches[0].clientX / window.innerWidth)  * 2 - 1;
    touch.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;

    // Define para a camera
    raycaster.setFromCamera(touch, camera);

    // Intercecções
    const intersects = raycaster.intersectObject(model);

    // Caso houver intercecções e callback
    if (
      (intersects.length > 0) &&
      (!distance || intersects[0]?.distance <= distance) &&
      (callback)
    ) {
      callback(intersects[0], event);
    }
  }

  // Adiciona o evento de toque
  window.addEventListener('touchstart', onTouchStart, false);

  return {
    dispose: () => (
      window.removeEventListener('touchstart', onTouchStart)
    )
  }
};
