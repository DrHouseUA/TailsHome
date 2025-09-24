import{a as l,i as C,S as h,A as q}from"./assets/vendor-B6gZsb19.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();function B(){return window.innerWidth>=1440?9:8}function T(t,e){return t==="Всі"?e:e.filter(s=>s.categories.some(o=>o.name===t))}function P(t,e){return e.filter(o=>o._id===t)}const b=document.querySelector(".gallery"),f=document.querySelector(".category-nav"),y=document.querySelector(".showmore-btn");let L="Всі",r=1;function I(){b.innerHTML=""}function O(t){t.forEach(e=>{const s=document.createElement("article");s.classList.add("pet-card"),s.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${e.image||"default.jpg"}" alt="Фото ${e.name}, ${e.age}, ${e.gender}" loading="lazy"/>
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${e.species}</span>
        <h3 class="pet-card-name">${e.name}</h3>
       <span class="pet-category-wrapper">${A(e.categories)}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${e.age}</p>
          <p class="pet-card-gender">${e.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${e.shortDescription}</p>
      <button class="pet-card-btn" id="${e._id}">Дізнатись більше</button>
    `,b.appendChild(s)})}function A(t){let e="";for(const s of t)e+=`<span class="pet-category">
      ${s.name}
    </span>`;return e}function x(t=1){const e=P(t,u);let s="";return e.forEach(o=>s=`
        <div class="detail-image-wrapper">
          <img class="image-tamplete" src="${o.image}"></img>
        </div>
        <div class="detail-descr-wrapper">
          <div class="detail-descr-title">
            <p>${o.species}</p>
            <h1 class="detail-pet-name">${o.name}</h1>
            <p>${o.age}&nbsp;&nbsp;&nbsp;&nbsp;  ${o.gender}</p>
                    <button type="button" class="showmore-btn take-home-btn take-home-btn-tablet">
            Взяти додому
          </button>
          </div>
          <p><span class="modal-txt">Опис:  <br /></span>
          ${o.description}
          </p>
          <p><span class="modal-txt">Здоров'я:  <br /></span> 
          ${o.healthStatus}
          </p>
          <p><span class="modal-txt">Поведінка:</span> <br />
          ${o.behavior}
          </p>
          <button type="button" class="showmore-btn take-home-btn">
            Взяти додому
          </button>
        </div>
  `),s}function H(t){f.innerHTML="",t.forEach(e=>{const s=document.createElement("button");s.classList.add("category-item"),s.textContent=e,s.dataset.category=e,e==="Всі"&&s.classList.add("active-category"),s.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(o=>o.classList.remove("active-category")),s.classList.add("active-category"),L=e,r=1,d()}),f.appendChild(s)})}function d(){const t=B(),e=T(L,u),s=e.slice(0,r*t);I(),O(s);const o=Math.ceil(e.length/t);y.style.display=r>=o?"none":"block"}y.addEventListener("click",()=>{r+=1,d()});const w=l.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let u=[];async function D(){let e=1,s=[];try{for(;;){const n=(await w.get("api/animals",{params:{page:e,limit:30}})).data.animals||[];if(s=[...s,...n],n.length<30)break;e++}u=s,d()}catch(o){C.error({title:"Помилка",message:"Не вдалося завантажити тваринок.",position:"topRight"}),console.error("Axios error:",o)}}async function N(){try{const e=(await w.get("api/categories")).data||[];H(["Всі",...e.map(s=>s.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}new h(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new q(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});const m=document.getElementById("mobileMenu"),j=document.querySelector(".mobile-menu-btn"),V=document.getElementById("menuCloseBtn");j.addEventListener("click",()=>{m.classList.add("active")});V.addEventListener("click",()=>{m.classList.remove("active")});const g=document.querySelectorAll(".nav-link");g.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),g.forEach(s=>s.classList.remove("active")),this.classList.add("active")})});document.querySelectorAll(".mobile-nav-btn, .header-btn").forEach(t=>{t.addEventListener("click",()=>{const e=document.querySelector("#pets-list");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),m.classList.remove("active")})});document.querySelectorAll(".mobile-nav-link, .nav-link").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const s=t.getAttribute("href");if(s&&s.startsWith("#")){const n=document.querySelector(s);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}document.getElementById("mobileMenu").classList.remove("active")})});const R=document.querySelector(".gallery"),E=document.querySelector(".modal-detail"),k=document.querySelector(".detail-content"),S=document.querySelector("body");R.addEventListener("click",U);document.addEventListener("keydown",function(t){t.key==="Escape"&&p()});function U(t){t.target.nodeName==="BUTTON"&&(k.insertAdjacentHTML("beforeend",x(t.target.attributes.id.value)),F())}function F(){S.addEventListener("click",M),E.classList.remove("hide-modal"),document.body.classList.add("modal-open")}function M(t){(document.body.classList.contains("modal-open")&&t.target.nodeName==="SECTION"||t.target.classList.contains("detail-icon-close"))&&p()}function p(){E.classList.add("hide-modal"),document.body.classList.remove("modal-open"),S.removeEventListener("click",M),k.innerHTML=""}const i=document.querySelector(".modal-order"),W=document.querySelector(".modal-btn"),v=document.querySelector(".modal-detail");v.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&(i.classList.add("is-open-order"),document.body.classList.add("modal-order","is-open-order"),v.classList.add("hide-modal"))});W.addEventListener("click",$);i.addEventListener("click",t=>{const e=!t.target.closest(".modal"),s=i.classList.contains("is-open-order");e&&s&&$()});function $(){i.classList.remove("is-open-order"),document.body.classList.remove("modal-order","is-open-order"),p()}function z(){return l.defaults.baseURL="https://paw-hut.b.goit.study/",l.get("/api/feedbacks").then(t=>t.data.feedbacks).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function _(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),s=t.map(o=>`
      <div class="swiper-slide swiper-comment-slide">
        <div class="rating value-${o.rate} star-svg half medium">
          <div class="star-container">
            ${G(o.rate)}
          </div>
        </div>
        <div class="stories-comment-wrapper">
          <p class="description-comment">${o.description}</p>
          <p class="author-comment">${o.author}</p>
        </div>
      </div>
    `).join("");e.insertAdjacentHTML("beforeend",s)}z().then(t=>{_(t),new h(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function G(t){const e=Math.floor(t),s=t%1>=.5,o=5-e-(s?1:0);let n="";for(let a=0;a<e;a++)n+=`
      <div class="star">
        <svg class="star-filled" width="20" height="19">
          <use href="/TailsHome/icons.svg#icon-star-filled"></use>
        </svg>
      </div>`;s&&(n+=`
      <div class="star">
        <svg class="star-half" width="20" height="19">
          <use href="/TailsHome/icons.svg#icon-star-half"></use>
        </svg>
      </div>`);for(let a=0;a<o;a++)n+=`
      <div class="star">
        <svg class="star-empty" width="20" height="19">
          <use href="/TailsHome/icons.svg#icon-star-outline"></use>
        </svg>
      </div>`;return n}N();D();
//# sourceMappingURL=index.js.map
