export class GlobalData {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number ;
    TotalDeaths: number ;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string
}

export class CountryData {
    ID: string ;
    Country: string ;
    CountryCode: string;
    Slug: string ;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
}

export class CovidData {
    ID : string ;
    Message : string;
    Global : GlobalData ;
    Countries: CountryData[];
    Date : string ;
}

