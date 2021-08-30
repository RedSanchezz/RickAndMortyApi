import React from 'react';
import './Pagination.scss';

interface PaginationProps {
    currentPage:number
    setCurrentPage(page:number):void
    pagesCount: number
    showPreloader: boolean

}


const Pagination: React.FC<PaginationProps> = ({currentPage, setCurrentPage, pagesCount, showPreloader}) => {

    function onNextBtnClickHandler() {
        setCurrentPage(currentPage + 1);
    }

    function onPrevBtnClickHandler() {
        setCurrentPage(currentPage - 1);
    }

    function setCurrentPageHandler(number:number) {
        if(showPreloader) return;
        setCurrentPage(number)
    }

    //принимает позицию кнопки, возвращает активна ли она
    function isPositionActivePage(number: number): boolean {
        if (currentPage <= 3) {
            return number === currentPage
        } else {
            if (pagesCount - 3 < currentPage) {
                return getNumberPage(number) === currentPage;
            }
            return number === 3
        }
    }
    //Принимает позицию кнопки, возвращает номер страницы
    function getNumberPage(number: number): number {
        if (currentPage <= 3) {
            switch (number) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                case 4:
                    return 4;
                case 5:
                    return 5;
            }
        } else {
            if (pagesCount - 3 < currentPage) {
                switch (number) {
                    case 1:
                        return pagesCount - 4;
                    case 2:
                        return pagesCount - 3;
                    case 3:
                        return pagesCount - 2;
                    case 4:
                        return pagesCount - 1;
                    case 5:
                        return pagesCount;
                }
            }
            switch (number) {
                case 1:
                    return currentPage - 2;
                case 2:
                    return currentPage - 1;
                case 3:
                    return currentPage;
                case 4:
                    return currentPage + 1;
                case 5:
                    return currentPage + 2;
            }
        }
        return 0;
    }

    return (
        <ul className={!showPreloader? "pagination" : "pagination disabled"}>
            <li className={(currentPage - 1 === 0) ? "pagination__item__icon disabled" : "pagination__item__icon"}
                onClick={onPrevBtnClickHandler}>
                <i className="material-icons">chevron_left</i>
            </li>
            <li className={isPositionActivePage(1) ? "pagination__item active" : "pagination__item"}
                onClick={() => setCurrentPageHandler(getNumberPage(1))}>
                {getNumberPage(1)}
            </li>
            {pagesCount>=2 &&<li className={isPositionActivePage(2) ? "pagination__item active" : "pagination__item"}
                onClick={() => setCurrentPageHandler(getNumberPage(2))}>
                {getNumberPage(2)}
            </li>}
            {pagesCount>=3 &&<li className={isPositionActivePage(3) ? "pagination__item active" : "pagination__item"}
                onClick={() => setCurrentPageHandler(getNumberPage(3))}>
                {getNumberPage(3)}
            </li>}
            {pagesCount>=4 && <li className={isPositionActivePage(4) ? "pagination__item active" : "pagination__item"}
                onClick={() => setCurrentPageHandler(getNumberPage(4))}>
                {getNumberPage(4)}
            </li>}
            {pagesCount>=5 && <li className={isPositionActivePage(5) ? "pagination__item active" : "pagination__item"}
                onClick={() => setCurrentPageHandler(getNumberPage(5))}>
                {getNumberPage(5)}
            </li>}
            <li className={(currentPage === pagesCount) ? "pagination__item__icon disabled" : "pagination__item__icon"}
                onClick={onNextBtnClickHandler}>
                <i className="material-icons">chevron_right</i>
            </li>
        </ul>
    );
}

export default Pagination;