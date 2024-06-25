import * as THREE from 'three';

import { MapLoaderProps, ObjectLoaderProps } from './loader/props';
import { GridHelperProps, HelperProps } from './helper/props';
import { RaycasterProps } from './raycaster/props';
import { ControlProps } from './control/props';
import { RenderProps } from './render/props';
import { CameraProps } from './camera/props';
import { CanvaProps } from "./canva/props";
import { LightProps } from './light/props';
import { SceneProps } from './scene/props';

export interface Coordinates {
  x: number;
  y: number;
  z: number;
}

export interface Object {
  position: Coordinates;
  path: ObjectLoaderProps['path']
  scale: ObjectLoaderProps['scale']
  onLoadCallback?: ObjectLoaderProps['onLoadCallback']
  onProgressCallback?: ObjectLoaderProps['onProgressCallback']
  onErrorCallback?: ObjectLoaderProps['onErrorCallback']
  hoverDistance?: RaycasterProps['distance']
  clickDistance?: RaycasterProps['distance']
  touchDistance?: RaycasterProps['distance']
  hoverData?: any
  clickData?: any
  touchData?: any
  onHoverCallback?: (
    data: any,
    model: THREE.Object3D,
    intersection: THREE.Intersection,
    event: MouseEvent | TouchEvent
  ) => void;
  onClickCallback?: (
    data: any,
    model: THREE.Object3D,
    intersection: THREE.Intersection,
    event: MouseEvent | TouchEvent
  ) => void;
  onTouchCallback?: (
    data: any,
    model: THREE.Object3D,
    intersection: THREE.Intersection,
    event: MouseEvent | TouchEvent
  ) => void;
}

export interface ThreeJs3DMapProps {
  elementID?: CanvaProps['elementID']
  development?: boolean,
  objects?: Object[],
  onLoadComplete?: () => void,
  container?: {
    width?: RenderProps['width']
    height?: RenderProps['height']
    background?: SceneProps['background']
    cameraPosition?: CameraProps['cameraPosition']
    aspect?: CameraProps['aspect']
    near?: CameraProps['near']
    fov?: CameraProps['fov']
    far?: CameraProps['far']
  }
  control: {
    minDistance: ControlProps['minDistance']
    maxDistance: ControlProps['maxDistance']
    cameraLook?: ControlProps['cameraLook']
    minPan: ControlProps['minPan']
    maxPan: ControlProps['maxPan']
  }
  light: {
    color: LightProps['color']
    position: LightProps['position']
    intensity: LightProps['intensity']
  }
  helper: {
    size: HelperProps['size']
    colorCenterLine?: GridHelperProps['colorCenterLine']
    colorGrid?: GridHelperProps['colorGrid']
  }
  map: {
    path: MapLoaderProps['path']
    scale?: MapLoaderProps['scale']
    onLoadCallback?: MapLoaderProps['onLoadCallback']
    onProgressCallback?: MapLoaderProps['onProgressCallback']
    onErrorCallback?: MapLoaderProps['onErrorCallback']
  }
}