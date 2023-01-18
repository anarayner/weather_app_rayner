import { dayjs } from './date-util';

export const tempt = (temp: number, degree: string) => {
    const x = temp - 273.15;
    const y = 9 / 5;
    if (degree === 'F') {
        return Math.floor(x * y + 32);
    }
    return Math.floor(x);
};

export const formatDay = (time: string | number | Date) => dayjs(time).format('D MMM');

export const formatDayWithYear = (time: string | number | Date) => dayjs(time).format('D MMM YYYY');

export const formatDayOfWeek = (time: string | number | Date) => dayjs(time).format('ddd');

export const formatAMPM = (time: string | number | Date) => dayjs(time).format('HH:mm A');

export const toMiles = (value: number) => Math.floor(value / 1609.344);

export const toK = (value: number) => Math.floor(value / 1000);
