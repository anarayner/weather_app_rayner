import { dayjs } from './date-util';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const tempt = (temp: number, degree: string) => {
    const x = temp - 273.15;
    const y = 9 / 5;
    if (degree === 'F') {
        return x * y + 32;
    }
    return x;
};

export const formatDayWithYear = (currentTime: Date) => `${currentTime.getDate()}  ${
    currentTime.toLocaleString('default', { month: 'short' })}  ${
    currentTime.getFullYear()}`;

export const formatDayOfWeek = (currentTime: Date) => days[currentTime.getDay()];

export const formatDay = (currentTime: Date) => {
    const time = `${currentTime.getDate()}  ${
        currentTime.toLocaleString('default', { month: 'short' })}  `;
    return time;
};

export const formatAMPM = (time: string | number | Date) => dayjs.tz(time).format('HH:mm A');

export const toMiles = (value: number) => Math.floor(value / 1609.344);

export const toK = (value: number) => Math.floor(value / 1000);
