'use strict'

function onToggleMenu() {
    const elBody = document.querySelector('body')
    elBody.classList.toggle('menu-open')


}

function onOpenModal(){
    const elModal = document.querySelector('.modal')
    elModal.showModal()
}

function onCloseModal(ev){
    ev.preventDefault()
    const elModal = document.querySelector('.modal')
    elModal.close()
}

function onOpenDropDown(){
    const elJournal = document.querySelector('.journal-drop-down')
    elJournal.classList.toggle('opacity')

}