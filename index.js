import{a as u,i as x,S,A}from"./assets/vendor-B6gZsb19.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function O(){return window.innerWidth>=1440?9:8}function D(e,o){return e==="Всі"?o:o.filter(t=>t.categories.some(s=>s.name===e))}function N(e,o){return o.filter(s=>s._id===e)}function y(e){console.log(e),e.classList.remove("hidden")}function b(e){e.classList.add("hidden")}const k=document.querySelector(".gallery"),L=document.querySelector(".category-nav"),l=document.querySelector(".showmore-btn"),m=document.querySelector(".loader-cards-backdrop");console.log(m);let q="Всі",c=1;function H(){k.innerHTML=""}function R(e,o=!1){e.forEach(t=>{const s=document.createElement("article");s.classList.add("pet-card"),o&&s.classList.add("new-card"),s.innerHTML=`
      <div class="card-img-wrapper">
        <img class="pet-card-image" src="${t.image||"default.jpg"}" alt="Фото ${t.name}, ${t.age}, ${t.gender}" loading="lazy"/>
      </div>
      <div class="pet-card-info">
        <span class="pet-card-type">${t.species}</span>
        <h3 class="pet-card-name">${t.name}</h3>
        <span class="pet-category-wrapper">${V(t.categories)}</span>
        <div class="pet-card-meta">
          <p class="pet-card-age">${t.age}</p>
          <p class="pet-card-gender">${t.gender}</p>
        </div>
      </div>
      <p class="pet-card-desc">${t.shortDescription}</p>
      <button class="pet-card-btn" id="${t._id}">Дізнатись більше</button>
    `,k.appendChild(s)})}function V(e){let o="";for(const t of e)o+=`<span class="pet-category">
      ${t.name}
    </span>`;return o}function j(e=1){const o=N(e,f);let t="";return o.forEach(s=>t=`
        <div class="detail-image-wrapper">
          <img class="image-tamplete" src="${s.image}"></img>
        </div>
        <div class="detail-descr-wrapper">
          <div class="detail-descr-title">
            <p>${s.species}</p>
            <h1 class="detail-pet-name">${s.name}</h1>
            <p>${s.age}&nbsp;&nbsp;&nbsp;&nbsp;  ${s.gender}</p>
                    <button type="button" class="showmore-btn take-home-btn take-home-btn-tablet">
            Взяти додому
          </button>
          </div>
          <p><span class="modal-txt">Опис:  <br /></span>
          ${s.description}
          </p>
          <p><span class="modal-txt">Здоров'я:  <br /></span> 
          ${s.healthStatus}
          </p>
          <p><span class="modal-txt">Поведінка:</span> <br />
          ${s.behavior}
          </p>
          <button type="button" class="showmore-btn take-home-btn">
            Взяти додому
          </button>
        </div>
  `),t}function F(e){L.innerHTML="",e.forEach(o=>{const t=document.createElement("button");t.classList.add("category-item"),t.textContent=o,t.dataset.category=o,o==="Всі"&&t.classList.add("active-category"),t.addEventListener("click",()=>{document.querySelectorAll(".category-item").forEach(s=>s.classList.remove("active-category")),t.classList.add("active-category"),q=o,c=1,p()}),L.appendChild(t)})}function p({append:e=!1}={}){const o=O(),t=D(q,f),s=t.slice(0,c*o);e||H();const n=(c-1)*o,r=s.slice(n,c*o);R(e?r:s,e);const a=Math.ceil(t.length/o);l.style.display=c>=a?"none":"block"}l.addEventListener("click",()=>{c+=1,y(m),b(l),document.querySelectorAll(".new-card").forEach(e=>e.classList.remove("new-card")),p({append:!0}),setTimeout(()=>b(m),200),setTimeout(K(74),200),setTimeout(()=>y(l),200)});function K(e=74){const o=document.querySelector(".gallery .new-card");if(!o)return;const t=o.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t-e,behavior:"smooth"})}const M=u.create({baseURL:"https://paw-hut.b.goit.study/",timeout:5e3,headers:{accept:"application/json"}});let f=[];async function U(){try{let o=1,t=[];for(;;){const s=Array.from({length:5},(a,P)=>M.get("api/animals",{params:{page:o+P,limit:20}})),r=(await Promise.all(s)).flatMap(a=>a.data.animals||[]);if(t=[...t,...r],r.length<20*s.length)break;o+=s.length}f=t,p()}catch(e){x.error({title:"Помилка",message:"Не вдалося завантажити тваринок.",position:"topRight"}),console.error("Axios error:",e)}}async function W(){try{const o=(await M.get("api/categories")).data||[];F(["Всі",...o.map(t=>t.name)])}catch(e){console.error("Помилка завантаження категорій:",e)}}new S(".swiper-about",{navigation:{nextEl:".swiper-about-button-next",prevEl:".swiper-about-button-prev"},pagination:{el:".swiper-about-pagination",type:"bullets",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{new A(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const o=e.target.closest(".ac-trigger");o&&setTimeout(()=>{window.innerWidth<768&&o.scrollIntoView({behavior:"smooth",block:"start"})},450)});const g=document.getElementById("mobileMenu"),_=document.querySelector(".mobile-menu-btn"),z=document.getElementById("menuCloseBtn");_.addEventListener("click",()=>{g.classList.add("active")});z.addEventListener("click",()=>{g.classList.remove("active")});const w=document.querySelectorAll(".nav-link");w.forEach(e=>{e.addEventListener("click",function(o){o.preventDefault(),w.forEach(t=>t.classList.remove("active")),this.classList.add("active")})});document.querySelectorAll(".mobile-nav-btn, .header-btn").forEach(e=>{e.addEventListener("click",()=>{const o=document.querySelector("#pets-list");o&&o.scrollIntoView({behavior:"smooth",block:"start"}),g.classList.remove("active")})});document.querySelectorAll(".mobile-nav-link, .nav-link").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const t=e.getAttribute("href");if(t&&t.startsWith("#")){const n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}document.getElementById("mobileMenu").classList.remove("active")})});const G=document.querySelector(".gallery"),T=document.querySelector(".modal-detail"),$=document.querySelector(".detail-content"),C=document.querySelector("body");G.addEventListener("click",J);document.addEventListener("keydown",function(e){e.key==="Escape"&&h()});function J(e){e.target.nodeName==="BUTTON"&&($.insertAdjacentHTML("beforeend",j(e.target.attributes.id.value)),Y())}function Y(){C.addEventListener("click",B),T.classList.remove("hide-modal"),document.body.classList.add("modal-open")}function B(e){(document.body.classList.contains("modal-open")&&e.target.nodeName==="SECTION"||e.target.classList.contains("detail-icon-close"))&&h()}function h(){T.classList.add("hide-modal"),document.body.classList.remove("modal-open"),C.removeEventListener("click",B),$.innerHTML=""}const d=document.querySelector(".modal-order"),Z=document.querySelector(".modal-btn"),E=document.querySelector(".modal-detail"),i=document.querySelector(".modal-form");document.querySelector("#form-loader");const Q="https://script.google.com/macros/s/AKfycbxvMWn2o1KlD0kaVSKKSwRLIwg2s2lHDLJmxp62IilpEI-At8MMNph678NHE8LfZELkVA/exec";E.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(d.classList.add("is-open-order"),document.body.classList.add("modal-order","is-open-order"),E.classList.add("hide-modal"))});Z.addEventListener("click",v);d.addEventListener("click",e=>{const o=!e.target.closest(".modal"),t=d.classList.contains("is-open-order");o&&t&&v()});function v(){d.classList.remove("is-open-order"),document.body.classList.remove("modal-order","is-open-order"),h()}i.addEventListener("submit",e=>{e.preventDefault();const o=i.querySelector("#user-name").value.trim(),t=i.querySelector("#user-phone").value.trim(),s=i.querySelector("#user-comment").value.trim();if(!o||o.length<2){alert("Введіть коректне ім’я (мінімум 2 символи)");return}if(!/^\+?\d{10,15}$/.test(t)){alert("Введіть коректний номер телефону (наприклад, +380991234567)");return}if(s.length>300){alert("Коментар занадто довгий (максимум 300 символів)");return}const r=new FormData;r.append("name",o),r.append("phone",t),r.append("comment",s),X(),fetch(Q,{method:"POST",body:r}).then(a=>a.text()).then(a=>{alert("Заявка надіслана!"),i.reset(),v()}).catch(a=>{alert("Помилка: "+a.message)}).finally(()=>{ee()})});const I=document.querySelector("#loader-backdrop");function X(){I.classList.remove("hidden")}function ee(){I.classList.add("hidden")}function te(){return u.defaults.baseURL="https://paw-hut.b.goit.study/",u.get("/api/feedbacks").then(e=>e.data.feedbacks).catch(e=>{throw console.error("Ошибка при получении данных:",e),e})}function oe(e){const o=document.querySelector(".stories-swiper .swiper-wrapper"),t=e.map(s=>`
      <div class="swiper-slide swiper-comment-slide">
        <div class="rating value-${s.rate} star-svg half medium">
          <div class="star-container">
            ${se(s.rate)}
          </div>
        </div>
        <div class="stories-comment-wrapper">
          <p class="description-comment">${s.description}</p>
          <p class="author-comment">${s.author}</p>
        </div>
      </div>
    `).join("");o.insertAdjacentHTML("beforeend",t)}te().then(e=>{oe(e),new S(".stories-swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".swiper-comment-button-next",prevEl:".swiper-comment-button-prev"},pagination:{el:".stories-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})});function se(e){const o=Math.floor(e),t=e%1>=.5,s=5-o-(t?1:0);let n="";for(let r=0;r<o;r++)n+=`
      <div class="star">
        <svg class="star-filled" width="20" height="19">
          <use href="/TailsHome/icons.svg#icon-star-filled"></use>
        </svg>
      </div>`;t&&(n+=`
      <div class="star">
        <svg class="star-half" width="20" height="19">
          <use href="/TailsHome/icons.svg#icon-star-half"></use>
        </svg>
      </div>`);for(let r=0;r<s;r++)n+=`
      <div class="star">
        <svg class="star-empty" width="20" height="19">
          <use href="/TailsHome/icons.svg#icon-star-outline"></use>
        </svg>
      </div>`;return n}W();U();
//# sourceMappingURL=index.js.map
