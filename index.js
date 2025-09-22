import{a as c,i as b,S as m,A as w}from"./assets/vendor-D3HxRb6v.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();function L(){return window.innerWidth>=1440?9:8}function E(t,e){return t==="Всі"?e:e.filter(s=>s.categories.some(n=>n.name===t))}const g=document.querySelector(".gallery"),u=document.querySelector(".category-nav"),f=document.querySelector(".showmore-btn");let v="Всі",o=1;function S(){g.innerHTML=""}function k(t){t.forEach(e=>{const s=document.createElement("article");s.classList.add("pet-card"),s.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${e.image||"default.jpg"}" alt="Фото ${e.name}, ${e.age}, ${e.gender}" loading="lazy"/>
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${e.species}</span>
        <h3 class="pet-card-name">${e.name}</h3>
       <span class="pet-category-wrapper">${$(e.categories)}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${e.age}</p>
          <p class="pet-card-gender">${e.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${e.shortDescription}</p>
      <button class="pet-card-btn" id="${e._id}">Дізнатись більше</button>
    `,g.appendChild(s),console.log(e.categories)})}function $(t){let e="";for(const s of t)e+=`<span class="pet-category">
      ${s.name}
    </span>`;return e}function C(t){u.innerHTML="",t.forEach(e=>{const s=document.createElement("button");s.classList.add("category-item"),s.textContent=e,s.dataset.category=e,e==="Всі"&&s.classList.add("active-category"),s.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(n=>n.classList.remove("active-category")),s.classList.add("active-category"),v=e,o=1,l()}),u.appendChild(s)})}function l(){const t=L(),e=E(v,y),s=e.slice(0,o*t);S(),k(s);const n=Math.ceil(e.length/t);f.style.display=o>=n?"none":"block"}f.addEventListener("click",()=>{o+=1,l()});const h=c.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let y=[];async function M(){let e=1,s=[];try{for(;;){const r=(await h.get("api/animals",{params:{page:e,limit:30}})).data.animals||[];if(s=[...s,...r],r.length<30)break;e++}y=s,l()}catch(n){b.error({title:"Помилка",message:"Не вдалося завантажити тваринок.",position:"topRight"}),console.error("Axios error:",n)}}async function P(){try{const e=(await h.get("api/categories")).data||[];C(["Всі",...e.map(s=>s.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}new m(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new w(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});const d=document.getElementById("mobileMenu"),q=document.querySelector(".mobile-menu-btn"),B=document.getElementById("menuCloseBtn");q.addEventListener("click",()=>{d.classList.add("active")});B.addEventListener("click",()=>{d.classList.remove("active")});const p=document.querySelectorAll(".nav-link");p.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),p.forEach(s=>s.classList.remove("active")),this.classList.add("active")})});document.querySelectorAll(".mobile-nav-btn, .header-btn").forEach(t=>{t.addEventListener("click",()=>{const e=document.querySelector("#animals");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),d.classList.remove("active")})});function A(){return c.defaults.baseURL="https://paw-hut.b.goit.study/",c.get("/api/feedbacks").then(t=>t.data.feedbacks).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function T(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),s=t.map(n=>`
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
    `).join("");e.insertAdjacentHTML("beforeend",s)}A().then(t=>{console.log(t),T(t),new m(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function x(t){const e=Math.floor(t),s=t%1>=.5,n=5-e-(s?1:0);let r="";for(let a=0;a<e;a++)r+=`
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
      </div>`;return r}P();M();
//# sourceMappingURL=index.js.map
