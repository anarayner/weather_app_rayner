import cls from './Modal.module.scss'
import React, {memo, ReactNode} from 'react';
import {classNames} from 'shared/libs/classNames/classNames';
import {Portal} from '../Portal/Portal';
import {isMobile} from 'react-device-detect';


interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = memo((props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props

    const closeHandler = () => {
        if(onClose){
            onClose()
        }
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={isMobile? cls.content_m : cls.content} onClick={onContentClick}>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>

    );
});