import{a as c,i as w,S as m,A as b}from"./assets/vendor-bF2elJnR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const g=document.querySelector(".gallery"),u=document.querySelector(".category-nav"),f=document.querySelector(".showmore-btn"),h=c.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let l=[],d="Всі",i=1;function v(){return window.innerWidth>=1440?9:8}function L(){g.innerHTML=""}function E(t){t.forEach(e=>{const r=document.createElement("article");r.classList.add("pet-card"),r.innerHTML=`
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
    `,g.appendChild(r)})}function p(){const t=v(),e=d==="Всі"?l:l.filter(a=>a.categories.some(y=>y.name===d)),r=Math.ceil(e.length/t),n=(i-1)*t,s=n+t,o=e.slice(n,s);E(o),f.style.display=i>=r?"none":"block"}async function $(){try{l=(await h.get("api/animals")).data.animals||[],p()}catch(t){w.error({title:"Помилка",message:"Не вдалося завантажити тваринок. Спробуйте пізніше.",position:"topRight"}),console.error("Axios error:",t)}}async function C(){try{const e=(await h.get("api/categories")).data||[];P(["Всі",...e.map(r=>r.name)])}catch(t){console.error("Помилка завантаження категорій:",t)}}function P(t){u.innerHTML="",t.forEach(e=>{const r=document.createElement("button");r.classList.add("category-item"),r.textContent=e,r.dataset.category=e,e==="Всі"&&r.classList.add("active"),r.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(n=>n.classList.remove("active")),r.classList.add("active"),d=e,i=1,L(),p()}),u.appendChild(r)})}f.addEventListener("click",()=>{i+=1,p()});C();$();new m(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new b(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",t=>{const e=t.target.closest(".ac-trigger");e&&setTimeout(()=>{window.innerWidth<768&&e.scrollIntoView({behavior:"smooth",block:"start"})},450)});function x(){return c.defaults.baseURL="https://paw-hut.b.goit.study/",c.get("/api/feedbacks").then(t=>(console.log(t.data.feedbacks),t.data.feedbacks)).catch(t=>{throw console.error("Ошибка при получении данных:",t),t})}function M(t){const e=document.querySelector(".stories-swiper .swiper-wrapper"),r=t.map(n=>`
        <div class="swiper-slide swiper-comment-slide">
          <p class="description-comment">${n.description}</p>
          <p class='author-comment'>${n.author}</p>
        </div>
      `).join("");e.insertAdjacentHTML("beforeend",r)}x().then(t=>{M(t),new m(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});
//# sourceMappingURL=index.js.map
