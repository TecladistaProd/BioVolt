import "styled-components";
import theme from "../style/theme";

type TTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
