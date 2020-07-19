import { heroes } from '../components/data/heroes';

export const getHeroesByName = ( name = '' ) => {
    if ( name === ''){
        return [];
    
    }
    return heroes.filter(hero => {
        name = name.toLowerCase();
        return hero.superhero.toLowerCase().includes(name);
    })
}