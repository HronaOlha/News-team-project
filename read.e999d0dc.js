var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("iiT47"),r("kYmk4");var i=r("i37YJ"),a=r("ep4PX"),l=r("03RTe");const s=document.getElementById("ul-gallery"),d=document.querySelector(".spinner-container");!function(){a.spinner.spin(document.body);try{const e=localStorage.getItem("read more"),t=JSON.parse(e);if(null===t)return void a.spinner.stop();0===t.length?(a.spinner.stop(),i.Report.info("There are no news You have read")):(!function(e){let t="";const n=e.map((e=>e.date)),r=[...n].sort(((e,t)=>t-e)).map((e=>{const t=new Date(e);return`${String(t.getDate()).padStart(2,0)}/${String(t.getMonth()+1).padStart(2,0)}/${String(t.getFullYear())}`})).filter(((e,t,n)=>n.indexOf(e)===t)),i=e.reduce(((e,t)=>{const n={},r=new Date(t.date);return n.date=`${String(r.getDate()).padStart(2,0)}/${String(r.getMonth()+1).padStart(2,0)}/${String(r.getFullYear())}`,n.img=t.img,n.descr=t.descr,n.title=t.title,n.link=t.link,n.alt=t.alt,n.category=t.category,n.id=t.id,n.dateArticle=t.dateArticle,e.push(n),e}),[]);a.spinner.spin(d);for(let e of r){t+=`<li>\n            <div class="date-wrap">\n                <p class="cards-date">${e}\n                   <svg class="arrow-read" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 9 0 7.287 7.5 0 15 7.287 13.238 9 7.5 3.437 1.763 9Z" fill="#111321"/>\n                   </svg>\n                   <svg class="arrow-read visually-hidden" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 0 0 1.713 7.5 9 15 1.713 13.238 0 7.5 5.563 1.763 0Z" fill="#111321"/>\n                   </svg>\n                </p>\n                <div class="clicker"></div>\n            </div>\n            <div class="news-item">\n                <div class="news-wrap">`+i.filter((t=>t.date===e)).map((e=>`<div class="news-card" news-id="${e.id}">\n      <div class="news-card__img">\n        <p class="news-card__theme">${e.category}</p>\n        <img\n          class="news-card__item"\n          src="${e.img}"\n          alt="${e.alt?e.alt:"photo"}"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n          <label for="favorite" id="${e.id}" class="label-favorite">Add to favorite</label>\n          <input type="checkbox" class="input-favorite" id="favorite"/>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">${e.title}</h2>\n      <p class="news-card__info-text">${e.descr.length>180?e.descr.slice(0,180)+"...":e.descr}</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">${e.dateArticle}</p>\n        <a class="news-card__more" href="${e.link}" id="${e.id}" target="_blank" rel="noreferrer noopener">Read more</a>\n      </div>\n    </div>`)).join("")+"</div></div></li>"}s.innerHTML=t,a.spinner.stop(),document.querySelectorAll(".news-item").forEach((e=>e.style.maxHeight=e.scrollHeight+"px")),document.querySelectorAll(".cards-date").forEach((e=>e.addEventListener("click",(()=>{const t=e.children;for(let e of t)e.classList.toggle("visually-hidden");const n=e.parentNode.nextElementSibling;"0px"!==n.style.maxHeight?n.style.maxHeight="0px":n.style.maxHeight=n.scrollHeight+"px"}))))}(t),a.spinner.stop())}catch(e){console.error(e),a.spinner.stop()}}(),(0,l.addClassesForCoincidencesMarkupAndStorage)();
//# sourceMappingURL=read.e999d0dc.js.map
