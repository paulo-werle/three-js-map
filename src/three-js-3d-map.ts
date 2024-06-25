import * as THREE from 'three';

import { Object, ThreeJs3DMapProps } from "./props";
import { RaycasterClick, RaycasterHover, RaycasterTouch } from "./raycaster";
import { MapLoader, ObjectLoader } from "./loader";
import { GridHelper, AxesHelper } from "./helper";
import { Control } from "./control";
import { Camera } from "./camera";
import { Render } from "./render";
import { Canva } from "./canva";
import { Scene } from "./scene";
import { Light } from "./light";

export const ThreeJs3DMap = ({
  elementID = '#three-js-3d-map',
  development = false,
  objects = [],
  onLoadComplete,
  container: {
    width,
    height,
    background,
    cameraPosition,
    aspect,
    near,
    fov,
    far,
  } = {},
  control: {
    minDistance,
    maxDistance,
    cameraLook,
    minPan,
    maxPan
  },
  light: {
    color,
    position,
    intensity
  },
  helper: {
    size,
    colorCenterLine,
    colorGrid
  },
  map: {
    path,
    scale,
    onLoadCallback,
    onProgressCallback,
    onErrorCallback,
  },
}: ThreeJs3DMapProps) => {
  // Helpers
  let gridHelper: THREE.GridHelper, axesHelper: THREE.AxesHelper;
  // Objetos
  let objectLoaded: THREE.Object3D[] = []

  let loadPromises = []

  // Elemento canvas
  const { canvas } = Canva({
    elementID
  });

  // Iniciando Renderizador
  const { renderer } = Render({
    canvas,
    width,
    height
  });
  // Iniciando Cena
  const { scene } = Scene({
    background
  });
  // Iniciando Camera
  const { camera } = Camera({
    cameraPosition,
    aspect,
    near,
    fov,
    far
  });

  // Definição dos controles
  const { controls } = Control({
    camera,
    cameraLook,
    minDistance,
    maxDistance,
    minPan,
    maxPan,
    domElement: renderer.domElement,
  });

  // Definição da luz
  const { light } = Light({
    scene,
    color,
    position,
    intensity
  });

  if (development) {
    gridHelper = GridHelper({
      size,
      scene,
      colorCenterLine,
      colorGrid
    });
    axesHelper = AxesHelper({
      size,
      scene
    })
  }

  const mapLoader = MapLoader({
    path,
    scale,
    scene,
    onLoadCallback,
    onProgressCallback,
    onErrorCallback
  })
  loadPromises.push(mapLoader)

  objects.forEach(
    ({
      path,
      scale,
      position,
      hoverDistance,
      clickDistance,
      touchDistance,
      hoverData = {},
      clickData = {},
      touchData = {},
      onLoadCallback,
      onProgressCallback,
      onErrorCallback,
      onHoverCallback,
      onClickCallback,
      onTouchCallback
    }: Object) => {
      const objectLoader = ObjectLoader({
        path,
        scale,
        scene,
        position,
        onLoadCallback,
        onProgressCallback,
        onErrorCallback
      }).then(
        (model) => {
          objectLoaded.push(model)

          RaycasterHover({
            model,
            camera,
            distance: hoverDistance,
            callback: (
              intersection: THREE.Intersection,
              event: MouseEvent | TouchEvent
            ) => {
              onHoverCallback && (
                onHoverCallback(hoverData, model, intersection, event)
              )
            }
          });
          RaycasterClick({
            model,
            camera,
            distance: clickDistance,
            callback: (
              intersection: THREE.Intersection,
              event: MouseEvent | TouchEvent
            ) => {
              onClickCallback && (
                onClickCallback(clickData, model, intersection, event)
              )
            }
          });
          RaycasterTouch({
            model,
            camera,
            distance: touchDistance,
            callback: (
              intersection: THREE.Intersection,
              event: MouseEvent | TouchEvent
            ) => {
              onTouchCallback && (
                onTouchCallback(touchData, model, intersection, event)
              )
            }
          });
        }
      )

      loadPromises.push(objectLoader)
    }
  )

  // Função de render
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
  }

  // Executando renderização
  // Aguarda todos os objetos serem carregados
  Promise.all(loadPromises).then(
    () => {
      if (onLoadComplete) {
        onLoadComplete();
      }

      render()
    }
  )

  // Retorno das definições
  return {
    canvas,
    renderer,
    scene,
    camera,
    light,
    objectLoaded
  }
}
