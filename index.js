import{a as n,i as g,S as u,A as h}from"./assets/vendor-bF2elJnR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const c=document.querySelector(".gallery"),p=document.querySelectorAll(".category-item"),w=document.querySelector(".showmore-btn");let l=[];const y=n.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});function v(){c.innerHTML=""}function m(e){const t=e==="Всі"?l:l.filter(r=>r.categories[0].name===e);if(t.length===0){c.innerHTML="<p>Немає тваринок у цій категорії</p>";return}t.forEach(r=>{const a=document.createElement("div");a.classList.add("pet-card"),a.innerHTML=`
      <div class="card-img-wrapper">
       <img class="pet-card-image" src="${r.image}" alt="${r.name}" />
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${r.species}</span>
        <h3 class="pet-card-name">${r.name}</h3>
        <span class="pet-category">${r.categories[0].name}</span>
        <div class="pet-card-meta">
        <p class="pet-card-age">${r.age}</p>
        <p class="pet-card-gender">${r.gender}</p>
        </div>
        
      </div>
        <p class="pet-card-desc">${r.shortDescription}</p>
        <button class="pet-card-btn">Дізнатись більше</button>
    `,c.appendChild(a)})}let d=1;async function f(e=1){try{const r=window.innerWidth>=1440?9:8,a=await y.get(`api/animals?page=${e}&limit=${r}`);console.log("API response:",a.data),l=[...Array.isArray(a.data)?a.data:a.data.animals||[]],m("Всі")}catch(t){g.error({title:"Помилка",message:"Не вдалося завантажити тваринок. Спробуйте пізніше.",position:"topRight",timeout:5e3}),console.error("Axios error:",t)}}p.forEach(e=>{e.addEventListener("click",()=>{p.forEach(t=>t.classList.remove("active")),e.classList.add("active"),v(),m(e.dataset.category),console.log(e.dataset.category)})});w.addEventListener("click",b);function b(e){d+=1,f(d)}f(d);new u(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new h(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const t=e.target.closest(".ac-trigger");t&&setTimeout(()=>{window.innerWidth<768&&t.scrollIntoView({behavior:"smooth",block:"start"})},450)});function L(){return n.defaults.baseURL="https://paw-hut.b.goit.study/",n.get("/api/feedbacks").then(e=>(console.log(e.data.feedbacks),e.data.feedbacks)).catch(e=>{throw console.error("Ошибка при получении данных:",e),e})}function E(e){const t=document.querySelector(".stories-swiper .swiper-wrapper"),r=e.map(a=>`
        <div class="swiper-slide swiper-comment-slide">
          <p class="description-comment">${a.description}</p>
          <p class='author-comment'>${a.author}</p>
        </div>
      `).join("");t.insertAdjacentHTML("beforeend",r)}L().then(e=>{E(e),new u(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});
//# sourceMappingURL=index.js.map
