
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';


let currentPage = 1;
let characteristics;
const perPage = 40;
const form = document.querySelector(`.submit-form`);
const list = document.querySelector(`.gallery`);
const btnMore = document.querySelector(`.js-more`);
const loading = document.querySelector(`.js-loading`)
form.addEventListener(`submit`, searchRequest);
btnMore.addEventListener(`click`, onLoad);

function onLoad() { 
  currentPage += 1;
  getRequest(characteristics)
    .then(data => {
            list.insertAdjacentHTML(`beforeend`,createMarkup(data.hits))
            initializeLightbox();
            const card = document.querySelector(`.gallery__item`).getBoundingClientRect().height;
      window.scrollBy(
        {
                top: card * 2,
                behavior: `smooth`
        });
                  })
        .catch(err => console.log(err))
   
}
function searchRequest(evt) {
    evt.preventDefault();
  loading.innerHTML = `<span class="loader"></span>`;
  if (evt.currentTarget.elements.search.value !== characteristics) {
    list.innerHTML = ``;
    currentPage = 1;
  }
  characteristics = evt.currentTarget.elements.search.value;
  
  getRequest(characteristics)  
    .then(data => {
      if (data.hits.length === 0)
                 { iziToast.show({
                    message: '❌ Sorry, there are no images matching your search query. Please try again!'
                 });
        loading.innerHTML = ``;
        btnMore.classList.add(`search-btn-hidden`);
        return;
      }
      loading.innerHTML = ``;
      list.insertAdjacentHTML(`beforeend`,createMarkup(data.hits))
      initializeLightbox();
      if (currentPage === 1) {
        btnMore.classList.remove(`search-btn-hidden`);
      }
      if (currentPage > data.totalHits / perPage) {
        btnMore.classList.add(`search-btn-hidden`);
        iziToast.show(
        {
          message: "We're sorry, but you've reached the end of search results."
        }
        );
      }
        })
        .catch(err => console.log(err))
    
}

function createMarkup(arr) {
        return arr.map( ({webformatURL, largeImageURL, tags, likes, views, comments, downloads} ) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${largeImageURL}">
            <img class="gallery__image" src="${webformatURL}" alt="${tags}" />
          </a>
          <ul class="gallery-stats">
            <li class="gallery-stats-item">
              <h3 class="stats-head">Likes</h3>
              <p class="stats-indicator">${likes}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Views</h3>
              <p class="stats-indicator">${views}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Comments</h3>
              <p class="stats-indicator">${comments}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Downloads</h3>
              <p class="stats-indicator">${downloads}</p>
            </li>
          </ul>
        </li>
   `).join(``)
}

async function getRequest(characteristics) {

    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = `41768952-3eb5a1819d194e4ebd739434d`
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${characteristics}
  &image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`)
    return response.data

}

function initializeLightbox() {
    const instance = new SimpleLightbox('.gallery a', {
        captionsDelay: 250,
        captionPosition: "bottom",
    });
    instance.refresh();
}

