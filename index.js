import{a as c,i as v,S as u,A as y}from"./assets/vendor-D3HxRb6v.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();function w(){return window.innerWidth>=1440?9:8}function b(t,e){return t==="Всі"?e:e.filter(s=>s.categories.some(a=>a.name===t))}const p=document.querySelector(".gallery"),d=document.querySelector(".category-nav"),g=document.querySelector(".showmore-btn");let f="Всі",n=1;function L(){p.innerHTML=""}function E(t){t.forEach(e=>{const s=document.createElement("article");s.classList.add("pet-card"),s.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${e.image||"default.jpg"}" alt="Фото ${e.name}, ${e.age}, ${e.gender}" />
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${e.species}</span>
        <h3 class="pet-card-name">${e.name}</h3>
        <span class="pet-category">${e.categories?.[0]?.name||"Без категорії"}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${e.age}</p>
          <p class="pet-card-gender">${e.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${e.shortDescription}</p>
    `,p.appendChild(s)})}function $(t){d.innerHTML="",t.forEach(e=>{const s=document.createElement("button");s.classList.add("category-item"),s.textContent=e,s.dataset.category=e,e==="Всі"&&s.classList.add("active"),s.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(a=>a.classList.remove("active")),s.classList.add("active"),f=e,n=1,l()}),d.appendChild(s)})}function l(){const t=w(),e=b(f,h),s=e.slice(0,n*t);L(),E(s);const a=Math.ceil(e.length/t);g.style.display=n>=a?"none":"block"}g.addEventListener("click",()=>{n+=1,l()});const m=c.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let h=[];async function C(){let e=1,s=[];try{for(;;){const r=(await m.get("api/animals",{params:{page:e,limit:30}})).data.animals||[];if(s=[...s,...r],r.length<30)break;e++}h=s,l()}catch(a){v.error({title:"Помилка",message:"Не вдалося завантажити тваринок.",position:"topRight"}),console.error("Axios error:",a)}}async function P(){try{const e=(await m.get("api/categories")).data||[];$(["Всі",...e.map(s=>s.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}new u(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new y(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});function S(){return c.defaults.baseURL="https://paw-hut.b.goit.study/",c.get("/api/feedbacks").then(t=>(console.log(t.data.feedbacks),t.data.feedbacks)).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function M(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),s=t.map(a=>`
      <div class="swiper-slide swiper-comment-slide">
        <div class="rating value-${a.rate} star-svg half small">
          <div class="star-container">
            ${k(a.rate)}
          </div>
        </div>
        <div>
          <p class="description-comment">${a.description}</p>
          <p class="author-comment">${a.author}</p>
        </div>
      </div>
    `).join("");e.insertAdjacentHTML("beforeend",s)}S().then(t=>{console.log(t),M(t),new u(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function k(t){const e=Math.floor(t),s=t%1>=.5,a=5-e-(s?1:0);let r="";for(let i=0;i<e;i++)r+=`
      <div class="star">
        <svg class="star-filled" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>`;s&&(r+=`
      <div class="star">
        <svg class="star-half" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
      </div>`);for(let i=0;i<a;i++)r+=`
      <div class="star">
        <svg class="star-empty" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
      </div>`;return r}P();C();
//# sourceMappingURL=index.js.map
