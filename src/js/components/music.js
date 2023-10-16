import { getMusic } from '../storage/music'
import { mkStore } from '../stores/mkStore'

function addListeners(data){
    const playButtons = document.querySelectorAll('[data-toggle="playButton"]')
    const pauseButtons = document.querySelectorAll('[data-toggle="pauseButton"]')
    const mainButton = document.querySelector('#music-play')
    const secondButton = document.querySelector('#music-pause')
    let arr = data
    let audio
    let res

    playButtons.forEach((but) => {

        const identifier = but.getAttribute('data-relation')
        let route = but.getAttribute('data-route')
        const pause = document.querySelectorAll('#pauseMusic')
        const play = document.querySelectorAll('#playMusic')

        const { isProduction } = mkStore()

        console.log("is prod: "+isProduction())
        if(isProduction()){
            audio = new Audio('assets/'+route)
        }else{
            audio = new Audio(route)
        }

        audio.preload
        audio.load()

        but.addEventListener('click', () => {

            if(but.getAttribute('data-relation')===identifier){

                route = but.getAttribute('data-route')

                pause.forEach((ob) => {
                    if(ob.getAttribute('data-relation')===identifier){
                        ob.classList.add('is-visible')
                        secondButton.classList.remove('is-visible')
                        mainButton.classList.remove('is-hidden')

                        audio.pause()

                        if(isProduction()){
                            if(audio.src !== window.location.href+"assets/"+route){
                                audio.src = "assets/"+route
                            }
                        }else{
                            if(audio.src !== window.location.href+route){
                                audio.src = route
                            }
                        }

                        audio.play()
                    }else{
                        ob.classList.remove('is-visible')

                        play.forEach((ob) => {
                            if(ob.getAttribute('data-relation') !== identifier){
                                ob.classList.remove('is-hidden')
                            }
                        })
                    }
                })

                but.classList.add('is-hidden')

            }

        })

        mainButton.addEventListener('click', () => {
            mainButton.classList.add('is-hidden')
            secondButton.classList.add('is-visible')

            if(res === null || res === undefined){
                res = Math.ceil(Math.random()*12)
            }

            const pause = document.querySelectorAll('#pauseMusic')
            const play = document.querySelectorAll('#playMusic')

            arr.forEach(obj => {
                if(obj.id===res){
                    play.forEach((ob) => {
                        if(ob.getAttribute('data-relation')==res){
                            ob.classList.add('is-hidden')
                            pause.forEach((ob) =>  {
                                if(ob.getAttribute('data-relation')==res){
                                    ob.classList.add('is-visible')
                                }else{
                                    ob.classList.remove('is-visible')
                                }
                            })
                        }else{
                            ob.classList.remove('is-hidden')
                        }
                    })
                }
            })

            audio.pause()

            let selected = arr.filter(ob => {
                return ob.id === res
            })

            selected.forEach(ob => {

                if(isProduction()){
                    route = "assets/"+ob.route
                }else{
                    route = ob.route
                }
                
            })

            audio.src = route
            audio.play()

        })


        secondButton.addEventListener('click', () => {
            secondButton.classList.remove('is-visible')
            mainButton.classList.remove('is-hidden')

            arr.forEach(obj => {
                if(obj.id===res){
                    pause.forEach((ob) => {
                        if(ob.getAttribute('data-relation')==res){
                            ob.classList.remove('is-visible')
                            play.forEach((ob) =>  {
                                if(ob.getAttribute('data-relation')==res){
                                    ob.classList.remove('is-hidden')
                                }
                            })
                        }
                    })
                }
            })

            audio.pause()
            res = null
        })

        pauseButtons.forEach((button) => {
    
            button.addEventListener('click', () => {

                if(button.getAttribute('data-relation')===identifier){
    
                    play.forEach((ob) => {
                        if(ob.getAttribute('data-relation')===identifier){
                            ob.classList.remove('is-hidden')
                            secondButton.classList.remove('is-visible')
                            mainButton.classList.remove('is-hidden')
                            audio.pause()
                        }

                    })
    
                    button.classList.remove('is-visible')
                }
    
            })
    
        })
        
    })

    const shareButtons = document.querySelectorAll('[data-toggle="shareMusic"]')

        shareButtons.forEach((ob) => {

            ob.addEventListener('click', () => {
                let url = window.location.href
                navigator.clipboard.writeText(url);
                alert("Texto copiado al portapapeles")
            })
        })

 }

function musicRender(data){
    const musicList = document.querySelector('#Music-list')
    musicList.innerHTML = `
    
        ${data.map((ob) => {
            return `
            <tr>
                <td class="List-id">${ob.id}</td>
                <td class="List-play">
                <button id="playMusic" data-route="${ob.route}" data-toggle="playButton" data-relation="${ob.id}" class="btn">
                    <span class="ci--play"></span>
                </button>
                <button id="pauseMusic" data-route="${ob.route}" data-toggle="pauseButton" data-relation="${ob.id}" class="btn">
                    <span class="ci--pause"></span>
                </button>
                </td>
                <td class="List-title">
                    <div class="List-titleInfo">
                        <span>${ob.title}</span>
                        <span>${ob.autor}</span>
                    </div>
                </td>
                <td class="List-time">${ob.duration}</td>
                <td class="List-share">
                    <button class="btn" data-toggle="shareMusic">
                        <span class="ci--compartir"></span>
                    </button>
                </td>
            </tr>
            <tr class="space"></tr>
            `
        }).join("")}

    `
}

function infoRender(){
    
    getMusic()
        .then(data => {
            musicRender(data)
            addListeners(data)
        })

}

export default function (){
    infoRender()
}