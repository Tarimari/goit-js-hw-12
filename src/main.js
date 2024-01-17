import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(`.submit-form`);
const list = document.querySelector(`.gallery`);
form.addEventListener(`submit`, searchRequest);


function searchRequest(evt) {
    evt.preventDefault();
    list.innerHTML = `<span class="loader"></span>`;
    const characteristics = evt.currentTarget.elements.search.value;
    getRequest(characteristics)
        .then(data => {
            if (data.hits.length === 0)
                 { iziToast.show({
                    message: '❌ Sorry, there are no images matching your search query. Please try again!'
                 });
                list.innerHTML = ``;
                return;}
            list.innerHTML = createMarkup(data.hits)
            initializeLightbox();
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

function getRequest(characteristics) {

    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = `41768952-3eb5a1819d194e4ebd739434d`
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${characteristics}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })

}

function initializeLightbox() {
    const instance = new SimpleLightbox('.gallery a', {
        captionsDelay: 250,
        captionPosition: "bottom",
    });
    instance.refresh();
}
