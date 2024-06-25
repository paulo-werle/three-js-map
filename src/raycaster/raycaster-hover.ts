import * as THREE from 'three';

import { RaycasterDefaultProps } from './defaults';
import { RaycasterProps } from './props';

export const RaycasterHover = ({
  model,
  camera,
  distance,
  callback = RaycasterDefaultProps.callback,
}: RaycasterProps) => {
  // Raycaster
  const raycaster = new THREE.Raycaster();
  // Mouse
  const mouse = new THREE.Vector2();

  const onMouseMove = (event: MouseEvent) => {
    event.preventDefault();

    // Posição do hover
    mouse.x =  (event.clientX / window.innerWidth)  * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Define para a camera
    raycaster.setFromCamera(mouse, camera);

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

  // Adiciona o evento de movimento do mouse
  window.addEventListener('mousemove', onMouseMove, false);

  return {
    dispose: () => (
      window.removeEventListener('mousemove', onMouseMove)
    )
  }
};

