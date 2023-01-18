import {
    ReactNode,
    useCallback, useEffect, useRef, useState,
} from 'react';
import { isMobile } from 'react-device-detect';
import cls from 'shared/ui/Modal/Modal.module.scss';

interface useModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationDelay?: number;
}
export function useModal({
    isOpen, onClose, animationDelay,
}: useModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => () => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            if (isMobile) {
                onClose();
            } else {
                setIsClosing(true);
                timerRef.current = setTimeout(() => {
                    onClose();
                    setIsClosing(false);
                }, animationDelay);
            }
        }
    }, [animationDelay, onClose]);

    useEffect(() => () => {
        clearTimeout(timerRef.current);
    }, []);

    return {
        isClosing,
        isMounted,
        close,
    };
}
