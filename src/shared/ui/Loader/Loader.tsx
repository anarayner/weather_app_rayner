import './Loader.scss';
import {classNames} from '../../libs/classNames/classNames';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-dual-ring', {}, [className])}>
        <div />
    </div>
);
