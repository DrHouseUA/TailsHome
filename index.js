import{a as l,i as M,S as f,A as C}from"./assets/vendor-D3HxRb6v.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();function q(){return window.innerWidth>=1440?9:8}function B(t,e){return t==="Всі"?e:e.filter(s=>s.categories.some(o=>o.name===t))}function P(t,e){return e.filter(o=>o._id===t)}const v=document.querySelector(".gallery"),p=document.querySelector(".category-nav"),h=document.querySelector(".showmore-btn");let b="Всі",r=1;function T(){v.innerHTML=""}function I(t){t.forEach(e=>{const s=document.createElement("article");s.classList.add("pet-card"),s.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${e.image||"default.jpg"}" alt="Фото ${e.name}, ${e.age}, ${e.gender}" loading="lazy"/>
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${e.species}</span>
        <h3 class="pet-card-name">${e.name}</h3>
       <span class="pet-category-wrapper">${O(e.categories)}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${e.age}</p>
          <p class="pet-card-gender">${e.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${e.shortDescription}</p>
      <button class="pet-card-btn" id="${e._id}">Дізнатись більше</button>
    `,v.appendChild(s)})}function O(t){let e="";for(const s of t)e+=`<span class="pet-category">
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
  `),s}function A(t){p.innerHTML="",t.forEach(e=>{const s=document.createElement("button");s.classList.add("category-item"),s.textContent=e,s.dataset.category=e,e==="Всі"&&s.classList.add("active-category"),s.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(o=>o.classList.remove("active-category")),s.classList.add("active-category"),b=e,r=1,d()}),p.appendChild(s)})}function d(){const t=q(),e=B(b,u),s=e.slice(0,r*t);T(),I(s);const o=Math.ceil(e.length/t);h.style.display=r>=o?"none":"block"}h.addEventListener("click",()=>{r+=1,d()});const y=l.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let u=[];async function D(){let e=1,s=[];try{for(;;){const n=(await y.get("api/animals",{params:{page:e,limit:30}})).data.animals||[];if(s=[...s,...n],n.length<30)break;e++}u=s,d()}catch(o){M.error({title:"Помилка",message:"Не вдалося завантажити тваринок.",position:"topRight"}),console.error("Axios error:",o)}}async function H(){try{const e=(await y.get("api/categories")).data||[];A(["Всі",...e.map(s=>s.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}new f(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new C(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});const m=document.getElementById("mobileMenu"),j=document.querySelector(".mobile-menu-btn"),N=document.getElementById("menuCloseBtn");j.addEventListener("click",()=>{m.classList.add("active")});N.addEventListener("click",()=>{m.classList.remove("active")});const g=document.querySelectorAll(".nav-link");g.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),g.forEach(s=>s.classList.remove("active")),this.classList.add("active")})});document.querySelectorAll(".mobile-nav-btn, .header-btn").forEach(t=>{t.addEventListener("click",()=>{const e=document.querySelector("#animals");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),m.classList.remove("active")})});const i=document.querySelector(".modal-order"),R=document.querySelector(".modal-btn"),V=document.querySelector(".take-home-btn"),F=document.querySelector(".modal-detail");V.addEventListener("click",()=>{i.classList.add("is-open-order"),document.body.classList.add("modal-order","is-open-order"),F.classList.add("hide-modal")});R.addEventListener("click",L);i.addEventListener("click",t=>{const e=!t.target.closest(".modal"),s=i.classList.contains("is-open-order");e&&s&&L()});function L(){i.classList.remove("is-open-order"),document.body.classList.remove("modal-order","is-open-order")}function U(){return l.defaults.baseURL="https://paw-hut.b.goit.study/",l.get("/api/feedbacks").then(t=>t.data.feedbacks).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function z(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),s=t.map(o=>`
      <div class="swiper-slide swiper-comment-slide">
        <div class="rating value-${o.rate} star-svg half small">
          <div class="star-container">
            ${W(o.rate)}
          </div>
        </div>
        <div>
          <p class="description-comment">${o.description}</p>
          <p class="author-comment">${o.author}</p>
        </div>
      </div>
    `).join("");e.insertAdjacentHTML("beforeend",s)}U().then(t=>{console.log(t),z(t),new f(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function W(t){const e=Math.floor(t),s=t%1>=.5,o=5-e-(s?1:0);let n="";for(let a=0;a<e;a++)n+=`
      <div class="star">
        <svg class="star-filled" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>`;s&&(n+=`
      <div class="star">
        <svg class="star-half" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
      </div>`);for(let a=0;a<o;a++)n+=`
      <div class="star">
        <svg class="star-empty" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
      </div>`;return n}H();D();const _=document.querySelector(".gallery"),w=document.querySelector(".modal-detail"),E=document.querySelector(".detail-content"),k=document.querySelector("body");_.addEventListener("click",G);document.addEventListener("keydown",function(t){t.key==="Escape"&&$()});function G(t){t.target.nodeName==="BUTTON"&&(E.insertAdjacentHTML("beforeend",x(t.target.attributes.id.value)),K())}function K(){k.addEventListener("click",S),w.classList.remove("hide-modal"),document.body.classList.add("modal-open")}function S(t){(document.body.classList.contains("modal-open")&&t.target.nodeName==="SECTION"||t.target.classList.contains("detail-icon-close"))&&$()}function $(){w.classList.add("hide-modal"),document.body.classList.remove("modal-open"),k.removeEventListener("click",S),E.innerHTML=""}
//# sourceMappingURL=index.js.map
