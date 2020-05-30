import styledBreakpoint from "@humblebee/styled-components-breakpoint";

export const DARK_PURPLE = "#3D0D99";
export const BRIGHT_PURPLE = "#6415FF";
export const LIGHT_PURPLE = "#EBE1FF";
export const HIGHLIGHT_YELLOW = "#FFEB3B";
export const RED = "#FF0054";
export const DARK_YELLOW = "#FFBD00";
export const LIGHT_GRAY = "#DDDDDD";
export const MEDIUM_GRAY = "#C4C4C4";
export const DARK_GRAY = "#4E545C";
export const BACKGROUND_WHITE = "#E5E5E5";
export const WHITE = "#FFFFFF";
export const BLACK = "#000000";

export const BUTTON_SHADOW = "0px 4px 4px 0px rgba(0,0,0,0.25)";
export const BOX_SHADOW = "0px 24px 48px 0px rgba(176,176,176,0.28)";

export const BREAKPOINTS = {
  xxs: 0,
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

export const breakpoint = styledBreakpoint(BREAKPOINTS);
