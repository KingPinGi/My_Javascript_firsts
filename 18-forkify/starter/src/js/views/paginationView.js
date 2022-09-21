import icons from 'url:../../img/icons.svg';
import View from './View.js';

class paginationView extends View {
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.result.length / this._data.resultPerPage);
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) {
            return ` 
            <button class="btn--inline pagination__btn--next">
                <span>7${curPage + 1}</span>
                <svg class="search__icon">
                    <use href=${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `;
        };


        //Last page
        if (curPage === numPages && numPages > 1) {
            return `
            <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>     
            `;
        }

        //Other pages
        if (curPage < numPages) {
            return `
            <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>  
          <button class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
          </svg>
          </button>
            `;
        }

        //Page 1 and ther arre No other pages
        return '';
    }
}

export default new paginationView();