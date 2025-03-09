export function callbackChat() {
    document.addEventListener('DOMContentLoaded', () => {
        const formContainer = document.querySelector('.form-container'); //контейнер с формой
        const closeChat = document.querySelector('.open-close-chat'); //красный кружочек
        const closeForm = document.querySelector('.close-button'); //крестик закрытия формы

        closeForm.addEventListener('click', () => {
            if(formContainer.classList.contains('open')) {
                formContainer.classList.remove('open');
                closeChat.classList.remove('close');
            }
        });
    
        closeChat.addEventListener('click', () => {
            if(!formContainer.classList.contains('open')) {
                formContainer.classList.add('open');
                closeChat.classList.add('close');
            }
        });
    });
}