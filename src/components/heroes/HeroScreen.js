import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    // const [ hero ] = getHeroById(heroeId);
    const [ hero ] = useMemo(() => getHeroById( heroeId ), [heroeId]);

    if (!hero){
        return <Redirect to="/" />
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {

        if ( history.length <= 2 ){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`} 
                    className="img-thumbnail animate__animated animate__fadeInLeftBig"
                    alt={superhero}
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3 className="h3">{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Alter ego:</strong> { alter_ego }</li>
                    <li className="list-group-item"><strong>Publisher:</strong> { publisher }</li>
                    <li className="list-group-item"><strong>First appaearance:</strong> { first_appearance }</li>
                </ul>
                <h5 className="h5"> Characters </h5>
                <p>{characters}</p>
                <button 
                    onClick={ handleReturn }
                    className="btn btn-outline-dark">
                    Return
                </button>
            </div>
        </div>
    )
}
