!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=s),s("l1mIK"),s("hkain"),s("4xiXN");var n=s("79A4R"),o=s("fivgP"),c=s("bpdv1"),i=document.querySelector(".gallery-container");!function(){c.spinner.spin(document.body);try{var e=localStorage.getItem("favourites"),t=JSON.parse(e);if(null===t)return void c.spinner.stop();0===t.length?(c.spinner.stop(),o.Report.info("You have no favorite news yet!")):(a=(0,n.getStorageList)("favourites").reduce((function(e,t){return e+='<div class="news-card" news-id="'.concat(t.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(t.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(t.img,'"\n          alt="').concat(t.alt?t.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(t.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(t.title,'</h2>\n      <p class="news-card__info-text">').concat(t.descr.limit(180),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(t.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(t.link,'" id="').concat(t.id,'" target="_blank" rel="noreferrer noopener"}>Read more</a>\n      </div>\n    </div>')}),""),i.insertAdjacentHTML("beforeend",a),c.spinner.stop())}catch(e){console.log(e)}var a}(),(0,n.addClassesForCoincidencesMarkupAndStoragePages)();var r={checkbox:document.getElementById("theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon")},d=localStorage.getItem("theme");d&&document.body.classList.add(d+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state")&&(r.checkbox.checked=!0,document.body.classList.add("dark-theme-site"),r.lightLabel.classList.add("light-theme-site"),r.darkLabel.classList.add("dark-theme-site"),r.iconSun.classList.add("dark-theme-site"),r.iconMoon.classList.add("dark-theme-site"),r.searchInput.classList.add("dark-theme-site"),r.queryBtn.classList.add("dark-theme-site"),r.mobileMenu.classList.add("dark-theme-site")),r.checkbox.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),r.lightLabel.classList.toggle("light-theme-site"),r.darkLabel.classList.toggle("dark-theme-site"),r.iconSun.classList.toggle("dark-theme-site"),r.iconMoon.classList.toggle("dark-theme-site"),r.searchInput.classList.toggle("dark-theme-site"),r.queryBtn.classList.toggle("dark-theme-site"),r.mobileMenu.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme",e);var t=r.checkbox.checked;localStorage.setItem("theme-checkbox-state",t)}()}));var l={checkboxMobile:document.getElementById("mobile-theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun-mob"),iconMoon:document.querySelector(".icon-moon-mob"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),menuIcon:document.querySelector(".menu-toggle__icons"),menuCross:document.querySelector(".menu-toggle__icons-cross")},m=localStorage.getItem("theme-mobile");m&&document.body.classList.add(m+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state-mobile")&&(l.checkboxMobile.checked=!0,document.body.classList.add("dark-theme-site"),l.lightLabel.classList.add("light-theme-site"),l.darkLabel.classList.add("dark-theme-site"),l.iconSun.classList.add("dark-theme-site"),l.iconMoon.classList.add("dark-theme-site"),l.searchInput.classList.add("dark-theme-site"),l.queryBtn.classList.add("dark-theme-site"),l.mobileMenu.classList.add("dark-theme-site"),l.menuIcon.classList.add("dark-theme-site"),l.menuCross.classList.add("dark-theme-site")),l.checkboxMobile.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),l.lightLabel.classList.toggle("light-theme-site"),l.darkLabel.classList.toggle("dark-theme-site"),l.iconSun.classList.toggle("dark-theme-site"),l.iconMoon.classList.toggle("dark-theme-site"),l.searchInput.classList.toggle("dark-theme-site"),l.queryBtn.classList.toggle("dark-theme-site"),l.mobileMenu.classList.toggle("dark-theme-site"),l.menuIcon.classList.toggle("dark-theme-site"),l.menuCross.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme-mobile",e);var t=l.checkboxMobile.checked;localStorage.setItem("theme-checkbox-state-mobile",t)}()}));n=s("79A4R");var u=document.getElementById("search-form"),h=document.querySelector(".gallery-container");u.addEventListener("submit",(function(e){e.preventDefault(),(0,n.deleteNoFoundMess)();var t=e.target.elements.searchQuery.value,a=(0,n.getStorageList)("favourites").filter((function(e){return e.descr.toLowerCase().includes(t.toLowerCase().trim())||e.category.toLowerCase().includes(t.toLowerCase().trim())||e.title.toLowerCase().includes(t.toLowerCase().trim())}));a.length>0?function(e){var t=e.reduce((function(e,t){return e+='<div class="news-card" news-id="'.concat(t.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(t.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(t.img,'"\n          alt="').concat(t.alt?t.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(t.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(t.title,'</h2>\n      <p class="news-card__info-text">').concat(t.descr.limit(180),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(t.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(t.link,'" id="').concat(t.id,'" target="_blank" rel="noreferrer noopener"}>Read more</a>\n      </div>\n    </div>')}),"");h.innerHTML=t}(a):(0,n.renderNoFoundMess)()}))}();
//# sourceMappingURL=favorite.6f22042d.js.map
