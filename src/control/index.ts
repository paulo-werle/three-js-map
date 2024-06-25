import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { ControlProps } from './props';
import { ControlDefaultProps } from './defaults';

export const Control = ({
  camera,
  domElement,
  minDistance,
  maxDistance,
  minPan,
  maxPan,
  cameraLook   = ControlDefaultProps.cameraLook,
  enableRotate = ControlDefaultProps.enableRotate,
  mouseButtons = ControlDefaultProps.mouseButtons,
  touches      = ControlDefaultProps.touches,
}: ControlProps) => {
  // Controles
  const controls = new OrbitControls(
    camera,
    domElement
  );

  // Configurações dos controles
  controls.minDistance = minDistance;
  controls.maxDistance = maxDistance;
  controls.enableRotate = enableRotate ?? false;
  controls.mouseButtons = mouseButtons ?? { LEFT: THREE.MOUSE.PAN, RIGHT: null };
  controls.touches = touches ?? { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };

  // Coordenadas do alvo
  controls.target.set(
    cameraLook?.x!, // Rotação
    cameraLook?.y!,
    cameraLook?.z!
  );

  // ControlPan
  const minPanMovement = new THREE.Vector3(minPan.x, 0, minPan.z);
  const maxPanMovement = new THREE.Vector3(maxPan.x, 0, maxPan.z);
  const cameraVector = new THREE.Vector3();

  // Callback para evento
  const onChangeControls = () => {
    cameraVector.copy(controls.target);
    controls.target.clamp(minPanMovement, maxPanMovement);
    cameraVector.sub(controls.target);
    camera.position.sub(cameraVector);
  };

  // Adicionando evento de change
  controls.addEventListener('change', onChangeControls);

  return {
    controls,
  };
};
