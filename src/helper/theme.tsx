import { createTheme } from "@mantine/core";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Space Grotesk, sans-serif", fontWeight: "700" },
  primaryColor: "mossGreen",
  colors: {
    mossGreen: [
      "#f0f9ec",
      "#d7f0c8",
      "#bce6a2",
      "#a0dd7c",
      "#8ad35c",
      "#7AC74F",
      "#66b33e",
      "#529f2f",
      "#3d7f20",
      "#2a5c14",
    ],
    deepGreen: [
      "#eaf2e0",
      "#c8ddaa",
      "#a5c874",
      "#82b348",
      "#5f9e26",
      "#386C0B",
      "#2f5b09",
      "#264a07",
      "#1d3905",
      "#142803",
    ],
    blueSlate: [
      "#eef0f5",
      "#d7dbe6",
      "#b3bcd1",
      "#8f9bbc",
      "#7784a8",
      "#5C6784",
      "#4f5870",
      "#40485c",
      "#303647",
      "#1f2530",
    ],
    dark: [
      "#c9c9c9",
      "#a3a3a3",
      "#7d7d7d",
      "#575757",
      "#414141",
      "#2e2e2e",
      "#262626",
      "#000000",
      "#141414",
      "#0a0a0a",
    ],
  },
});

export default theme;
