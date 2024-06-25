import * as THREE from 'three';

import { LightDefaultProps } from './defaults';
import { LightProps } from './props';

export const Light = ({
  scene,
  position,
  color = LightDefaultProps.color,
  intensity = LightDefaultProps.intensity,
}: LightProps) => {
  // Luz
  const light = new THREE.DirectionalLight(
    color,
    intensity
  );

  // Posição da luz
  light.position.set(
    position?.x,
    position?.y,
    position?.z
  );

  // Adicionando a cena
  scene.add(light);

  return {
    light
  };
};
