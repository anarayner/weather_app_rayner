import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import {Loader} from '../../../../shared/ui/Loader/Loader';
import {AppRouteSProps, routeConfig} from '../config/routeConfig';
import '../../../styles/index.scss'


const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteSProps) => {
        const element = (
            <Suspense fallback={<div className={'loader'}><Loader/></div>}>
                <div className="page-wrapper">
                    { route.element }
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            { Object.values(routeConfig).map(renderWithWrapper) }
        </Routes>
    );
};

export default memo(AppRouter);
