import{a as c,i as $,S as g,A as S}from"./assets/vendor-D3HxRb6v.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function C(){return window.innerWidth>=1440?9:8}function M(t,e){return t==="Всі"?e:e.filter(s=>s.categories.some(n=>n.name===t))}function P(t,e){return e.filter(n=>n._id===t)}const f=document.querySelector(".gallery"),p=document.querySelector(".category-nav"),v=document.querySelector(".showmore-btn");let h="Всі",r=1;function q(){f.innerHTML=""}function B(t){t.forEach(e=>{const s=document.createElement("article");s.classList.add("pet-card"),s.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${e.image||"default.jpg"}" alt="Фото ${e.name}, ${e.age}, ${e.gender}" loading="lazy"/>
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${e.species}</span>
        <h3 class="pet-card-name">${e.name}</h3>
       <span class="pet-category-wrapper">${T(e.categories)}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${e.age}</p>
          <p class="pet-card-gender">${e.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${e.shortDescription}</p>
      <button class="pet-card-btn" id="${e._id}">Дізнатись більше</button>
    `,f.appendChild(s)})}function T(t){let e="";for(const s of t)e+=`<span class="pet-category">
      ${s.name}
    </span>`;return e}function I(t=1){const e=P(t,d);let s="";return e.forEach(n=>s=`
        <div class="detail-image-wrapper">
          <img class="image-tamplete" src="${n.image}"></img>
        </div>
        <div class="detail-descr-wrapper">
          <div class="detail-descr-title">
            <p>${n.species}</p>
            <h1 class="detail-pet-name">${n.name}</h1>
            <p>${n.age}&nbsp;&nbsp;&nbsp;&nbsp;  ${n.gender}</p>
                    <button type="button" class="showmore-btn take-home-btn take-home-btn-tablet">
            Взяти додому
          </button>
          </div>
          <p><span class="modal-txt">Опис:  <br /></span>
          ${n.description}
          </p>
          <p><span class="modal-txt">Здоров'я:  <br /></span> 
          ${n.healthStatus}
          </p>
          <p><span class="modal-txt">Поведінка:</span> <br />
          ${n.behavior}
          </p>
          <button type="button" class="showmore-btn take-home-btn">
            Взяти додому
          </button>
        </div>
  `),s}function x(t){p.innerHTML="",t.forEach(e=>{const s=document.createElement("button");s.classList.add("category-item"),s.textContent=e,s.dataset.category=e,e==="Всі"&&s.classList.add("active-category"),s.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(n=>n.classList.remove("active-category")),s.classList.add("active-category"),h=e,r=1,l()}),p.appendChild(s)})}function l(){const t=C(),e=M(h,d),s=e.slice(0,r*t);q(),B(s);const n=Math.ceil(e.length/t);v.style.display=r>=n?"none":"block"}v.addEventListener("click",()=>{r+=1,l()});const b=c.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let d=[];async function A(){let e=1,s=[];try{for(;;){const a=(await b.get("api/animals",{params:{page:e,limit:30}})).data.animals||[];if(s=[...s,...a],a.length<30)break;e++}d=s,l()}catch(n){$.error({title:"Помилка",message:"Не вдалося завантажити тваринок.",position:"topRight"}),console.error("Axios error:",n)}}async function O(){try{const e=(await b.get("api/categories")).data||[];x(["Всі",...e.map(s=>s.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}new g(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new S(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});const u=document.getElementById("mobileMenu"),j=document.querySelector(".mobile-menu-btn"),D=document.getElementById("menuCloseBtn");j.addEventListener("click",()=>{u.classList.add("active")});D.addEventListener("click",()=>{u.classList.remove("active")});const m=document.querySelectorAll(".nav-link");m.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),m.forEach(s=>s.classList.remove("active")),this.classList.add("active")})});document.querySelectorAll(".mobile-nav-btn, .header-btn").forEach(t=>{t.addEventListener("click",()=>{const e=document.querySelector("#animals");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),u.classList.remove("active")})});function H(){return c.defaults.baseURL="https://paw-hut.b.goit.study/",c.get("/api/feedbacks").then(t=>t.data.feedbacks).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function N(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),s=t.map(n=>`
      <div class="swiper-slide swiper-comment-slide">
        <div class="rating value-${n.rate} star-svg half small">
          <div class="star-container">
            ${R(n.rate)}
          </div>
        </div>
        <div>
          <p class="description-comment">${n.description}</p>
          <p class="author-comment">${n.author}</p>
        </div>
      </div>
    `).join("");e.insertAdjacentHTML("beforeend",s)}H().then(t=>{console.log(t),N(t),new g(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function R(t){const e=Math.floor(t),s=t%1>=.5,n=5-e-(s?1:0);let a="";for(let o=0;o<e;o++)a+=`
      <div class="star">
        <svg class="star-filled" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-filled"></use>
        </svg>
      </div>`;s&&(a+=`
      <div class="star">
        <svg class="star-half" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-half"></use>
        </svg>
      </div>`);for(let o=0;o<n;o++)a+=`
      <div class="star">
        <svg class="star-empty" width="20" height="19">
          <use href="../svg/icons.svg#icon-star-outline"></use>
        </svg>
      </div>`;return a}O();A();const V=document.querySelector(".gallery"),y=document.querySelector(".modal-detail"),w=document.querySelector(".detail-content"),L=document.querySelector("body");V.addEventListener("click",F);document.addEventListener("keydown",function(t){t.key==="Escape"&&k()});function F(t){t.target.nodeName==="BUTTON"&&(w.insertAdjacentHTML("beforeend",I(t.target.attributes.id.value)),U())}function U(){L.addEventListener("click",E),y.classList.remove("hide-modal"),document.body.classList.add("modal-open")}function E(t){(document.body.classList.contains("modal-open")&&t.target.nodeName==="SECTION"||t.target.classList.contains("detail-icon-close"))&&k()}function k(){y.classList.add("hide-modal"),document.body.classList.remove("modal-open"),L.removeEventListener("click",E),w.innerHTML=""}
//# sourceMappingURL=index.js.map
