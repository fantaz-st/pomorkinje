import site from "@/settings/site";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieNotice from "@/components/CookieNotice/CookieNotice";
import { wpFetchAllMenuItems } from "@/lib/wpFetchAllMenuItems";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const menuName = site.menu?.[locale] || site.menu?.hr || site.menu;

  const menuItems = await wpFetchAllMenuItems(menuName);

  return (
    <div className="layout">
      <Header menuItems={menuItems} locale={locale} />
      <main className="content">{children}</main>
      <CookieNotice locale={locale} />
      <Footer menuItems={menuItems} locale={locale} />
    </div>
  );
}
