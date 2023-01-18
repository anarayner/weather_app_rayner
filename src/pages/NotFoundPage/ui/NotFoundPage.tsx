import { classNames } from 'shared/libs/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
        Page not found
    </div>
);
