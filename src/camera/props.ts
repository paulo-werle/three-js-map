import { Coordinates } from "../props";

export interface CameraProps {
  cameraPosition?: Coordinates;
  aspect?: number;
  near?: number;
  fov?: number;
  far?: number;
}