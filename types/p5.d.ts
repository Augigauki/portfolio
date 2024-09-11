// types/p5.d.ts
import * as p5 from 'p5';

declare module 'p5' {
  interface Font {
    textBounds(txt: string, x: number, y: number, fontSize?: number, options?: any): {
      x: number;
      y: number;
      w: number;
      h: number;
      advance: number;
    };
  }
}
