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
        borderRadius: 999,
        textTransform: "none",
        padding: "0.9rem 1.45rem",
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
        borderColor: "rgba(18, 59, 99, 0.18)",

        "&:hover": {
          borderColor: "#123b63",
          backgroundColor: "rgba(18, 59, 99, 0.04)",
        },
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.86)",
        border: "1px solid rgba(22, 50, 74, 0.08)",
        boxShadow: "0 10px 32px rgba(16, 37, 58, 0.05)",
        backgroundImage: "none",
        backdropFilter: "blur(10px)",
      },
    },

    variants: [
      {
        props: { variant: "header" },
        style: {
          backgroundColor: "rgba(247, 246, 243, 0.84)",
          border: "1px solid rgba(20, 37, 61, 0.08)",
          boxShadow: "0 10px 28px rgba(17, 34, 56, 0.05)",
          backdropFilter: "blur(12px)",
        },
      },
    ],
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        backgroundColor: "#ffffff",
        border: "1px solid rgba(22, 50, 74, 0.08)",
        boxShadow: "0 10px 30px rgba(16, 37, 58, 0.05)",
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
            borderColor: "rgba(15, 124, 130, 0.2)",
            boxShadow: "0 18px 42px rgba(16, 37, 58, 0.08)",
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
        backgroundColor: "rgba(244, 248, 248, 0.82)",
        color: "#16324a",
        boxShadow: "none",
        borderBottom: "1px solid rgba(22, 50, 74, 0.08)",
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
          color: "#0f7c82",
          textDecoration: "underline",
        },
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: "rgba(22, 50, 74, 0.1)",
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 999,
        backgroundColor: "rgba(255, 255, 255, 0.72)",
        boxShadow: "0 6px 18px rgba(17, 34, 56, 0.04)",
        backdropFilter: "blur(8px)",

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(22, 50, 74, 0.08)",
          borderRadius: 999,
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(18, 59, 99, 0.18)",
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#123b63",
          borderWidth: 1,
        },
      },
    },
  },

  MuiSelect: {
    styleOverrides: {
      select: {
        display: "flex",
        alignItems: "center",
        minHeight: "unset",
        padding: "0 34px 0 14px !important",
        fontSize: "0.82rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#123b63",
      },
      icon: {
        right: 10,
        color: "#123b63",
      },
    },
  },

  MuiMenu: {
    styleOverrides: {
      paper: {
        marginTop: 8,
        borderRadius: 14,
        border: "1px solid rgba(22, 50, 74, 0.08)",
        boxShadow: "0 14px 36px rgba(17, 34, 56, 0.08)",
        overflow: "hidden",
      },
      list: {
        padding: 6,
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        minHeight: 42,
        borderRadius: 10,
        fontSize: "0.92rem",
        fontWeight: 600,
        color: "#16324a",

        "&:hover": {
          backgroundColor: "rgba(18, 59, 99, 0.04)",
        },

        "&.Mui-selected": {
          backgroundColor: "rgba(18, 59, 99, 0.08)",
          color: "#123b63",
        },

        "&.Mui-selected:hover": {
          backgroundColor: "rgba(18, 59, 99, 0.12)",
        },
      },
    },
  },
};

export default components;
