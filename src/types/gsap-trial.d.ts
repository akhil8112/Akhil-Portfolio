declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | Element | Element[] | NodeList,
      vars?: Record<string, any>
    );
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }

  export default SplitText;
}