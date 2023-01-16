const days = ['Saturday', 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];

export const tempt = (temp: number, degree: string) => {
    const x = temp - 273.15
    const y = 9/5
    if(degree == 'F') return x*y+32
    if(degree == 'C') return x
}

export const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


export const formatDayWithYear = (currentTime: Date) => {
    const day =
        currentTime.getDate() + '  ' +
        currentTime.toLocaleString('default', { month: 'short' }) + '  ' +
        currentTime.getFullYear()
    return day
}

export const formatDayOfWeek = (currentTime: Date) => {
    return days[ currentTime.getDay() ];
}

export const formatDay = (currentTime: Date) => {
    const time =
        currentTime.getDate() + '  ' +
        currentTime.toLocaleString('default', { month: 'short' }) + '  '
    return time
}

export const formatTime = (currentTime: Date) => {
    return currentTime.getHours() + '  ' + currentTime.getMinutes()
}
