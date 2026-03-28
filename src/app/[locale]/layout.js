import site from "@/settings/site";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieNotice from "@/components/CookieNotice/CookieNotice";
import { wpFetchAllMenuItems } from "@/lib/wpFetchAllMenuItems";

async function getMenuItems(locale) {
  const menuName = site.menu?.[locale] || site.menu?.hr || site.menu;
  return wpFetchAllMenuItems(menuName);
}

export const revalidate = 300;

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const menuItems = await getMenuItems(locale);

  return (
    <div className="layout">
      <Header menuItems={menuItems} locale={locale} />
      <main className="content">{children}</main>
      <CookieNotice locale={locale} />
      <Footer menuItems={menuItems} locale={locale} />
    </div>
  );
}
