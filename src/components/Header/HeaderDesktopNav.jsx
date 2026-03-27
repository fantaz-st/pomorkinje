import classes from "./Header.module.css";
import Link from "next/link";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeaderDesktopNav = ({ menuItems = [] }) => {
  return (
    <nav className={classes.menuDesktop}>
      {menuItems.map((item) => {
        const children = item.childNodes || item.children || [];
        const hasChildren = children.length > 0;

        return (
          <div key={item.databaseId} className={classes.menuItem}>
            <Link href={item.uri} className={classes.link}>
              <Typography variant="nav" color="text.primary" component="span">
                {item.label}
              </Typography>

              {hasChildren && <KeyboardArrowDownIcon className={classes.arrow} color="primary" />}
            </Link>

            {hasChildren && (
              <div className={classes.dropdown}>
                {children.map((child) => (
                  <Link key={child.databaseId} href={child.uri} className={classes.dropdownLink}>
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
    </nav>
  );
};

export default HeaderDesktopNav;
