import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './app/styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import {useTheme} from "./app/providers/theme/useTheme";
import {ThemeSwitcher} from "./widgets/ThemeSwitcher";
import {Sidebar} from "./shared/ui/Sidebar/Sidebar";
import {Navbar} from "./widgets/Navbar/Navbar";


const App = () => {
    const { theme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Navbar/>

            <div className='content-page'>
                <Sidebar/>
                {/* <Link to={'/'}>Главная</Link> */}
                {/* <Link to={'/about'}>О сайте</Link> */}
                {/* <Suspense fallback={<div>Loading...</div>}> */}
                {/*    <Routes> */}
                {/*        <Route path={'/about'} element={<AboutPageAsync />} /> */}
                {/*        <Route path={'/'} element={<MainPageAsync />} /> */}
                {/*    </Routes> */}
                {/* </Suspense> */}
                <MainPageAsync />
            </div>

        </div>
    )
}

export default App
