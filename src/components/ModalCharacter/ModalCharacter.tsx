import React, {useEffect, useState} from 'react';
import './ModalCharacter.scss'
import {CircularProgress} from "@material-ui/core";
import {ICharacter} from "../../API/characterAPI";
import Fade from '@material-ui/core/Fade';

interface ModalCharacterProps {
    isOpen:boolean,
    character:ICharacter,
    setOpenModal(openFlag:boolean):void,
}


const ModalCharacter: React.FC<ModalCharacterProps> = ({isOpen, character, setOpenModal}) => {

    const [episodes, setEpisodes]  = useState<string[]>([]);
    const [showPreloader, setShowPreloader] = useState(false);

    //отключаем прокрутку страницы
    useEffect(()=>{
        if(isOpen) document.body.style.overflow='hidden'
        else document.body.style.overflow=''

    }, [isOpen])

    useEffect(()=>{
        setShowPreloader(true);
        if(isOpen===true){
            let episodes = character.episode;

            Promise.all(episodes.map((url:string)=>{return fetch(url)})).then((resolve)=>{
                return Promise.all(resolve.map((response)=>{
                    return response.json()
                }));
            }).then((jsons)=>{
                let newEpisodes: any=[];
                jsons.forEach((json)=>{
                    newEpisodes.push(json.name);
                })
                setEpisodes(newEpisodes);
                setShowPreloader(false);
            })
        }
    }, [isOpen, character.episode]);

    function clickModalWrapperHandler(e : React.MouseEvent) {
        if(e.currentTarget===e.target) setOpenModal(false);
    }
    function closeModalBtnHandler(e : React.MouseEvent) {
        setOpenModal(false);
    }

    return (
        <Fade in={isOpen} timeout={500}>
            <div onClick={clickModalWrapperHandler} className='modal-wrapper' >
            <div className='modal-character'>
                <div className='modal-character__name'>
                    Имя: {character.name}
                </div>
                <div className='modal-character__img'>
                    {isOpen && <img src={character.image} alt='character-logo'/>}
                </div>
                <div className='modal-character__item-list'>
                    <div className='modal-character__item'>
                        Статус: {character.status}
                    </div>
                    <div className='modal-character__item'>
                        Вид: {character.species}
                    </div>
                    {character.type && <div className='modal-character__item'>
                        Тип: {character.type}
                    </div>}
                    <div className='modal-character__item'>
                        Пол: {character.gender}
                    </div>
                    <div className='modal-character__item'>
                        Нахождение: {character.location.name}
                    </div>
                    <div className='modal-character__item'>
                        Место проиcхождения: {character.origin.name}
                    </div>
                </div>

                <div className='modal-character__episodes'>
                    <h3>Серии</h3>
                    {!showPreloader ?
                        <ul>
                            {episodes.map((episodeName: string, index)=>{
                                return <li key={index}>{episodeName}</li>
                            })}
                        </ul>
                        :
                        <CircularProgress />
                    }
                </div>
                <div className='modal-character__item'>
                    Дата создания : {character.created.slice(0, 16).replace('T', ' ')}
                </div>
                <div onClick={closeModalBtnHandler} className='modal-character__close-btn'>
                    <img src='images/close-btn.svg' alt='close-btn'/>
                </div>
            </div>
        </div>
        </Fade>
    );
}

export default ModalCharacter;