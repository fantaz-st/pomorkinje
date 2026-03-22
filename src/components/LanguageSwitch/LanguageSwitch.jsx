"use client";

import { FormControl, MenuItem, Select } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { i18n } from "@/settings/i18n";
import { setLocalePref } from "@/functions/setLocalePref";
import { translatePathname } from "@/functions/translatePathname";

const NEWS_SEG = { en: "news", hr: "novosti" };

function normalizeSlashEnd(path) {
  return String(path || "").replace(/\/+$/, "/");
}

function hrefFromWpUri(uri, nextLocale) {
  const clean = normalizeSlashEnd(uri);
  if (!clean || clean === "/") return null;
  const prefixed = clean.startsWith("/hr/") || clean.startsWith("/en/");
  return prefixed ? clean : `/${nextLocale}${clean}`;
}

async function postJson(url, body) {
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    return await r.json();
  } catch {
    return null;
  }
}

export default function LanguageSwitch({ locale, size = "small", fullWidth = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const currentValue = locale || i18n.defaultLocale;

  const detectKind = () => {
    const segs = (pathname || "/").split("/").filter(Boolean);
    const hasLocale = i18n.locales.includes(segs[0]);
    const currentLocale = hasLocale ? segs[0] : currentValue;
    const rest = hasLocale ? segs.slice(1) : segs;

    if (!rest.length) return { type: "home" };

    if (rest[0] === "news" || rest[0] === "novosti") {
      if (rest.length >= 2) return { type: "post", slug: rest[1] };
      return { type: "newsIndex" };
    }

    return { type: "page", path: `/${currentLocale}/${rest.join("/")}/` };
  };

  const pushWithQuery = (href) => {
    const query = sp?.toString();
    router.push(query ? `${href}?${query}` : href);
  };

  const handleChange = async (e) => {
    const nextLocale = String(e.target.value || "");
    if (!nextLocale || nextLocale === currentValue) return;

    setLocalePref(nextLocale);

    const kind = detectKind();

    if (kind.type === "post") {
      const r = await postJson("/api/resolve-translation", {
        type: "post",
        slug: kind.slug,
        toLocale: nextLocale,
      });

      if (r?.ok && r?.slug) {
        pushWithQuery(`/${nextLocale}/${NEWS_SEG[nextLocale]}/${r.slug}/`);
        return;
      }
    }

    if (kind.type === "page") {
      const r = await postJson("/api/resolve-translation", {
        type: "page",
        path: kind.path,
        toLocale: nextLocale,
      });

      if (r?.ok && r?.uri) {
        const href = hrefFromWpUri(r.uri, nextLocale);
        if (href) {
          pushWithQuery(href);
          return;
        }
      }
    }

    pushWithQuery(translatePathname(pathname, nextLocale));
  };

  return (
    <FormControl size={size} fullWidth={fullWidth}>
      <Select
        value={currentValue}
        onChange={handleChange}
        variant="outlined"
        MenuProps={{
          disableScrollLock: true,
          PaperProps: {
            sx: {
              mt: 1,
              borderRadius: "14px",
              border: "1px solid rgba(20, 37, 61, 0.08)",
              boxShadow: "0 14px 36px rgba(17, 34, 56, 0.08)",
              "& .MuiMenuItem-root": {
                fontSize: "0.92rem",
                color: "#14253d",
                minHeight: 42,
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "rgba(17, 59, 103, 0.04)",
              },
              "& .MuiMenuItem-root.Mui-selected": {
                backgroundColor: "rgba(17, 59, 103, 0.08)",
                color: "#113b67",
              },
              "& .MuiMenuItem-root.Mui-selected:hover": {
                backgroundColor: "rgba(17, 59, 103, 0.1)",
              },
            },
          },
        }}
        sx={{
          minWidth: 88,
          height: size === "small" ? 36 : 40,
          borderRadius: "999px",
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          boxShadow: "0 6px 18px rgba(17, 34, 56, 0.04)",
          backdropFilter: "blur(8px)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(20, 37, 61, 0.08)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(17, 59, 103, 0.18)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#113b67",
            borderWidth: "1px",
          },
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "0 34px 0 14px !important",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#113b67",
          },
          "& .MuiSelect-icon": {
            color: "#113b67",
            right: 10,
          },
        }}
      >
        <MenuItem value="hr">HR</MenuItem>
        <MenuItem value="en">EN</MenuItem>
      </Select>
    </FormControl>
  );
}
