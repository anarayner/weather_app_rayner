import { memo } from 'react'
import { Button } from '../../../shared/ui/Button'
import { ButtonTheme } from '../../../shared/ui/Button/Button'
import {useTheme} from "../../../app/providers/theme/useTheme";
import {Theme} from "../../../app/providers/theme/ThemeContext";
import {classNames} from "../../../shared/libs/classNames/classNames";
import DarkIcon from "../../../shared/assets/icons/moon_night_icon.svg"
import LightIcon from "../../../shared/assets/icons/sun.svg"


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.BACKGROUND_ROUND}
        >
            {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon/> }
        </Button>
    )
})
