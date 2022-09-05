const sections = document.querySelectorAll('section')
const navli = document.querySelectorAll("nav .container ul li")

window.addEventListener('scroll', () => {
    let current = ""
    console.log(pageYOffset)
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
card.addEventListener('click', () => {
    cards.forEach(card => { 
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