import{i as c,S as u}from"./assets/vendor-9310f15c.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();require("axios").default;const h=document.querySelector(".submit-form"),n=document.querySelector(".gallery");h.addEventListener("submit",f);function f(r){r.preventDefault(),n.innerHTML='<span class="loader"></span>';const a=r.currentTarget.elements.search.value;m(a).then(s=>{if(s.hits.length===0){c.show({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="";return}n.innerHTML=d(s.hits),p()}).catch(s=>console.log(s))}function d(r){return r.map(({webformatURL:a,largeImageURL:s,tags:i,likes:e,views:t,comments:o,downloads:l})=>`
        <li class="gallery__item">
          <a class="gallery__link" href="${s}">
            <img class="gallery__image" src="${a}" alt="${i}" />
          </a>
          <ul class="gallery-stats">
            <li class="gallery-stats-item">
              <h3 class="stats-head">Likes</h3>
              <p class="stats-indicator">${e}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Views</h3>
              <p class="stats-indicator">${t}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Comments</h3>
              <p class="stats-indicator">${o}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Downloads</h3>
              <p class="stats-indicator">${l}</p>
            </li>
          </ul>
        </li>
   `).join("")}function m(r){return fetch(`https://pixabay.com/api/?key=41768952-3eb5a1819d194e4ebd739434d&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function p(){new u(".gallery a",{captionsDelay:250,captionPosition:"bottom"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
