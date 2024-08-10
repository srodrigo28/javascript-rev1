// seletores de elementos
const columns = document.querySelectorAll(".column__cards");
const cards = document.querySelectorAll(".card")

let draggedCard; // valor inicial

// funções acionadoras
const dragStart = (event) => { 
    draggedCard = event.target 
    console.log(draggedCard)
}
const dragOver  = () => {}
const dragLeve  = () => {}
const dragDrop  = () => {}

// pegando os cards
cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
})