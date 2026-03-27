import classes from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderDesktopNav from "./HeaderDesktopNav";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderScrollController from "./HeaderScrollController";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const Header = ({ menuItems = [], locale = "hr", siteName = "Pomorkinje 4.0", logo = true }) => {
  return (
    <HeaderScrollController>
      <header className={classes.header} data-header-root>
        <div className={classes.shell}>
          <div className={classes.inner}>
            <div className={classes.logo}>
              <HeaderLogo locale={locale} siteName={siteName} logo={logo} />
            </div>

            <HeaderDesktopNav menuItems={menuItems} />

            <div className={classes.right}>
              <div className={classes.switchWrap}>
                <LanguageSwitch locale={locale} size="small" />
              </div>

              <HeaderMobileMenu menuItems={menuItems} locale={locale} siteName={siteName} logo={logo} />
            </div>
          </div>
        </div>
      </header>
    </HeaderScrollController>
  );
};

export default Header;
