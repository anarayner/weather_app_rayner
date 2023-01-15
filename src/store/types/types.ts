export interface CoordTypes {
    lon: number,
    lat: number
}

export interface WeatherTypes {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface MainTypes {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface SysTypes {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}

export interface CurrentWeather {
    coord: CoordTypes,
    weather: WeatherTypes[],
    base: string,
    main: MainTypes,
    visibility: number,
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: SysTypes,
    timezone: number,
    id: number,
    name: string,
    cod: number
}


export interface City {
    coord: CoordTypes,
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
}

export interface Main {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_kf: number,
    temp_max: number,
    temp_min: number,
}

export interface List {
    clouds: {
        all: number
    },
    dt: number,
    dt_txt: string,
    main: Main;
    pop: number,
    sys: {
        pod: string
    },
    visibility: number,
    weather: WeatherTypes[],
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    rain?: {
        '3h'?: number
    }
}
export interface AllWeather {
    city: City;
    cnt: number;
    cod: string;
    list: List[];
}

export interface Rain {
    date: string,
    rainChance: number
}

export interface SearchHistory {
    city: string;
    temp: number;
    weather: string
}

