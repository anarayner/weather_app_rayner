import {AllWeather, List, Rain, SearchHistory} from "../../../store/types/types";

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

export const getWeekWeather = (data: List[]): List[] => {
    const week:List[] =[]
    data.map((d: List, index: number) => {
        if(week.length == 4) return
        if(index%8 == 0 && index !==0){
            week.push(d)
        }
    })
    return week
}


export const getRainChance = (data: List[]): Rain[] => {
    const rainChance: Rain[] =[]
    data.map((d: List, index: number) => {
        if(rainChance.length == 7) return
        const obj: Rain = {} as Rain
        if(d?.rain?.["3h"]){
            obj.date = d.dt_txt
            obj.rainChance = d.rain["3h"]
            rainChance.push(obj)
        }
    })
    return rainChance
}

export const getSearchCity = (data: AllWeather): SearchHistory => {
    const newCity: SearchHistory = <SearchHistory>{}
    newCity.city = data.city.name
    newCity.temp = data.list[0].main.temp
    newCity.weather = data.list[0].weather[0].main
    return newCity
}

export const getHourlyTodayWeather = (data: List[]): List[] => {
    const week:List[] =[]
    data.map((d: List) => {
        if(week.length == 3) return
        week.push(d)
    })
    return week
}

export const formatDayWithYear = (currentTime: Date) => {
    const day =
        currentTime.getDate() + '  ' +
        currentTime.toLocaleString('default', { month: 'short' }) + '  ' +
        currentTime.getFullYear()
    return day
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
