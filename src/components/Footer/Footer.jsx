"use client";

import site from "@/settings/site";
import classes from "./Footer.module.css";
import Link from "next/link";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import Image from "next/image";

export default function Footer({ menuItems = [], locale = "hr" }) {
  const topLevelLinks = menuItems || [];
  const externalLinks = site.footer?.links || [];
  const logoSrc = locale === "hr" ? "/LOGO hrvatski.svg" : "/LOGO engleski.svg";

  return (
    <Box component="footer" className={classes.wrap}>
      <Container maxWidth="lg">
        <Paper
          variant="header"
          elevation={0}
          sx={{
            borderRadius: { xs: "24px", md: "32px" },
            overflow: "hidden",
          }}
        >
          <Box px={{ xs: 2, md: 3 }} py={{ xs: 2, md: 3 }}>
            <Grid container spacing={{ xs: 4, md: 5 }} alignItems="start">
              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Stack spacing={2.25}>
                  <Box className={classes.brandRow}>
                    <Box className={classes.brandTop}>
                      <Image src={logoSrc} alt={site.name} fill sizes="(max-width: 600px) 72px, 90px" className={classes.logo} />
                    </Box>

                    <Typography variant="body1" color="text.secondary">
                      {site.footer?.summary?.text?.[locale]}
                    </Typography>
                  </Box>

                  <Box className={classes.euLogos}>
                    <Image src={locale === "hr" ? "/images/funded-eu-hr.svg" : "/images/funded-eu-en.svg"} alt="EU" width={120} height={24} className={classes.euLogo} />
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, md: 3, lg: 3 }}>
                <Stack spacing={1.25}>
                  <Typography variant="overline" color="secondary.main">
                    {locale === "hr" ? "Projekt" : "Project"}
                  </Typography>

                  <div className={classes.colLinks}>
                    {topLevelLinks.map((item) => (
                      <Link key={item.databaseId} href={item.uri} className={classes.link}>
                        <Typography variant="body2" color="text.secondary" component="span">
                          {item.label}
                        </Typography>
                      </Link>
                    ))}
                  </div>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, md: 3, lg: 3 }}>
                <Stack spacing={1.25}>
                  <Typography variant="overline" color="secondary.main">
                    {locale === "hr" ? "Poveznice" : "Links"}
                  </Typography>

                  <div className={classes.colLinks}>
                    {externalLinks.map((item, index) => (
                      <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={classes.link}>
                        <Typography variant="body2" color="text.secondary" component="span">
                          {item.label}
                        </Typography>
                      </a>
                    ))}
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box
            px={{ xs: 2, md: 3 }}
            py={{ xs: 1.5, md: 2 }}
            borderTop={1}
            borderColor="divider"
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            gap={1}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} {locale === "hr" ? site.footer?.copyright?.owner?.hr : site.footer?.copyright?.owner?.en}.{" "}
              {locale === "hr" ? "Sva prava pridržana." : "All rights reserved."}
            </Typography>

            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
              <Link href={locale === "hr" ? "/hr/politika-privatnosti" : "/en/privacy-policy"} className={classes.bottomLink}>
                <Typography variant="body2" color="text.secondary" component="span">
                  {locale === "hr" ? "Politika privatnosti" : "Privacy Policy"}
                </Typography>
              </Link>

              <Link href={locale === "hr" ? "/hr/impressum" : "/en/imprint"} className={classes.bottomLink}>
                <Typography variant="body2" color="text.secondary" component="span">
                  {locale === "hr" ? "Impressum" : "Imprint"}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
