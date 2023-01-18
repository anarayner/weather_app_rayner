import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AboutPage } from 'pages/AboutPage';
import { MapPage } from 'pages/MapPage';

export type AppRouteSProps = RouteProps

export enum AppRoutes {
    MAIN = 'main',
    CALENDAR = 'calendar',
    MAP = 'map',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CALENDAR]: '/calendar',
    [AppRoutes.MAP]: '/map',
    [AppRoutes.NOT_FOUND]: '/*',

};

// routes
export const routeConfig: Record<AppRoutes, AppRouteSProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CALENDAR]: {
        path: RoutePath.calendar,
        element: <AboutPage />,
    },
    [AppRoutes.MAP]: {
        path: RoutePath.map,
        element: <MapPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
