import{A as v,S,i as n}from"./assets/vendor-ad8d4d00.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const B=v.create({baseURL:"https://pixabay.com/api/"});async function p(o,t,c){const a={key:"43252696-8c48e7f381a0da5ec3ef140c1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:c};return await B.get("",{params:a})}const i={form:document.querySelector(".overall-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderButton:document.querySelector(".load-button")};function f(){i.loaderButton.classList.remove("hidden")}function d(){i.loaderButton.classList.add("hidden")}function h(){i.loader.classList.remove("hidden")}function l(){i.loader.classList.add("hidden")}function I(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}function y(o){const t=o.map(({largeImageURL:a,webformatURL:e,tags:r,likes:s,views:L,comments:b,downloads:w})=>`
        <li class="gallery-item">
          <a class="open-large-image" href="${a}">
            <img class="gallery-img" src="${e}" alt="${r}" />
          </a>
          <ul class="info">
            <li class="info-item">
              <p>Likes</p>
              <span class="info-item-details">${s}</span>
            </li>
            <li class="info-item">
              <p>Views</p>
              <span class="info-item-details">${L}</span>
            </li>
            <li class="info-item">
              <p>Downloads</p>
              <span class="info-item-details">${w}</span>
            </li>
            <li class="info-item">
              <p>Comments</p>
              <span class="info-item-details">${b}</span>
            </li>
          </ul>
        </li>
      `).join("");i.gallery.insertAdjacentHTML("beforeend",t),new S(".gallery a",{className:"simple-lightbox",captionsData:"alt",captionDelay:250,animationSpeed:400,overlayOpacity:.5}).refresh()}let u=12,g=0,m;l();i.form.addEventListener("submit",q);i.loaderButton.addEventListener("click",x);async function q(o){o.preventDefault(),g=1,i.gallery.innerHTML="",h(),m=o.currentTarget.elements.searchImg.value.trim(),m.length===0&&(n.warning({position:"topRight",message:"Пусте поле, генеруємо випадкові зображення..."}),l(),d()),o.currentTarget.reset();try{const t=await p(m,u,g);t.data.hits.length||(n.error({position:"topRight",title:"Error",message:"По вашому запиту нічого не знайдено"}),l(),d()),y(t.data.hits),l(),t.data.hits.length<u?d():f()}catch{n.error({position:"topRight",title:"Error",message:"Невідома помилка"})}}async function x(){g+=1,h();try{const o=await p(m,u,g);y(o.data.hits),l(),I(),o.data.hits.length<u?(d(),n.warning({position:"topRight",message:"Кінець колекції зображень"})):f()}catch{n.error({position:"topRight",title:"Error",message:"Невідома помилка"})}}
//# sourceMappingURL=commonHelpers.js.map
