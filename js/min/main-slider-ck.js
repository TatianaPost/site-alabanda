!function(){function e(){f.addEventListener("click",function(e){e.preventDefault(),a("next")}),x.addEventListener("click",function(e){e.preventDefault(),a("prev")}),setInterval(function(){a("next")},6e3)}function n(){m.style.display="none"}function t(){m.style.display="block"}function i(){c.className=c.className.replace(/\bfx.*?\b/g,""),o.selectedIndex?(classie.addClass(c,o.options[o.selectedIndex].value),t()):n()}function a(e){if(p)return!1;p=!0;var n=0,t=d[v];"next"===e?v=u-1>v?v+1:0:"prev"===e&&(v=v>0?v-1:u-1);var i=d[v],a=function(){this.removeEventListener(l,a),classie.removeClass(this,"current"),classie.removeClass(this,"next"===e?"navOutNext":"navOutPrev"),++n,2===n&&(p=!1)},r=function(){this.removeEventListener(l,r),classie.addClass(this,"current"),classie.removeClass(this,"next"===e?"navInNext":"navInPrev"),++n,2===n&&(p=!1)};s.animations?(t.addEventListener(l,a),i.addEventListener(l,r)):(a(),r()),classie.addClass(t,"next"===e?"navOutNext":"navOutPrev"),classie.addClass(i,"next"===e?"navInNext":"navInPrev")}var s={animations:Modernizr.cssanimations},r={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},l=r[Modernizr.prefixed("animation")],o=document.getElementById("fxselect"),c=document.getElementById("main-slider"),d=c.querySelector("ul.itemwrap").children,v=0,u=d.length,m=c.querySelector("nav"),f=m.querySelector(".next"),x=m.querySelector(".prev"),p=!1;e()}();