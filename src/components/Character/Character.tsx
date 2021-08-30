import React from 'react';
import './Character.scss'
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
                <div className='character-item__properties-list'>
                    <div className='properties-list__item character-item__id'>
                        ID: {character.id}
                    </div>
                    <div className='properties-list__item character-item__gender'>
                        Пол: {character.gender}
                    </div>
                    <div className='properties-list__item character-item__created'>
                        Вид персоонажа: {character.species}
                    </div>
                    <div className='properties-list__item character-item__created'>
                            Дата создания: {character.created.slice(0, 16).replace('T', ' ')}
                    </div>
                </div>
            </div>
    );
}

export default Character;