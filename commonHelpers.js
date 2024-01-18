import{i as h,a as y,S as L}from"./assets/vendor-c145bea9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let i=1,l;const u=40,b=document.querySelector(".submit-form"),c=document.querySelector(".gallery"),d=document.querySelector(".js-more"),$=document.querySelector(".js-loading");b.addEventListener("submit",q);d.addEventListener("click",_);function _(){i+=1,g(l).then(s=>{c.insertAdjacentHTML("beforeend",f(s.hits)),m()}).catch(s=>console.log(s))}function q(s){s.preventDefault(),$.innerHTML='<span class="loader"></span>',s.currentTarget.elements.search.value!==l&&(c.innerHTML=""),l=s.currentTarget.elements.search.value,g(l).then(t=>{if(t.hits.length===0){h.show({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="";return}c.insertAdjacentHTML("beforeend",f(t.hits)),m(),console.log(t),i===1&&(d.hidden=!1),console.log(i),console.log(t.totalHits),console.log(u),i>t.totalHits/u&&(d.hidden=!0,h.show({message:"We're sorry, but you've reached the end of search results."}))}).catch(t=>console.log(t))}function f(s){return s.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:o,comments:n,downloads:p})=>`
        <li class="gallery__item">
          <a class="gallery__link" href="${r}">
            <img class="gallery__image" src="${t}" alt="${a}" />
          </a>
          <ul class="gallery-stats">
            <li class="gallery-stats-item">
              <h3 class="stats-head">Likes</h3>
              <p class="stats-indicator">${e}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Views</h3>
              <p class="stats-indicator">${o}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Comments</h3>
              <p class="stats-indicator">${n}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Downloads</h3>
              <p class="stats-indicator">${p}</p>
            </li>
          </ul>
        </li>
   `).join("")}async function g(s){const t="https://pixabay.com/api/",r="41768952-3eb5a1819d194e4ebd739434d";return(await y.get(`${t}?key=${r}&q=${s}
  &image_type=photo&orientation=horizontal&safesearch=true&per_page=${u}&page=${i}`)).data}function m(){new L(".gallery a",{captionsDelay:250,captionPosition:"bottom"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
