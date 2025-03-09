import { SplashCursor } from "@/components/ui/splash-cursor"

interface PointerPrototype {
  id: number;
  texcoordX: number;
  texcoordY: number;
  prevTexcoordX: number;
}

function pointerPrototype(): PointerPrototype {
  return {
    id: -1,
    texcoordX: 0,
    texcoordY: 0,
    prevTexcoordX: 0,
  };
}

export default pointerPrototype;

export function NoiseDemo() {
  return (
    <SplashCursor />
  )
}