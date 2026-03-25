import classes from "./Header.module.css";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ locale = "hr", siteName = "Pomorkinje 4.0", logo = true, onClick }) => {
  const homeHref = locale === "hr" ? "/hr" : "/en";
  const logoSrc = locale === "hr" ? "/LOGO hrvatski-horizontal.svg" : "/LOGO engleski-horizontal.svg";

  return (
    <Link href={homeHref} className={classes.logoLink} onClick={onClick} aria-label={siteName}>
      {logo ? (
        <div className={classes.logoMedia}>
          <Image src={logoSrc} fill alt={siteName} className={classes.logoImage} sizes="(max-width: 600px) 70px, (max-width: 1200px) 80px, 90px" loading="eager" />
        </div>
      ) : (
        <Typography variant="h5" className={classes.logoText}>
          {siteName}
        </Typography>
      )}
    </Link>
  );
};

export default HeaderLogo;
