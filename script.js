/* LOGIN-TO-BUY MODAL SCRIPT */

const openModalButtons = document.querySelectorAll('[data-modal-target]')

const overlay = document.getElementById('overlay')
const close_modal = document.getElementById('close-modal')
const cancel_modal = document.getElementById('cancel-modal')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modalpage.active')
    modals.forEach(modalpage => {
        closeModal(modalpage)
    })
})

close_modal.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modalpage.active')
    modals.forEach(modalpage => {
        closeModal(modalpage)
    })
})

cancel_modal.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modalpage.active')
    modals.forEach(modalpage => {
        closeModal(modalpage)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}