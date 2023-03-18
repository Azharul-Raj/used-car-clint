import { Renderable, Toast, ValueFunction } from "react-hot-toast";

export type errorTypes={ message: Renderable | ValueFunction<Renderable, Toast>; }