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
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={closeDrawer} PaperProps={{ className: classes.drawerPaper }}>
        <div className={classes.drawer}>
          <div className={classes.drawerTop}>
            <div className={classes.drawerBrand}>
              <HeaderLogo locale={locale} siteName={siteName} logo={logo} onClick={closeDrawer} />
            </div>

            <IconButton onClick={closeDrawer} aria-label="Close menu">
              <CloseIcon />
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
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <button type="button" className={`${classes.expandBtn} ${isOpen ? classes.expandBtnOpen : ""}`} onClick={() => toggleExpand(item.databaseId)}>
                        <KeyboardArrowDownIcon />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div className={`${classes.drawerSub} ${isOpen ? classes.drawerSubOpen : ""}`}>
                      {children.map((child) => (
                        <Link key={child.databaseId} href={child.uri} className={classes.drawerSubLink} onClick={closeDrawer}>
                          {child.label}
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
