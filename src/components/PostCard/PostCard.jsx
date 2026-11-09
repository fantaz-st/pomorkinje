"use client";

import Link from "next/link";
import { Typography, Card, CardActionArea, CardContent, Box } from "@mui/material";
import dayjs from "dayjs";
import classes from "./PostCard.module.css";

export default function PostCard({ slug, title, date, excerpt, locale = "hr" }) {
  const base = locale === "hr" ? "/hr/novosti" : "/en/news";

  const cleanExcerpt = excerpt
    ?.replace(/<[^>]+>/g, "")
    ?.replace(/&hellip;/g, "...")
    ?.trim();

  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea component={Link} href={`${base}/${slug}`} className={classes.action}>
        <CardContent className={classes.content}>
          <Box className={classes.top}>
            <Typography variant="caption" className={classes.date}>
              {date ? dayjs(date).format(locale === "hr" ? "D. M. YYYY." : "D MMM YYYY") : ""}
            </Typography>
          </Box>

          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>

          {cleanExcerpt ? (
            <Typography variant="body2" className={classes.excerpt}>
              {cleanExcerpt}
            </Typography>
          ) : null}

          <Typography component="span" className={classes.readMore}>
            {locale === "hr" ? "Pročitaj više" : "Read more"}
            <span className={classes.arrow}>→</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
