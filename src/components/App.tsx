import React, {useEffect, useState} from 'react';
import './App.scss';
import Character from "./Character/Character";
import Filters from './Filters/Filters';
import {getCharacters, ICharacter} from '../API/characterAPI'
import Pagination from "./Pagination/Pagination";
import Container from '@material-ui/core/Container';
import {LinearProgress} from "@material-ui/core";
import ModalCharacter from "./ModalCharacter/ModalCharacter";



const App: React.FC = () => {

    let [characterList, setCharacterList] = useState<ICharacter[] | []>([]);

    let [currentPage, setCurrentPage] = useState<number>(1);
    //количество страниц
    let [pagesCount, setPagesCount] = useState<number>(1);

    const [filters, setFilters] = useState<string[]>([]);

    const [showPreloader, setShowPreloader] = useState<boolean>(false);
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const [currentCharacter, setCurrentCharacter] = useState<ICharacter>();

    const [errorText, setErrorText] = useState<string>('')

    useEffect(() => {

        setShowPreloader(true);
        getCharacters(currentPage, filters).then((json: any) => {

            setCharacterList(json.results);
            setPagesCount(json.info.pages);
            setShowPreloader(false);
            setErrorText('');
            //инициализируем персоонажа для модального окна
            if(!currentCharacter)setCurrentCharacter(json.results[0]);
        }).catch((e: Error) => {
            setErrorText(e.message);
            setCharacterList([]);
            setPagesCount(1);
            setShowPreloader(false);
        })
    }, [currentPage, filters])


    function acceptFilters(filters: string[]):void {
        setCurrentPage(1);
        setFilters(filters);
    }


    return (
        <div className="App">
            <Container maxWidth="lg">
                <Pagination showPreloader={showPreloader} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={pagesCount}/>
                <Filters acceptFilters={acceptFilters} showPreloader={showPreloader}/>
                {!showPreloader ? <>
                    <div className='characters__characters-list'>
                        {errorText && <h2>{errorText}</h2>}
                        {characterList.map((character: ICharacter, index) => {
                            return <Character key={index} character={character}
                                              setOpenModal={setOpenModal}
                                              setCurrentCharacter={setCurrentCharacter}
                            />
                        })}
                    </div>
                </> :
                    <LinearProgress />
                }
                <Pagination showPreloader={showPreloader} currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={pagesCount}/>
            </Container>
            {currentCharacter && <ModalCharacter isOpen={isOpenModal}
                             character={currentCharacter}
                             setOpenModal={setOpenModal}
            />}
        </div>
    );
}

export default App;
