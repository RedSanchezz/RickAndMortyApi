
export const baseURL = 'https://rickandmortyapi.com/api/';

export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

export function getCharacters(page?:number, filters?: string[]) : Promise<ICharacter> {

    let url = baseURL + 'character/';
    if(page) url = url + '?page='+page;

    if(filters?.length){
        filters.forEach((filter)=>{
            url = url+'&' + filter;
        })
    }
    return fetch(url).then((response)=>{
        if(response.ok) return response.json();
        else {
            if(response.status===404){
                throw Error('Персоонажей не найдено');
            }
            else  {
                throw Error('Произошла ошибка !');

            }
        }

    })
}

