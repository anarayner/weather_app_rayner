import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/theme/useTheme';
import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { useModal } from 'shared/libs/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { theme } = useTheme();

    const {
        isClosing,
        close,
    } = useModal(
        {
            isOpen,
            onClose,
            animationDelay: ANIMATION_DELAY,
        },
    );

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    { children }
                </div>
            </div>
        </Portal>
    );
});
