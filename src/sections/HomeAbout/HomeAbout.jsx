"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import classes from "./HomeAbout.module.css";

const content = {
  hr: {
    eyebrow: "O projektu",
    title: "Projekt Pomorkinje 4.0",
    lead: 'Projekt "Pomorkinje 4.0 – jednakost, tehnologija i more" usmjeren je na unapređenje položaja žena u pomorstvu kroz istraživanje, digitalne alate i društvenu angažiranost.',
    blocks: [
      {
        title: "Polazište",
        text: "Žene čine manje od 2% brodske posade u svijetu, a njihovi uvjeti rada, sigurnost i vidljivost u sektoru i dalje su nedovoljno istraženi.",
      },
      {
        title: "Pristup",
        text: "Projekt povezuje znanstveno istraživanje, obradu podataka, razvoj digitalnih rješenja i javnu diseminaciju kako bi odgovorio na stvarne potrebe žena u pomorstvu.",
      },
      {
        title: "Cilj",
        text: "Kroz četiri radna paketa projekt stvara temelje za dugoročan znanstveni, društveni i institucionalni učinak.",
      },
    ],
  },

  en: {
    eyebrow: "About the Project",
    title: "The Pomorkinje 4.0 Project",
    lead: 'The project "Pomorkinje 4.0 – equality, technology and the sea" focuses on improving the position of women in maritime affairs through research, digital tools and social engagement.',
    blocks: [
      {
        title: "Starting Point",
        text: "Women make up less than 2% of ship crews worldwide, while their working conditions, safety and visibility in the sector remain insufficiently researched.",
      },
      {
        title: "Approach",
        text: "The project combines scientific research, data processing, digital solution development and public dissemination to address the real needs of women in maritime affairs.",
      },
      {
        title: "Goal",
        text: "Through four work packages, the project creates the basis for long-term scientific, social and institutional impact.",
      },
    ],
  },
};

export default function HomeAbout({ locale = "hr" }) {
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

          <Typography variant="body1" className={classes.lead}>
            {t.lead}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {t.blocks.map((block, index) => (
            <Grid key={block.title} size={{ xs: 12, md: 4 }} data-aos="fade-up" data-aos-delay={index * 100}>
              <Box className={classes.card}>
                <Typography variant="h4" className={classes.cardTitle}>
                  {block.title}
                </Typography>

                <Typography variant="body2" className={classes.cardText}>
                  {block.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
