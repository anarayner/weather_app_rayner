import React, { Suspense } from 'react'
import './app/styles/index.scss'
import {useTheme} from './app/providers/theme/useTheme';
import {Sidebar} from './widgets/Sidebar/Sidebar';
import {Navbar} from './widgets/Navbar/Navbar';
import {Loader} from './shared/ui/Loader/Loader';
import {AppRouter} from './app/providers/router';
import {isMobile} from 'react-device-detect';


const App = () => {
    const { theme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={<div className={'loader'}><Loader/></div>}>
                <Navbar/>
                <div className={isMobile? 'content-page_m': 'content-page'} >
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
