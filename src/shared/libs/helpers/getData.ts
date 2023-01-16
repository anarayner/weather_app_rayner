import {List, Rain, SearchHistory} from 'store/types/types';

export const getWeekWeather = (data: List[]): List[] => {
    const week: List[] = []
    data.map((d: List, index: number) => {
        if (week.length == 4) return
        if (index % 6 == 0 && index !== 0) {
            week.push(d)
        }
    })
    return week
}
export const getRainChance = (data: List[]): Rain[] => {
    const rainChance: Rain[] = []
    data.map((d: List, index: number) => {
        if (rainChance.length == 7) return
        const obj: Rain = {} as Rain
        if (d?.rain?.['3h']) {
            obj.date = d.dt_txt
            obj.rainChance = d.rain['3h']
            rainChance.push(obj)
        }
    })
    return rainChance
}
export const getSearchCity = (data: List, cityName: string, currentLocation: string): SearchHistory => {
    if (currentLocation == cityName) return
    const newCity: SearchHistory = <SearchHistory>{}
    newCity.city = cityName
    newCity.temp = data?.main?.temp
    newCity.weather = data?.weather[0]?.main
    return newCity
}
export const getHourlyTodayWeather = (data: List[]): List[] => {
    const week: List[] = []
    data.map((d: List) => {
        if (week.length == 3) return
        week.push(d)
    })
    return week
}