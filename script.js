document.getElementById('experience-img')
addEventListener('click', () => {
    let expDetails = document.getElementById('experience-details')
    expDetails.style.opacity = '1';
});


let goToAbout = document.getElementById('about')
goToAbout.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    })
})

let goToSkills = document.getElementById('skills')
goToSkills.addEventListener('click', () => {
    window.scrollTo({
        top: 640,
        behavior: 'smooth'
    })
})
let goToProjects = document.getElementById('projects')
goToProjects.addEventListener('click', () => {
    window.scrollTo({
        top: 1280,
        behavior: 'smooth'
    })
})
let goToContact = document.getElementById('contact')
goToContact.addEventListener('click', () => {
    window.scrollTo({
        top: 2750,
        behavior: 'smooth'
    })
})
let goToContact1 = document.getElementById('contact1')
goToContact1.addEventListener('click', () => {
    window.scrollTo({
        top: 2750,
        behavior: 'smooth'
    })
})




let currntSliden = 1;

function goToSliden(slideNumber, tduration) {
    document.getElementById('carousel-news').style.marginLeft = -(slideNumber) * 100 + "%";
    document.getElementById('carousel-news').style.transition = tduration + 's';
}
let slidesn = setInterval(() => {
    goToSliden(currntSliden, 1);
    currntSliden++;
    if (currntSliden > 2) {
        setTimeout(() => {
            document.getElementById('carousel-news').style.marginLeft = "0%";
            document.getElementById('carousel-news').style.transition = '0s';
            // ml = 100;
            currntSliden = 1;
        }, 1000)
    }
}, 2000)



let currntSlidec = 1;

function goToSlidec(slideNumber, tduration) {
    document.getElementById('carousel-crud').style.marginLeft = -(slideNumber) * 99 + "%";
    document.getElementById('carousel-crud').style.transition = tduration + 's';
}
let slidesc = setInterval(() => {
    goToSlidec(currntSlidec, 1);
    currntSlidec++;
    if (currntSlidec > 9) {
        setTimeout(() => {
            document.getElementById('carousel-crud').style.marginLeft = "0%";
            document.getElementById('carousel-crud').style.transition = '0s';
            // ml = 100;
            currntSlidec = 1;
        }, 1000)
    }
}, 2000)


let currntSlidee = 1;

function goToSlidee(slideNumber, tduration) {
    document.getElementById('carousel-ecomm').style.marginLeft = -(slideNumber) * 100 + "%";
    document.getElementById('carousel-ecomm').style.transition = tduration + 's';
}
let slidese = setInterval(() => {
    goToSlidee(currntSlidee, 1);
    currntSlidee++;
    if (currntSlidee > 5) {
        setTimeout(() => {
            document.getElementById('carousel-ecomm').style.marginLeft = "0%";
            document.getElementById('carousel-ecomm').style.transition = '0s';
            currntSlidee = 1;
        }, 1000)
    }
}, 2000)
