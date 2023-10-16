function openMenu(){
    const openButton = document.querySelector('[data-toggle="Aside-open"]')
    const closeButton = document.querySelector('[data-toggle="Aside-close"]')
    const openSecondaryButton = document.querySelector('.Nav-secondaryMenu')
    const menu = document.querySelector('.Aside')
    const menuMask = document.querySelector('.Mask')

    openButton.addEventListener('click', () =>{
        menuMask.classList.add('is-visible')
        menu.classList.add('is-visible')
    })

    openSecondaryButton.addEventListener('click', () =>{
        menuMask.classList.add('is-visible')
        menu.classList.add('is-visible')
    })

    closeButton.addEventListener('click', () =>{
        menuMask.classList.remove('is-visible')
        menu.classList.remove('is-visible')
    })

    menuMask.addEventListener('click', () => {
        menuMask.classList.remove('is-visible')
        menu.classList.remove('is-visible')
    })

}

function addListeners(){
    const musicButton = document.querySelector('#Music-dropdown')
    const music = document.querySelector('.Aside-music')
    const aboutButton = document.querySelector('#About-dropdown')
    const about = document.querySelector('.Aside-about')
    const eventsButton = document.querySelector('#Events-dropdown')
    const events = document.querySelector('.Aside-events')
    const progButton = document.querySelector('#Prog-dropdown')
    const prog = document.querySelector('.Aside-prog')

    musicButton.addEventListener(('click'), () => {
        if(music.classList.contains('active')){
            music.classList.remove('active')
            musicButton.classList.remove('transformed')
        }else{
            music.classList.add('active')
            musicButton.classList.add('transformed')
        }
    })

    aboutButton.addEventListener(('click'), () => {
        if(about.classList.contains('active')){
            about.classList.remove('active')
            aboutButton.classList.remove('transformed')
        }else{
            about.classList.add('active')
            aboutButton.classList.add('transformed')
        }
    })

    eventsButton.addEventListener(('click'), () => {
        if(events.classList.contains('active')){
            events.classList.remove('active')
            eventsButton.classList.remove('transformed')
        }else{
            events.classList.add('active')
            eventsButton.classList.add('transformed')
        }
    })

    progButton.addEventListener(('click'), () => {
        if(prog.classList.contains('active')){
            prog.classList.remove('active')
            progButton.classList.remove('transformed')
        }else{
            prog.classList.add('active')
            progButton.classList.add('transformed')
        }
    })

}

export default function (){
    openMenu()
    addListeners()
}