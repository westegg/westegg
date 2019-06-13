const blue = "#3c58e8"

export const aStyles = {
  color: "text",
  textDecoration: "none",
  paddingBottom: "1px !important",
  borderBottom: "1px solid #333 !important",
  "&:hover": {
    color: "text",
    paddingBottom: "0px",
    borderBottom: "2px solid #000 !important"
  }
}

export default {
  colors: {
    blue,
    text: "#000",
    background: "#fff",
    link: blue,
    primary: blue,
    secondary: "#444",
    muted: "#888",
    highlight: "tomato"
  },
  fonts: {
    body: "system-ui, sans-serif"
  },
  lineHeights: {
    body: 1.5
  },
  styles: {
    a: aStyles,
    p: {
      a: aStyles
    },
    img: {
      maxWidth: "100%"
    },
    pre: {
      text: "rebeccapurple",
      background: "#f6f3f9",
      overflowX: "scroll",
      p: 2
    },
    code: {
      text: "rebeccapurple",
      background: "#f6f3f9"
    }
  }
}
