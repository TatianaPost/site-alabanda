jQuery(document).ready(function(e){function s(){n.addClass("is-selected"),a.removeClass("is-selected"),c.removeClass("is-selected"),o.addClass("selected"),r.removeClass("selected")}function t(){n.removeClass("is-selected"),a.addClass("is-selected"),c.removeClass("is-selected"),o.removeClass("selected"),r.addClass("selected")}function i(){n.removeClass("is-selected"),a.removeClass("is-selected"),c.addClass("is-selected")}var l=e(".cd-user-modal"),n=l.find("#cd-login"),a=l.find("#cd-signup"),c=l.find("#cd-reset-password"),d=e(".cd-switcher"),o=d.children("li").eq(0).children("a"),r=d.children("li").eq(1).children("a"),u=n.find(".cd-form-bottom-message a"),f=c.find(".cd-form-bottom-message a"),p=e(".login-signup");p.on("click",function(i){e(i.target).is(p)?e(this).children("ul").toggleClass("is-visible"):(p.children("ul").removeClass("is-visible"),l.addClass("is-visible"),e(i.target).is(".cd-signup")?t():s())}),e(".cd-user-modal").on("click",function(s){(e(s.target).is(l)||e(s.target).is(".cd-close-form"))&&l.removeClass("is-visible")}),e(document).keyup(function(e){"27"==e.which&&l.removeClass("is-visible")}),d.on("click",function(i){i.preventDefault(),e(i.target).is(o)?s():t()}),e(".hide-password").on("click",function(){var s=e(this),t=s.prev("input");"password"==t.attr("type")?t.attr("type","text"):t.attr("type","password"),s.text("Hide"==s.text()?"Show":"Hide"),t.putCursorAtEnd()}),u.on("click",function(e){e.preventDefault(),i()}),f.on("click",function(e){e.preventDefault(),s()}),n.find('input[type="submit"]').on("click",function(e){e.preventDefault(),n.find('input[type="email"]').toggleClass("has-error").next("span").toggleClass("is-visible")}),a.find('input[type="submit"]').on("click",function(e){e.preventDefault(),a.find('input[type="email"]').toggleClass("has-error").next("span").toggleClass("is-visible")})}),jQuery.fn.putCursorAtEnd=function(){return this.each(function(){if(this.setSelectionRange){var e=2*$(this).val().length;this.setSelectionRange(e,e)}else $(this).val($(this).val())})};