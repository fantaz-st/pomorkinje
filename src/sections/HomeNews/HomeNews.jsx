"use client";

import classes from "./HomeNews.module.css";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import PostCard from "@/components/PostCard/PostCard";

const content = {
  hr: {
    eyebrow: "Bilten i novosti",
    title: "Najnovije objave",
    intro: "Pratite vijesti, objave, aktivnosti i sadržaje povezane s projektom Pomorkinje 4.0.",
    cta: "Sve objave",
    href: "/hr/novosti",
  },
  en: {
    eyebrow: "Bulletin and News",
    title: "Latest posts",
    intro: "Follow news, updates, activities and project-related content from Pomorkinje 4.0.",
    cta: "All posts",
    href: "/en/news",
  },
};

export default function HomeNews({ data, locale = "hr" }) {
  const t = content[locale] || content.hr;
  const posts = data?.posts?.nodes || [];

  if (!posts.length) return null;

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

          <Typography variant="body1" className={classes.intro}>
            {t.intro}
          </Typography>

          <Box className={classes.actions}>
            <Button component={Link} href={t.href} variant="outlined">
              {t.cta}
            </Button>
          </Box>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {posts.slice(0, 6).map((post, index) => (
            <Grid key={post.id || post.slug} size={{ xs: 12, sm: 6, lg: 4 }} data-aos="fade-up" data-aos-delay={index * 100}>
              <Box className={classes.item}>
                <PostCard slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} locale={locale} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
