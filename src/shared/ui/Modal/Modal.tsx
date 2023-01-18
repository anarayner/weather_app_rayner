import React, {
    memo, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { isMobile } from 'react-device-detect';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { useModal } from 'shared/libs/hooks/useModal';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

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
    // if (lazy && !isMounted) {
    //     return null;
    // }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={isMobile ? cls.content_m : cls.content}
                >
                    { children }
                </div>
            </div>
        </Portal>

    );
};
