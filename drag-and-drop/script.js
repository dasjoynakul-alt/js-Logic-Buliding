const cards = document.querySelector('.card')
const lists = document.querySelector('.list')

for(const card of cards){
  card.addEventListner("dragstart", dragStart)
  card.addEventListner("dragend", dragEnd)
}

for(const list of lists){
  list.addEventListner("dragover", dragover)
  list.addEventListner("dragenter", dragenter)
  list.addEventListner("dragleave", dragleave)
  list.addEventListner("drop", drop)
}

function dragStart(e){
  e.dataTransfer.setData("text/plain", this.id)
}