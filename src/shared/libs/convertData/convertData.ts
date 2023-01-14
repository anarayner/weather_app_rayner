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