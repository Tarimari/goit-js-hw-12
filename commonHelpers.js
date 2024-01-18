import{i as h,a as L,S as b}from"./assets/vendor-c145bea9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();let i=1,l;const m=40,_=document.querySelector(".submit-form"),u=document.querySelector(".gallery"),c=document.querySelector(".js-more"),d=document.querySelector(".js-loading");_.addEventListener("submit",q);c.addEventListener("click",$);function $(){i+=1,f(l).then(s=>{u.insertAdjacentHTML("beforeend",g(s.hits)),p();const t=document.querySelector(".gallery__item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}).catch(s=>console.log(s))}function q(s){s.preventDefault(),d.innerHTML='<span class="loader"></span>',s.currentTarget.elements.search.value!==l&&(u.innerHTML="",i=1),l=s.currentTarget.elements.search.value,f(l).then(t=>{if(t.hits.length===0){h.show({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML="",c.classList.add("search-btn-hidden");return}d.innerHTML="",u.insertAdjacentHTML("beforeend",g(t.hits)),p(),i===1&&c.classList.remove("search-btn-hidden"),i>t.totalHits/m&&(c.classList.add("search-btn-hidden"),h.show({message:"We're sorry, but you've reached the end of search results."}))}).catch(t=>console.log(t))}function g(s){return s.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:r,comments:o,downloads:y})=>`
        <li class="gallery__item">
          <a class="gallery__link" href="${a}">
            <img class="gallery__image" src="${t}" alt="${n}" />
          </a>
          <ul class="gallery-stats">
            <li class="gallery-stats-item">
              <h3 class="stats-head">Likes</h3>
              <p class="stats-indicator">${e}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Views</h3>
              <p class="stats-indicator">${r}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Comments</h3>
              <p class="stats-indicator">${o}</p>
            </li>
            <li class="gallery-stats-item">
              <h3 class="stats-head">Downloads</h3>
              <p class="stats-indicator">${y}</p>
            </li>
          </ul>
        </li>
   `).join("")}async function f(s){const t="https://pixabay.com/api/",a="41768952-3eb5a1819d194e4ebd739434d";return(await L.get(`${t}?key=${a}&q=${s}
  &image_type=photo&orientation=horizontal&safesearch=true&per_page=${m}&page=${i}`)).data}function p(){new b(".gallery a",{captionsDelay:250,captionPosition:"bottom"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
