"use client";

import site from "@/settings/site";
import classes from "./Footer.module.css";
import Link from "next/link";
import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";

export default function Footer({ menuItems = [], locale = "hr" }) {
  const topLevelLinks = menuItems || [];
  const externalLinks = site.footer?.links || [];

  const logoSrc = locale === "hr" ? "/LOGO hrvatski.svg" : "/LOGO engleski.svg";

  return (
    <footer className={classes.wrap}>
      <Container className={classes.container}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* BRAND */}
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Box className={classes.brand}>
              <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                <div className={classes.brandTop}>
                  <Image src={logoSrc} alt={site.name} fill sizes="(max-width: 600px) 70px, (max-width: 1200px) 80px, 90px" className={classes.logo} />
                </div>

                <Typography variant="body1" className={classes.brandText}>
                  {site.footer?.summary?.text?.[locale]}
                </Typography>
              </div>

              <div className={classes.euLogos}>
                <Image src={locale === "hr" ? "/images/funded-eu-hr.svg" : "/images/funded-eu-en.svg"} alt="EU" width={120} height={24} className={classes.euLogo} />
              </div>
            </Box>
          </Grid>

          {/* PROJECT LINKS */}
          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <Box className={classes.col}>
              <Typography variant="overline" className={classes.colTitle}>
                {locale === "hr" ? "Projekt" : "Project"}
              </Typography>

              <div className={classes.colLinks}>
                {topLevelLinks.map((item) => (
                  <Link key={item.databaseId} href={item.uri} className={classes.link}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </Box>
          </Grid>

          {/* EXTERNAL LINKS */}
          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <Box className={classes.col}>
              <Typography variant="overline" className={classes.colTitle}>
                {locale === "hr" ? "Poveznice" : "Links"}
              </Typography>

              <div className={classes.colLinks}>
                {externalLinks.map((item, index) => (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={classes.link}>
                    {item.label}
                  </a>
                ))}
              </div>
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM */}
        <div className={classes.bottom}>
          <Typography variant="body2" className={classes.copy}>
            © {new Date().getFullYear()} {locale === "hr" ? site.footer?.copyright?.owner?.hr : site.footer?.copyright?.owner?.en}.{" "}
            {locale === "hr" ? "Sva prava pridržana." : "All rights reserved."}
          </Typography>

          <div className={classes.bottomLinks}>
            <Link href={locale === "hr" ? "/hr/politika-privatnosti" : "/en/privacy-policy"} className={classes.bottomLink}>
              {locale === "hr" ? "Politika privatnosti" : "Privacy Policy"}
            </Link>

            <Link href={locale === "hr" ? "/hr/impressum" : "/en/imprint"} className={classes.bottomLink}>
              {locale === "hr" ? "Impressum" : "Imprint"}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
