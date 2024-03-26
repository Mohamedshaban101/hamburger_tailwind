//window loading

window.addEventListener('load',() => {
    document.body.style.overflow='hidden';
    setTimeout(() => {
        const loader=document.querySelector('.loading');
        loader.classList.add('loader-hidden');
        document.body.style.overflow='auto';
    },5000)
})





const hamburger = document.getElementById('hamburger');

const close = document.getElementById('close');

const menu = document.getElementById('menu');

const navList = document.querySelectorAll('nav ul li a');
navList.forEach((ele) => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        navList.forEach((item) => {
            item.classList.remove('active');
        })
        e.target.classList.add('active');
        document.querySelector('#'+e.target.dataset.link).scrollIntoView({
            behavior : 'smooth'
        })
    })
})

if (menu) {
    menu.addEventListener('click', function () {
        hamburger.classList.remove('hidden');
    })
}

if (close) {
    close.addEventListener('click', function () {
        hamburger.classList.add('hidden');
    })
}

const tabs = document.querySelectorAll('.tabs_wrap ul li');

const all = document.querySelectorAll('.item-wrap');

const foods = document.querySelectorAll('.food');

const snacks = document.querySelectorAll('.snack');

const berevages = document.querySelectorAll('.berevage');
tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        e.target.classList.add('active');
        // var tabval=tab.getAttribute('data-tabs');
        var tabval = e.target.dataset.tabs;
        all.forEach(item => {
            item.style.display = "none";
        })
        if (tabval == 'food') {
            foods.forEach(food => {
                food.style.display = "block";
            })
        } else if (tabval == 'snack') {
            snacks.forEach(snack => {
                snack.style.display = "block";
            })
        } else if (tabval == 'berevage') {
            berevages.forEach(berevage => {
                berevage.style.display = "block";
            })
        } else {
            all.forEach(item => {
                item.style.display = "block";
            })
        }
    })
})


const swiper = new Swiper('.swiper', {
    // If we need pagination
    speed: 400,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
        }
    }
});

const myBtn=document.querySelector('.myBtn');
const sections=document.querySelectorAll('section');
window.addEventListener('scroll',function(){
    if(this.document.body.scrollTop > 20 || this.document.documentElement.scrollTop > 20){
        myBtn.classList.remove('invisible');
        myBtn.classList.remove('opacity-0');
    }else{
        myBtn.classList.add('invisible');
        myBtn.classList.add('opacity-1');
    }
    
    var current='home';

    sections.forEach((section) => {
        var sectionTop=section.offsetTop;
        if(this.scrollY >= sectionTop - 60){
            current=section.getAttribute('id');
        }
    })

    navList.forEach((nav) => {
        nav.classList.remove('active');
        if(nav.dataset.link === current){
            nav.classList.add('active');
        }
    })

})
myBtn.addEventListener('click',function(){
    document.body.scrollTop='0';
    document.documentElement.scrollTop='0';
})

const html=document.querySelector('html');
const themeBtn=document.querySelector('.theme-toggle');
let mode=localStorage.getItem('mode');
if(mode !== null){
    if(mode === 'light'){
        html.classList.remove('dark');
        themeBtn.classList.replace('ri-sun-line','ri-moon-line');
    }else{
        html.classList.add('dark');
        themeBtn.classList.replace('ri-moon-line','ri-sun-line');
    }
}

themeBtn.addEventListener('click',function(){
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        themeBtn.classList.replace('ri-sun-line','ri-moon-line');
        localStorage.setItem('mode','light');
    }else{
        html.classList.add('dark');
        themeBtn.classList.replace('ri-moon-line','ri-sun-line');
        localStorage.setItem('mode','dark');
    }
})

// animation
const sr=ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration:2500,
    delay : 400
});

sr.reveal('.home__image');

sr.reveal('.home__content',{origin : 'bottom'});

sr.reveal('.category__cart',{interval : 300});

sr.reveal('.promo_card1',{origin : 'left'});
sr.reveal('.promo_card2',{origin : 'right'});

sr.reveal('.about_img',{origin : 'bottom'});
sr.reveal('.about_content',{origin : 'top'});

sr.reveal('.menuSection__items',{origin : 'left'});

sr.reveal('.customer__review',{origin : 'right'});

sr.reveal('.footer__one',{origin : 'left'});
sr.reveal('.footer__two',{origin : 'top'});
sr.reveal('.footer__three',{origin : 'top'});
sr.reveal('.footer__four',{origin : 'right'});