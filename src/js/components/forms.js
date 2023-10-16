function sendForm(){

    const form = document.querySelector('#newsletter')

    form.addEventListener('submit', (e) => {

        e.preventDefault()

        let data = new FormData(form)
        let dataForm = Object.fromEntries(data.entries())

        let email = dataForm.userEmail

        //enviar datos al api

        alert("Se envio con exito el correo: "+email)
        form.reset()

    })

}

export default function (){
    sendForm()
}