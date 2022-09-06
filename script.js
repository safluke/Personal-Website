const sections = document.querySelectorAll('section')
const navli = document.querySelectorAll("nav .container ul li")

window.addEventListener('scroll', () => {
    let current = ""
    //console.log(pageYOffset)
    sections.forEach(section => {
        const sectionTop = section.offsetTop //calculate distance from page top to section top
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - 400) {
            current = section.getAttribute('id')
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // you're at the bottom of the page
                current ="contactMe"
            }
        }
    })
    navli.forEach(li => {
        li.classList.remove("active")
        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
})

AOS.init();

const cards = document.querySelectorAll('#card')

/*
cards.forEach(card => {

    card.addEventListener('click', () => {
        if (card.classList.contains("frontFlip")) {
            card.classList.remove("frontFlip")
            card.classList.add("backFlip")
        } else {
            card.classList.remove("backFlip")
            card.classList.add("frontFlip")
        }
    })

})
*/
cards.forEach(card => {

    card.addEventListener('touchend', () => {
        if (card.classList.contains("frontFlip")) {
            card.classList.remove("frontFlip")
            card.classList.add("backFlip")
        } else {
            card.classList.remove("backFlip")
            card.classList.add("frontFlip")
        }
    })

})



document.querySelector('#projectManagementVideo').playbackRate = 1.5;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var screenChange=1200
function reportWindowSize() {
    
    const heightOutput = document.querySelector('#height');
    const widthOutput = window.innerWidth;
    const project = document.querySelector('#project-layout')
    console.log(widthOutput)

    if (widthOutput <= screenChange) {
        project.classList.remove("project-layoutDesktop")
        project.classList.add("project-layoutMobile")
    }
    else {
        project.classList.add("project-layoutDesktop")
        project.classList.remove("project-layoutMobile")

    }
}

window.addEventListener('resize', reportWindowSize);

const project = document.querySelector('#project-layout')
const widthOutput = window.innerWidth;
if (widthOutput <= screenChange) {
    project.classList.remove("project-layoutDesktop")
    project.classList.add("project-layoutMobile")
}
else {
    project.classList.add("project-layoutDesktop")
    project.classList.remove("project-layoutMobile")

}