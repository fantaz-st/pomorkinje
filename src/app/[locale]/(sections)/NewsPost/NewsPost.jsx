import { wpFetch } from "@/lib/wpFetch";
import { POST_BY_SLUG } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Box, Button, Container, Typography } from "@mui/material";
import BlockRenderer from "@/components/BlockRenderer/BlockRenderer";
import Image from "next/image";
import Link from "next/link";
import classes from "./NewsPost.module.css";
import { wpLangFromLocale } from "@/lib/lang";
import { fmtDate } from "@/functions/date";

export const revalidate = 300;

export default async function NewsPost({ params, backHref, backLabel }) {
  const { slug, locale } = await params;

  const data = await wpFetch(POST_BY_SLUG, {
    slug,
    lang: wpLangFromLocale(locale),
  });

  const post = data?.posts?.nodes?.[0];
  if (!post) return notFound();

  const blocks = Array.isArray(post.blocks) ? post.blocks : typeof post.blocks === "string" ? JSON.parse(post.blocks) : [];

  return (
    <Container className={classes.container}>
      <div className={classes.top}>
        <Link href={backHref} className={classes.backLink}>
          <Button variant="outlined" className={classes.backBtn}>
            ← {backLabel}
          </Button>
        </Link>
      </div>

      <header className={classes.header}>
        <Typography variant="h1" className={classes.title} data-aos="fade-up">
          {post.title}
        </Typography>

        {post.date ? (
          <Typography variant="caption" className={classes.date} data-aos="fade-up" data-aos-delay="80">
            {fmtDate(post.date, locale)}
          </Typography>
        ) : null}
      </header>

      {post.featuredImage?.node?.sourceUrl ? (
        <Box className={classes.hero} data-aos="fade-up" data-aos-delay="140">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            sizes="(min-width: 1200px) 1100px, 92vw"
            className={classes.heroImg}
            priority
          />
        </Box>
      ) : null}

      <div className={classes.content} data-aos="fade-up" data-aos-delay={post.featuredImage?.node?.sourceUrl ? "200" : "120"}>
        {blocks.map((block, i) => (
          <BlockRenderer block={block} key={block?.clientId || i} />
        ))}
      </div>
    </Container>
  );
}
