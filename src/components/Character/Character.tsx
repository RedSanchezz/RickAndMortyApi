import React from 'react';
import './Character.css'
import {ICharacter} from "../../API/characterAPI";


interface CharacterProps {
    character: ICharacter
    setOpenModal(isShow: boolean): void
    setCurrentCharacter(character: ICharacter): void
}

const Character: React.FC<CharacterProps> = ({character, setOpenModal, setCurrentCharacter})=> {

    function clickCharacterHandler(e : React.MouseEvent) {
        setCurrentCharacter(character);
        setOpenModal(true);
    }

    return (
            <div className='characters__characters-list-item character-item'
                 onClick={clickCharacterHandler}>
                <div className='character-item__name'>Имя: {character.name}</div>
                <div className='character-item__image'>
                    <img src={character.image} alt='character-logo'/>
                </div>
                <div className='character-item__id'>
                    ID: {character.id}
                </div>
                <div className='character-item__gender'>
                    Пол: {character.gender}
                </div>
                <div className='character-item__created'>
                    Вид персоонажа: {character.species}
                </div>
                <div className='character-item__created'>
                    created {character.created}
                </div>
            </div>
    );
}

export default Character;