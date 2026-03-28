import { MENU_PAGE } from "./queries";
import { wpFetch } from "./wpFetch";
import createDataTree from "@/functions/createDataTree";

export async function wpFetchAllMenuItems(name) {
  if (!name) return [];

  const data = await wpFetch(MENU_PAGE, { name }, "MENU_FETCH");

  const flat = data?.menu?.menuItems?.nodes || [];
  const tree = createDataTree(flat);

  return tree;
}
