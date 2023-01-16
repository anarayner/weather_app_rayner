import cls from './NotFoundPage.module.scss';
import {classNames} from 'shared/libs/classNames/classNames';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            { 'Page not found' }
        </div>
    );
};
