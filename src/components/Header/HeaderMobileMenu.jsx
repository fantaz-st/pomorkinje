"use client";

import classes from "./Header.module.css";
import { IconButton, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HeaderLogo from "./HeaderLogo";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useMobileMenu } from "@/hooks/useMobileMenu";

const HeaderMobileMenu = ({ menuItems = [], locale = "hr", siteName = "Pomorkinje 4.0", logo = true }) => {
  const { open, expanded, openDrawer, closeDrawer, toggleExpand } = useMobileMenu();
  const homeHref = locale === "hr" ? "/hr" : "/en";

  return (
    <div className={classes.menuMobile}>
      <IconButton onClick={openDrawer} className={classes.iconBtn} aria-label="Open menu">
        <MenuIcon color="primary" />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={closeDrawer} PaperProps={{ className: classes.drawerPaper }}>
        <div className={classes.drawer}>
          <div className={classes.drawerTop}>
            <div className={classes.drawerBrand}>
              <HeaderLogo locale={locale} siteName={siteName} logo={logo} onClick={closeDrawer} />
            </div>

            <IconButton onClick={closeDrawer} aria-label="Close menu" className={classes.iconBtn}>
              <CloseIcon color="primary" />
            </IconButton>
          </div>

          <div className={classes.drawerNav}>
            {menuItems.map((item) => {
              const children = item.childNodes || item.children || [];
              const hasChildren = children.length > 0;
              const isOpen = !!expanded[item.databaseId];

              return (
                <div key={item.databaseId} className={classes.drawerItem}>
                  <div className={classes.drawerRow}>
                    <Link href={item.uri || homeHref} className={classes.drawerLink} onClick={closeDrawer}>
                      <Typography variant="nav" color="text.primary" component="span">
                        {item.label}
                      </Typography>
                    </Link>

                    {hasChildren && (
                      <button type="button" className={`${classes.expandBtn} ${isOpen ? classes.expandBtnOpen : ""}`} onClick={() => toggleExpand(item.databaseId)}>
                        <KeyboardArrowDownIcon color="primary" />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div className={`${classes.drawerSub} ${isOpen ? classes.drawerSubOpen : ""}`}>
                      {children.map((child) => (
                        <Link key={child.databaseId} href={child.uri} className={classes.drawerSubLink} onClick={closeDrawer}>
                          <Typography variant="body2" color="text.secondary" component="span">
                            {child.label}
                          </Typography>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className={classes.drawerBottom}>
            <LanguageSwitch locale={locale} fullWidth />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderMobileMenu;
