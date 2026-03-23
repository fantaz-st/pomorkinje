import classes from "./Header.module.css";
import Link from "next/link";
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
              {item.label}
              {hasChildren && <KeyboardArrowDownIcon className={classes.arrow} />}
            </Link>

            {hasChildren && (
              <div className={classes.dropdown}>
                {children.map((child) => (
                  <Link key={child.databaseId} href={child.uri} className={classes.dropdownLink}>
                    {child.label}
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
