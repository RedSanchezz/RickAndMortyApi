import React, {useState} from 'react';
import './Filters.scss'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CircularProgress from '@material-ui/core/CircularProgress';


interface FiltersProps {
    acceptFilters(filters: string[]): void

    showPreloader: boolean
}


const Filters: React.FC<FiltersProps> = ({acceptFilters, showPreloader}) => {

    const [nameFilter, setNameFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('');

    const [speciesFilter, setSpeciesFilter] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [genderFilter, setGenderFilter] = useState<string>('');
    const [openMobileFilters, setOpenMobileFilters] = useState<boolean>(false);


    function changeNameInputHandler(e: React.ChangeEvent<any>) {
        setNameFilter(e.currentTarget.value);
    }

    function changeSpeciesInputHandler(e: React.ChangeEvent<any>) {
        setSpeciesFilter(e.currentTarget.value)
    }

    function changeTypeInputHandler(e: React.ChangeEvent<any>) {
        setTypeFilter(e.currentTarget.value);
    }


    function changeGenderSelectHandler(e: React.ChangeEvent<any>) {
        setGenderFilter(e.target.value);
    }

    function changeStatusSelectHandler(e: React.ChangeEvent<any>) {
        setStatusFilter(e.target.value);
    }

    function clickMobileButtonOpenHandler(e: React.MouseEvent) {
        setOpenMobileFilters(true);
    }

    function clickMobileButtonCloseHandler(e: React.MouseEvent) {
        setOpenMobileFilters(false);
    }


    function clickAcceptFiltersButtonHandler(e: React.SyntheticEvent) {
        setOpenMobileFilters(false);

        let filters = [];
        nameFilter && filters.push(`name=${nameFilter}`);
        statusFilter && filters.push(`status=${statusFilter}`);
        speciesFilter && filters.push(`species=${speciesFilter}`);
        typeFilter && filters.push(`type=${typeFilter}`);
        genderFilter && filters.push(`gender=${genderFilter}`);
        acceptFilters(filters);
    }


    return (
        <div className='characters__filters'>
            <div onClick={clickMobileButtonOpenHandler} className='characters__filters-mobile-btn'>
                <img src='images/filter-icon.svg' alt='filter-icon'/>
            </div>
            <div className={openMobileFilters ? 'characters__filters-list open' : 'characters__filters-list'}>
                <div onClick={clickMobileButtonCloseHandler} className='characters__filters-close-mobile-btn'>
                    <img src='images/close-btn.svg' alt='close-btn'/>
                </div>
                <div className='characters__filters-list-item'>
                    <TextField id="standard" label="Имя"
                               onChange={changeNameInputHandler} value={nameFilter}/>
                </div>
                <div className='characters__filters-list-item'>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={statusFilter}
                            onChange={changeStatusSelectHandler}
                        >
                            <MenuItem value=''>-</MenuItem>
                            <MenuItem value='Alive'>Жив</MenuItem>
                            <MenuItem value='Dead'>Мертв</MenuItem>
                            <MenuItem value='unknown'>Неизвестно</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='characters__filters-list-item'>
                    <TextField id="standard" label="Вид"
                               value={speciesFilter} onChange={changeSpeciesInputHandler}/>
                </div>
                <div className='characters__filters-list-item'>
                    <TextField id="standard" label="Тип персоонажа"
                               onChange={changeTypeInputHandler} value={typeFilter}/>
                </div>
                <div className='characters__filters-list-item'>
                    <FormControl>
                        <InputLabel id="gender-filter-input-label">Пол</InputLabel>
                        <Select
                            labelId="gender-filter-input-label"
                            id="demo-simple-select"
                            value={genderFilter}
                            onChange={changeGenderSelectHandler}
                        >
                            <MenuItem value=''>-</MenuItem>
                            <MenuItem value='Female'>Женщина</MenuItem>
                            <MenuItem value='Male'>Мужчина</MenuItem>
                            <MenuItem value='Genderless'>Бесполый</MenuItem>
                            <MenuItem value='unknown'>Неизвестно</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                {!showPreloader ?
                    <div onClick={clickAcceptFiltersButtonHandler} className='characters__filters-update-btn '>
                        <AutorenewIcon/>
                    </div> :
                    <div className='characters__filters-preloader'>
                        <CircularProgress/>
                    </div>
                }
            </div>

        </div>
    );
}

export default Filters;