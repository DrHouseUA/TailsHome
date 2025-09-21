import{a as c,i as w,S as u,A as y}from"./assets/vendor-D3HxRb6v.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const h=document.querySelector(".gallery"),p=document.querySelector(".category-nav"),v=document.querySelector(".showmore-btn"),f=c.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let l=[],d="Всі",o=1;function x(){return window.innerWidth>=1440?9:8}function b(){h.innerHTML=""}function L(s){s.forEach(e=>{const t=document.createElement("article");t.classList.add("pet-card"),t.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${e.image}" alt="Фото ${e.name}, ${e.age}, ${e.gender}" />
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${e.species}</span>
        <h3 class="pet-card-name">${e.name}</h3>
        <span class="pet-category">${e.categories[0].name}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${e.age}</p>
          <p class="pet-card-gender">${e.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${e.shortDescription}</p>
    `,h.appendChild(t)})}function g(){const s=x(),e=d==="Всі"?l:l.filter(n=>n.categories.some(m=>m.name===d)),t=Math.ceil(e.length/s),i=(o-1)*s,r=i+s,a=e.slice(i,r);L(a),v.style.display=o>=t?"none":"block"}async function E(){try{l=(await f.get("api/animals")).data.animals||[],g()}catch(s){w.error({title:"Помилка",message:"Не вдалося завантажити тваринок. Спробуйте пізніше.",position:"topRight"}),console.error("Axios error:",s)}}async function $(){try{const e=(await f.get("api/categories")).data||[];C(["Всі",...e.map(t=>t.name)])}catch(s){console.error("Помилка завантаження категорій:",s)}}function C(s){p.innerHTML="",s.forEach(e=>{const t=document.createElement("button");t.classList.add("category-item"),t.textContent=e,t.dataset.category=e,e==="Всі"&&t.classList.add("active"),t.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(i=>i.classList.remove("active")),t.classList.add("active"),d=e,o=1,b(),g()}),p.appendChild(t)})}v.addEventListener("click",()=>{o+=1,g()});$();E();new u(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new y(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",s=>{const e=s.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});function P(){return c.defaults.baseURL="https://paw-hut.b.goit.study/",c.get("/api/feedbacks").then(s=>(console.log(s.data.feedbacks),s.data.feedbacks)).catch(s=>{throw console.error("Ошибка при получении данных:",s),s})}function M(s){const e=document.querySelector(".stories-swiper .swiper-wrapper"),t=s.map(i=>`
        <div class="swiper-slide swiper-comment-slide">
  <div class="rating value-${i.rate} star-svg half small">
    <div class="star-container">
      <div class="star">
            <svg class="star-empty">
                <use href="/star-rating.icons.svg#star-empty"></use>
            </svg>
            <svg class="star-half">
                <use href="/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="/star-rating.icons.svg#star-filled"></use>
            </svg>
        </div>
      <div class="star">
        <svg class="star-empty" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
        <svg class="star-half" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
        <svg class="star-filled" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>
        <div class="star">
        <svg class="star-empty" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
        <svg class="star-half" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
        <svg class="star-filled" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>
         <div class="star">
        <svg class="star-empty" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
        <svg class="star-half" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
        <svg class="star-filled" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>
            <div class="star">
        <svg class="star-empty" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
        <svg class="star-half" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
        <svg class="star-filled" width="20px" height="19px">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>
            </div>
          </div>
          <div>
            <p class="description-comment">${i.description}</p>
            <p class="author-comment">${i.author}</p>
          </div>
        </div>
      `).join("");e.insertAdjacentHTML("beforeend",t)}P().then(s=>{console.log(s),M(s),new u(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});
//# sourceMappingURL=index.js.map
