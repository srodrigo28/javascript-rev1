function dragCardEvents(){
    const cards = document.querySelectorAll('.card')

    cards.forEach((card, index) => {
        // console.log(index, card)
        card.setAttribute("data-card-index", index)
        card.addEventListener("dragstart", dragStart)

        setupDragAndDrop()
    })
}

function dragStart(event){
    const cardIndex = event.target.getAttribute("data-card-index")
    event.dataTransfer.setData("text/plain", cardIndex)
}

function setupDragAndDrop(){
    const cardsContainer = document.querySelectorAll('.cards-container')
    cardsContainer.forEach(cardDrop => {
        cardDrop.addEventListener("dragover", function(event){
            event.preventDefault()
        })
        dropArea(cardDrop)
    })
}

function dropArea(cardDrop) {
    cardDrop.addEventListener("drop", (event) => {
        event.preventDefault()

        const cardIndex = event.dataTransfer.getData("text/plain")
        const draggedCard = document.querySelector(`.card[data-card-index="${cardIndex}"]`)
        cardDrop.appendChild(draggedCard)
    })
}

export { dragCardEvents };