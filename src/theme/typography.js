const typography = {
  fontFamily: "var(--font-body), system-ui, -apple-system, sans-serif",

  h1: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(3.3rem, 8vw, 6.5rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.035em",
    color: "#14253d",
    marginBottom: "0.28em",
  },

  h2: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
    lineHeight: 1,
    letterSpacing: "-0.03em",
    color: "#14253d",
    marginBottom: "0.32em",
  },

  h3: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(1.9rem, 3vw, 2.7rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.025em",
    color: "#14253d",
    marginBottom: "0.35em",
  },

  h4: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    color: "#14253d",
    marginBottom: "0.4em",
  },

  h5: {
    fontWeight: 600,
    fontSize: "1.05rem",
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    color: "#14253d",
  },

  h6: {
    fontWeight: 600,
    fontSize: "0.95rem",
    lineHeight: 1.3,
    letterSpacing: "0.01em",
    color: "#14253d",
  },

  body1: {
    fontSize: "1.05rem",
    lineHeight: 1.75,
    letterSpacing: "-0.01em",
    color: "#405065",
  },

  body2: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    letterSpacing: "-0.01em",
    color: "#5f6f82",
  },

  subtitle1: {
    fontSize: "1.15rem",
    lineHeight: 1.6,
    letterSpacing: "-0.01em",
    color: "#2f3e52",
  },

  subtitle2: {
    fontSize: "0.9rem",
    lineHeight: 1.5,
    fontWeight: 500,
    letterSpacing: "0.01em",
    color: "#6f7d8d",
  },

  overline: {
    fontWeight: 600,
    fontSize: "0.78rem",
    lineHeight: 1.4,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#6f7d8d",
  },

  caption: {
    fontSize: "0.82rem",
    lineHeight: 1.5,
    color: "#7a8796",
  },

  button: {
    fontWeight: 600,
    fontSize: "0.96rem",
    textTransform: "none",
    letterSpacing: "-0.01em",
  },

  display: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(4rem, 10vw, 8rem)",
    lineHeight: 0.9,
    letterSpacing: "-0.045em",
    color: "#14253d",
  },

  muted: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#6f7d8d",
  },

  accent: {
    fontSize: "inherit",
    lineHeight: "inherit",
    fontFamily: "inherit",
    color: "#113b67",
    fontWeight: 600,
  },
};

export default typography;
