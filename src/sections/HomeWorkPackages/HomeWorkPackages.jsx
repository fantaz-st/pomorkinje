"use client";

import Link from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import DirectionsBoatRoundedIcon from "@mui/icons-material/DirectionsBoatRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import classes from "./HomeWorkPackages.module.css";

const content = {
  hr: {
    eyebrow: "Radni paketi",
    title: "Odaberite radni paket",
    items: [
      {
        key: "WP1",
        title: "Ergonomija",
        text: "Analiza brodske opreme iz spolne perspektive i istraživanje stvarnih uvjeta rada žena u pomorstvu.",
        href: "/hr/wp/ergonomija",
        icon: <DirectionsBoatRoundedIcon />,
      },
      {
        key: "WP2",
        title: "Sigurnost",
        text: "Razvoj pristupa i digitalnih alata za prijavu neprimjerenih situacija te jačanje sigurnosti na brodu.",
        href: "/hr/wp/sigurnost",
        icon: <ShieldRoundedIcon />,
      },
      {
        key: "WP3",
        title: "Bilten",
        text: "Objave, vijesti, tekstovi i češći sadržaji povezani s projektom i temom žena u pomorstvu.",
        href: "/hr/wp/bilten",
        icon: <ArticleRoundedIcon />,
      },
      {
        key: "WP4",
        title: "Udruga Pomorkinje",
        text: "Osnivanje udruge Pomorkinje RH radi dugoročne institucionalne održivosti rezultata projekta.",
        href: "/hr/wp/udruga-pomorkinje",
        icon: <Groups2RoundedIcon />,
      },
    ],
  },

  en: {
    eyebrow: "Work Packages",
    title: "Choose a work package",
    items: [
      {
        key: "WP1",
        title: "Ergonomics",
        text: "Analysis of ship equipment from a gender perspective and research into the real working conditions of women in maritime affairs.",
        href: "/en/wp/ergonomics",
        icon: <DirectionsBoatRoundedIcon />,
      },
      {
        key: "WP2",
        title: "Safety",
        text: "Development of approaches and digital tools for reporting inappropriate situations and strengthening safety on board.",
        href: "/en/wp/safety",
        icon: <ShieldRoundedIcon />,
      },
      {
        key: "WP3",
        title: "Bulletin",
        text: "Articles, news and more frequent project-related content focused on women in maritime affairs.",
        href: "/en/wp/bulletin",
        icon: <ArticleRoundedIcon />,
      },
      {
        key: "WP4",
        title: "Pomorkinje Association",
        text: "Establishment of the Pomorkinje RH association for the long-term institutional sustainability of project results.",
        href: "/en/wp/pomorkinje-association",
        icon: <Groups2RoundedIcon />,
      },
    ],
  },
};

export default function HomeWorkPackages({ locale = "hr" }) {
  const t = content[locale] || content.hr;

  return (
    <section className={classes.wrap}>
      <Container>
        <Box className={classes.head} data-aos="fade-up">
          <Typography variant="overline" className={classes.eyebrow}>
            {t.eyebrow}
          </Typography>

          <Typography variant="h2" className={classes.title}>
            {t.title}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {t.items.map((item, i) => (
            <Grid key={item.key} size={{ xs: 12, sm: 6, lg: 3 }} data-aos="fade-up" data-aos-delay={i * 100}>
              <Link href={item.href} className={classes.cardLink}>
                <Box className={classes.card}>
                  <Box className={classes.cardTop}>
                    <Typography variant="caption" className={classes.key}>
                      {item.key}
                    </Typography>

                    <Box className={classes.iconWrap}>{item.icon}</Box>
                  </Box>

                  <Box className={classes.cardBody}>
                    <Typography variant="h4" className={classes.cardTitle}>
                      {item.title}
                    </Typography>

                    <Typography variant="body2" className={classes.cardText}>
                      {item.text}
                    </Typography>
                  </Box>

                  <Box className={classes.cardBottom}>
                    <span className={classes.more}>{locale === "hr" ? "Saznajte više" : "Learn more"}</span>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
