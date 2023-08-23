function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

AOS.init({
	duration: 1000
});

//Project's Tabs

const tabs = document.querySelectorAll(".tab-btn");
const all_contents = document.querySelectorAll('.contents');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=> {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        let glider = document.querySelector('.glider');
        glider.style.width = e.target.offsetWidth + "px";
        glider.style.left = e.target.offsetLeft + "px";

        all_contents.forEach(contents=>{contents.classList.remove('active')})
        all_contents[index].classList.add("active");
    })
})

// scroll top btn
let scrollTop = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', function () {
	if (window.pageYOffset > 70) {
		scrollTop.classList.add('active');
	} else {
		scrollTop.classList.remove('active');
	}
});

window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('pre-load');
})

const accordion = document.querySelectorAll('.contentBox');

accordion.forEach((acc, index)=>{
    acc.addEventListener('click', (e)=> {
        accordion.forEach(acc=>{acc.classList.remove('active')});
        acc.classList.add('active'); 
    })
})


//Lightbox for gallery

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.light-b',);
images.forEach(image =>{
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})


//Lightbox for gallery

