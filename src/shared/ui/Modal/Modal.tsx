import cls from './Modal.module.scss'
import React, {memo, ReactNode} from 'react';
import {classNames} from "../../libs/classNames/classNames";


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
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
});