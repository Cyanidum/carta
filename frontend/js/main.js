
Element.prototype.closest || (Element.prototype.closest = function(t) { for (var e = this; e;) { if (e.matches(t)) return e;e = e.parentElement } return null });

Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(e) { "use strict"; if (null == e) throw new TypeError("Cannot convert first argument to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) { var o = arguments[n]; if (null != o) for (var a = Object.keys(Object(o)), c = 0, b = a.length; c < b; c++) { var i = a[c], l = Object.getOwnPropertyDescriptor(o, i); void 0 !== l && l.enumerable && (t[i] = o[i]) } } return t } });

window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);

function $$(e, o, t) { "function" != typeof o ? o = o || document : (t = o, o = document); var c = o.querySelectorAll(e); return c = Array.prototype.slice.call(o.querySelectorAll(e)), "function" == typeof t && c.forEach(function(e, o, c) { t(e, o, c) }), c }

function addCss(r, s) { var a = function(r) { Object.assign(r.style, s) }; if (Array.isArray(r))
        for (var n = r.length - 1; n >= 0; n--) a(r[n]);
    else a(r) }

function getElementIndex(e) { for (var n = 0; e = e.previousElementSibling;) n++; return n }

function h_el(r) { return !!(Array.isArray(r) && r.length > 0) }

function debugging() { [].forEach.call($$("*"), function (n) { n.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) }) }

gsap.registerPlugin(ScrollTrigger);


let valueDisplays = document.querySelectorAll('#count');
let interval = 1000;
let subDisplays = document.querySelectorAll('#count-1');
let subInterval = 3000;
let flag = true;
const mediaQuery = window.matchMedia('(min-width: 768px)');

window.addEventListener('scroll', function num() {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.numbers').forEach((el, i) => {
        if (el.offsetTop <= scrollDistance + 300 && flag == true) {
            flag = false;
            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute('data-max'));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue >= endValue) {
                        clearInterval(counter);
                    }
                }, duration)
            });
            subDisplays.forEach((subDisplay) => {
                let startValue = 0;
                let endValue = parseInt(subDisplay.getAttribute('data-max'));
                let duration = Math.floor(subInterval / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    subDisplay.textContent = startValue;
                    if (startValue >= endValue) {
                        clearInterval(counter);
                    }
                }, duration)
            });
        }
    })
});

// header-animations

let headerTimeline = gsap.timeline();

headerTimeline.from(".header__logo",{opacity: 0, duration: 1})
headerTimeline.from(".header__products",{duration: 0.5, opacity: 0})
headerTimeline.from(".header__cases",{duration: 0.5, opacity: 0})
headerTimeline.from(".header__pricing",{duration: 0.5, opacity: 0})
headerTimeline.from(".header__resources",{duration: 0.5, opacity: 0})
headerTimeline.from(".header__company",{duration: 0.5, opacity: 0})
headerTimeline.from(".header__sign-in", {duration: 0.5, opacity: 0 })

// collage-animations

gsap.from(".intro__left-first, .intro__right-first", { duration: 1.3, opacity: 0, delay: 1 })
gsap.from(".intro__left-second",{duration: 1, opacity: 0, x: -200 + 'em', delay: 1})
gsap.from(".intro__right-second",{duration: 1, opacity: 0, x: 200 + 'em', delay: 1})

// collage-text-animations

let introTimeline = gsap.timeline();

introTimeline.from(".intro__title", {duration: 1, delay: 1, opacity: 0, y: -180 + 'em', ease: "circ"})
introTimeline.from(".intro__subtitle", {duration: 1, opacity: 0, y: -180 + 'em', ease: "circ"})
introTimeline.from(".intro__buttons", {duration: 1, opacity: 0, y: 80 + 'em', ease: "circ"})

// counter-animations

gsap.from(".numbers__title",{duration: 1.5, opacity: 0, x: -300 + 'em', delay: 1})
gsap.from(".animate", { duration: 1.5, opacity: 0, x: 300 + 'em', delay: 1 })

gsap.from(".numbers__owners, .numbers__owners-sub, .numbers__others", {
    scrollTrigger: {
        trigger: ".numbers__owners",
        start: "top 70%",
    },
    duration: 1,
    opacity: 0,
    y: -50,
})

gsap.from(".numbers-stagger", {
    scrollTrigger: {
        trigger: ".numbers-stagger",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.25,
})

// support-animation

gsap.from(".sup-anim", {
    scrollTrigger: {
        trigger: ".sup-anim",
        start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    y: -35,
    stagger: 0.25,
})



gsap.from(".support__info-title", {
    scrollTrigger: {
        trigger: ".support__info-text",
        start: "top bottom",
    },
    duration: 1,
    opacity: 0,
    x: -50,
})
gsap.from(".support__info-subtitle", {
    scrollTrigger: {
        trigger: ".support__info-text",
        start: "top bottom",
    },
    duration: 1,
    delay: 1,
    opacity: 0,
    x: -50,
})
gsap.from(".support__info-button", {
    scrollTrigger: {
        trigger: ".support__info-text",
        start: "top bottom",
    },
    duration: 1,
    delay: 2,
    opacity: 0,
    x: -50,
})
gsap.from(".support__info-colage", {
    scrollTrigger: {
        trigger: ".support__info-text",
        start: "top bottom",
    },
    duration: 1,
    opacity: 0,
    y: -50,
})

// built-animations

gsap.from(".built__title", {
    scrollTrigger: {
        trigger: ".built__title",
        start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    scale: 0.1,
})
gsap.from(".built__subtitle", {
    scrollTrigger: {
        trigger: ".built__title",
        start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    y: -50,
})

// focused-animations

gsap.from(".focused-stagger", {
    scrollTrigger: {
        trigger: ".focused-stagger",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    y: -30,
    stagger: 0.15,
})
gsap.from(".focused-stagger-2", {
    scrollTrigger: {
        trigger: ".focused-stagger-2",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    y: -30,
    stagger: 0.15,
})

gsap.from(".focused__info-title", {
    scrollTrigger: {
        trigger: ".focused__info-text",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    x: -80,
})
gsap.from(".focused__info-subtitle", {
    scrollTrigger: {
        trigger: ".focused__info-text",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    delay: 1,
    x: -80,
})
gsap.from(".focused__info-pic", {
    scrollTrigger: {
        trigger: ".focused__info-text",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    delay: 1,
    y: -80,
})

// CEO-animations

gsap.from(".author", {
    scrollTrigger: {
        start: "bottom bottom",
        trigger: ".author",
    },
    duration: 1,
    opacity: 0,
    scale: 0.1,
})

// waiting-container-animations

gsap.from(".waiting", {
    scrollTrigger: {
        trigger: ".waiting",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    scale: 0.1,
})

gsap.from(".waiting-stagger", {
    scrollTrigger: {
        trigger: ".waiting",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    stagger: 0.25,
    y: -30,
})

gsap.from(".waiting__request", {
    scrollTrigger: {
        trigger: ".waiting",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    delay: 1,
    x: -70,
})
gsap.from(".waiting__take-a-tour", { 
    scrollTrigger: {
        trigger: ".waiting",
        start: "bottom bottom",
    },
    duration: 1,
    opacity: 0,
    delay: 1,
    x: 70,
})

