import{a as c,i as y,S as g,A as w}from"./assets/vendor-D3HxRb6v.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const f=document.querySelector(".gallery"),p=document.querySelector(".category-nav"),m=document.querySelector(".showmore-btn"),h=c.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let l=[],d="Всі",i=1;function b(){return window.innerWidth>=1440?9:8}function L(){f.innerHTML=""}function E(t){t.forEach(e=>{const s=document.createElement("article");s.classList.add("pet-card"),s.innerHTML=`
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
    `,f.appendChild(s)})}function u(){const t=b(),e=d==="Всі"?l:l.filter(o=>o.categories.some(v=>v.name===d)),s=Math.ceil(e.length/t),n=(i-1)*t,r=n+t,a=e.slice(n,r);E(a),m.style.display=i>=s?"none":"block"}async function $(){try{l=(await h.get("api/animals")).data.animals||[],u()}catch(t){y.error({title:"Помилка",message:"Не вдалося завантажити тваринок. Спробуйте пізніше.",position:"topRight"}),console.error("Axios error:",t)}}async function S(){try{const e=(await h.get("api/categories")).data||[];C(["Всі",...e.map(s=>s.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}function C(t){p.innerHTML="",t.forEach(e=>{const s=document.createElement("button");s.classList.add("category-item"),s.textContent=e,s.dataset.category=e,e==="Всі"&&s.classList.add("active"),s.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(n=>n.classList.remove("active")),s.classList.add("active"),d=e,i=1,L(),u()}),p.appendChild(s)})}m.addEventListener("click",()=>{i+=1,u()});S();$();new g(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new w(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});function P(){return c.defaults.baseURL="https://paw-hut.b.goit.study/",c.get("/api/feedbacks").then(t=>(console.log(t.data.feedbacks),t.data.feedbacks)).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function M(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),s=t.map(n=>`
      <div class="swiper-slide swiper-comment-slide">
        <div class="rating value-${n.rate} star-svg half small">
          <div class="star-container">
            ${x(n.rate)}
          </div>
        </div>
        <div>
          <p class="description-comment">${n.description}</p>
          <p class="author-comment">${n.author}</p>
        </div>
      </div>
    `).join("");e.insertAdjacentHTML("beforeend",s)}P().then(t=>{console.log(t),M(t),new g(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function x(t){const e=Math.floor(t),s=t%1>=.5,n=5-e-(s?1:0);let r="";for(let a=0;a<e;a++)r+=`
      <div class="star">
        <svg class="star-filled" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>`;s&&(r+=`
      <div class="star">
        <svg class="star-half" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
      </div>`);for(let a=0;a<n;a++)r+=`
      <div class="star">
        <svg class="star-empty" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
      </div>`;return r}
//# sourceMappingURL=index.js.map
