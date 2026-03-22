"use client";

import Link from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import classes from "./Hero.module.css";

const content = {
  en: {
    overline: "Project",
    title: "Pomorkinje",
    accent: "4.0",
    subtitle: "Equality, technology and the sea",
    text: "An interdisciplinary project focused on improving the position of women in maritime affairs through research, digital tools and social engagement.",
    cta1: {
      href: "/en/about-project",
      label: "Learn more",
    },
    meta: [
      { label: "Coordinator", value: "Faculty of Maritime Studies, University of Split" },
      { label: "Duration", value: "2025 — 2029" },
      { label: "Funding", value: "NPOO" },
    ],
  },
  hr: {
    overline: "Projekt",
    title: "Pomorkinje",
    accent: "4.0",
    subtitle: "Jednakost, tehnologija i more",
    text: "Interdisciplinarni projekt usmjeren na unapređenje položaja žena u pomorstvu kroz istraživanje, razvoj digitalnih alata i društvenu angažiranost.",
    cta1: {
      href: "/hr/o-projektu",
      label: "Saznaj više",
    },
    meta: [
      { label: "Koordinator", value: "Pomorski fakultet, Sveučilište u Splitu" },
      { label: "Trajanje", value: "2025 — 2029" },
      { label: "Financiranje", value: "NPOO" },
    ],
  },
};

export default function Hero({ locale = "hr" }) {
  const t = content[locale] || content.hr;

  return (
    <Box className={classes.hero}>
      <div className={classes.bgMark} aria-hidden="true">
        <Image src={locale === "hr" ? "/logo-footer-hr.png" : "/logo-footer-en.png"} alt="" fill sizes="50vw" className={classes.bgMarkImg} />
      </div>

      <div className={classes.wave} aria-hidden="true" />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, md: 10, lg: 9 }}>
            <Stack spacing={2.5} alignItems="center" textAlign="center" className={classes.main}>
              <Typography variant="overline" className={classes.overline} data-aos="fade-up">
                {t.overline}
              </Typography>

              <Typography variant="display" className={classes.title} data-aos="fade-up" data-aos-delay="50">
                {t.title} <span className={classes.accent}>{t.accent}</span>
              </Typography>

              <Typography variant="h3" className={classes.subtitle} data-aos="fade-up" data-aos-delay="100">
                {t.subtitle}
              </Typography>

              <Typography variant="body1" className={classes.text} data-aos="fade-up" data-aos-delay="150">
                {t.text}
              </Typography>

              <Box className={classes.buttons} data-aos="fade-up" data-aos-delay="200">
                <Button component={Link} href={t.cta1.href} variant="contained">
                  {t.cta1.label} →
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box className={classes.metaWrap} data-aos="fade-up" data-aos-delay="260">
          <Grid container spacing={0}>
            {t.meta.map((item, index) => (
              <Grid key={item.label} size={{ xs: 12, md: 4 }}>
                <Stack spacing={0.5} alignItems="center" textAlign="center" className={`${classes.metaItem} ${index !== t.meta.length - 1 ? classes.metaItemBorder : ""}`}>
                  <Typography variant="caption" className={classes.metaLabel}>
                    {item.label}
                  </Typography>

                  <Typography variant="body2" className={classes.metaValue}>
                    {item.value}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
