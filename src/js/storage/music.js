import { mkStore } from '../stores/mkStore'
const { isProduction } = mkStore()

function parseData(data){

    return data
}

export function getMusic(){

    if(isProduction()){

        return fetch('assets/json/music.json')
        .then(response => {
            return response.json().then(data => {
                return parseData(data)
            })
        })

    }else{

        return fetch('json/music.json')
        .then(response => {
            return response.json().then(data => {
                return parseData(data)
            })
        })

    }

}