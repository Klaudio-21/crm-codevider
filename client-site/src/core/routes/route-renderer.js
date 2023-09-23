import { useRoutes } from "react-router";
import routesConfig from "./route-config"
const RouteRenderer = () => {
    const routes = useRoutes(routesConfig);
    return routes;
};
export default RouteRenderer;