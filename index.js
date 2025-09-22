import{a as c,i as k,S as p,A as S}from"./assets/vendor-D3HxRb6v.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function C(){return window.innerWidth>=1440?9:8}function M(t,e){return t==="Всі"?e:e.filter(s=>s.categories.some(n=>n.name===t))}const g=document.querySelector(".gallery"),u=document.querySelector(".category-nav"),f=document.querySelector(".showmore-btn");let v="Всі",a=1;function $(){g.innerHTML=""}function q(t){t.forEach(e=>{const s=document.createElement("article");s.classList.add("pet-card"),s.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${e.image||"default.jpg"}" alt="Фото ${e.name}, ${e.age}, ${e.gender}" loading="lazy"/>
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${e.species}</span>
        <h3 class="pet-card-name">${e.name}</h3>
       <span class="pet-category-wrapper">${P(e.categories)}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${e.age}</p>
          <p class="pet-card-gender">${e.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${e.shortDescription}</p>
      <button class="pet-card-btn" id="${e._id}">Дізнатись більше</button>
    `,g.appendChild(s),console.log(e.categories)})}function P(t){let e="";for(const s of t)e+=`<span class="pet-category">
      ${s.name}
    </span>`;return e}function B(t){u.innerHTML="",t.forEach(e=>{const s=document.createElement("button");s.classList.add("category-item"),s.textContent=e,s.dataset.category=e,e==="Всі"&&s.classList.add("active-category"),s.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(n=>n.classList.remove("active-category")),s.classList.add("active-category"),v=e,a=1,l()}),u.appendChild(s)})}function l(){const t=C(),e=M(v,y),s=e.slice(0,a*t);$(),q(s);const n=Math.ceil(e.length/t);f.style.display=a>=n?"none":"block"}f.addEventListener("click",()=>{a+=1,l()});const h=c.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let y=[];async function I(){let e=1,s=[];try{for(;;){const o=(await h.get("api/animals",{params:{page:e,limit:30}})).data.animals||[];if(s=[...s,...o],o.length<30)break;e++}y=s,l()}catch(n){k.error({title:"Помилка",message:"Не вдалося завантажити тваринок.",position:"topRight"}),console.error("Axios error:",n)}}async function A(){try{const e=(await h.get("api/categories")).data||[];B(["Всі",...e.map(s=>s.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}new p(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new S(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});const d=document.getElementById("mobileMenu"),T=document.querySelector(".mobile-menu-btn"),O=document.getElementById("menuCloseBtn");T.addEventListener("click",()=>{d.classList.add("active")});O.addEventListener("click",()=>{d.classList.remove("active")});const m=document.querySelectorAll(".nav-link");m.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),m.forEach(s=>s.classList.remove("active")),this.classList.add("active")})});document.querySelectorAll(".mobile-nav-btn, .header-btn").forEach(t=>{t.addEventListener("click",()=>{const e=document.querySelector("#animals");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),d.classList.remove("active")})});function x(){return c.defaults.baseURL="https://paw-hut.b.goit.study/",c.get("/api/feedbacks").then(t=>t.data.feedbacks).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function j(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),s=t.map(n=>`
      <div class="swiper-slide swiper-comment-slide">
        <div class="rating value-${n.rate} star-svg half small">
          <div class="star-container">
            ${N(n.rate)}
          </div>
        </div>
        <div>
          <p class="description-comment">${n.description}</p>
          <p class="author-comment">${n.author}</p>
        </div>
      </div>
    `).join("");e.insertAdjacentHTML("beforeend",s)}x().then(t=>{console.log(t),j(t),new p(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function N(t){const e=Math.floor(t),s=t%1>=.5,n=5-e-(s?1:0);let o="";for(let r=0;r<e;r++)o+=`
      <div class="star">
        <svg class="star-filled" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>`;s&&(o+=`
      <div class="star">
        <svg class="star-half" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
      </div>`);for(let r=0;r<n;r++)o+=`
      <div class="star">
        <svg class="star-empty" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
      </div>`;return o}A();I();const D=document.querySelector(".gallery"),b=document.querySelector(".modal-detail"),w=document.querySelector("body");D.addEventListener("click",H);document.addEventListener("keydown",function(t){t.key==="Escape"&&E()});function H(t){console.dir(t.target),t.target.nodeName==="IMG"&&R()}function R(){w.addEventListener("click",L),b.classList.remove("hide-modal"),document.body.classList.add("modal-open")}function L(t){console.dir(t.target),console.log("work in modal"),console.log(t.target.classList),(document.body.classList.contains("modal-open")&&t.target.nodeName==="SECTION"||t.target.classList.contains("detail-icon-close"))&&E()}function E(){b.classList.add("hide-modal"),document.body.classList.remove("modal-open"),w.removeEventListener("click",L)}
//# sourceMappingURL=index.js.map
