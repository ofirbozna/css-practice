'use strict'

function onToggleMenu() {
    const elBody = document.querySelector('body')
    elBody.classList.toggle('menu-open')

    const elJournal = document.querySelector('.journal-drop-down')
    if (elJournal.classList.contains('shown')) {
        elJournal.classList.remove('shown')
    }

}

function onOpenModal() {
    const elModal = document.querySelector('.modal')
    elModal.showModal()
}

function onCloseModal(ev) {
    ev.preventDefault()
    const elModal = document.querySelector('.modal')
    elModal.close()
}

function onToggelDropDown() {
    const elJournal = document.querySelector('.journal-drop-down')
    elJournal.classList.toggle('shown')

}