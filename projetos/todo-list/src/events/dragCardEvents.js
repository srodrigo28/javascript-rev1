function dragCardEvents(){
    const cards = document.querySelectorAll('.card')

    cards.forEach((card, index) => {
        console.log(index, card)
    })
}


export {dragCardEvents, calcular};