const modal = document.querySelector("#modal_contact_ID");
const modalOpenButtons = document.getElementsByClassName("block-text__button");

for (i=0; i<modalOpenButtons.length; i++){
    modalOpenButtons[i].addEventListener('click', function()
    {
        modal.showModal();
    })
}

modal.addEventListener('click', () => modal.close());

const modal_block = document.querySelector("#modal__contact_block_ID");
modal_block.addEventListener('click', (event) => event.stopPropagation());
// const modalCloseButton = document.querySelector("#closebtn");
// modalCloseButton.addEventListener('click', function()
// {
//     modal.close();
// });