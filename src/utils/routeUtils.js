import { privateRoutes } from "../routes/routeConfig";

export const getPageTitle = (pathName) => {
   const route = privateRoutes.find(route => route.to == pathName);
   return route?.title || "";
}