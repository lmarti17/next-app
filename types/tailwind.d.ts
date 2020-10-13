declare module "tailwindcss/resolveConfig" {
  import { DefaultTheme } from "styled-components";
  type ResolveFn = (tailwindConfig: unknown) => { theme: DefaultTheme };
  export default resolveConfig as ResolveFn;
}
