const components = {
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg",
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: "contained",
      color: "primary",
    },

    styleOverrides: {
      root: {
        borderRadius: 10,
        textTransform: "none",
        padding: "0.9rem 1.4rem",
        minWidth: "unset",
        boxShadow: "none",
        transition: "all 0.25s ease",
      },

      contained: {
        "&:hover": {
          boxShadow: "none",
          transform: "translateY(-1px)",
        },

        "&:active": {
          transform: "translateY(0)",
        },
      },

      outlined: {
        borderColor: "rgba(17, 59, 103, 0.22)",

        "&:hover": {
          borderColor: "#113b67",
          backgroundColor: "rgba(17, 59, 103, 0.04)",
        },
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 18,
        backgroundColor: "#ffffff",
        border: "1px solid rgba(20, 37, 61, 0.08)",
        boxShadow: "0 8px 30px rgba(17, 34, 56, 0.04)",
        backgroundImage: "none",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 18,
        backgroundColor: "#ffffff",
        border: "1px solid rgba(20, 37, 61, 0.08)",
        boxShadow: "0 10px 30px rgba(17, 34, 56, 0.05)",
        backgroundImage: "none",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      },
    },

    variants: [
      {
        props: { variant: "projectCard" },
        style: {
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "rgba(17, 59, 103, 0.16)",
            boxShadow: "0 16px 40px rgba(17, 34, 56, 0.08)",
          },
        },
      },
      {
        props: { variant: "flat" },
        style: {
          boxShadow: "none",
        },
      },
    ],
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "rgba(247, 246, 243, 0.88)",
        color: "#14253d",
        boxShadow: "none",
        borderBottom: "1px solid rgba(20, 37, 61, 0.08)",
        backdropFilter: "blur(10px)",
      },
    },
  },

  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 72,
      },
    },
  },

  MuiLink: {
    styleOverrides: {
      root: {
        color: "inherit",
        textDecoration: "none",
        textUnderlineOffset: "0.18em",
        transition: "color 0.2s ease",

        "&:hover": {
          color: "#113b67",
          textDecoration: "underline",
        },
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: "rgba(20, 37, 61, 0.1)",
      },
    },
  },
};

export default components;
