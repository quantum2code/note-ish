const template = document.querySelector("#note-card");
// template.innerHTML = `
// <div class="card card-container" id = "card">
//         <div class="area">
//             <div contenteditable="true" class="text-area"></div>
//         </div>
//         <div class="btn delete-btn"></div>
//         <div class="btn mark-btn"></div>
// </div>
// `;
//-----------------------------------------

const cardArray = []
const container = document.querySelector('.container')
function deleteCard (target) {
        target.style.scale = '0';
        setTimeout(() => {
            target.remove()
        },300)
}

//add card
document.getElementById('plus').addEventListener('click', () => {
    container.insertBefore(template.content.cloneNode(true), document.querySelector('#plus').parentElement);
    const cardObject = {content: '', isMarked: false}
    cardArray.push(cardObject)
})

container.addEventListener('click', (event) => {
    //isMarked
    if (event.target.matches('.mark-btn')) {
        // const btnIndex = Array.from(document.querySelectorAll('.mark-btn')).indexOf(event.target)
        // cardArray[btnIndex].isMarked = cardArray[btnIndex].isMarked ? false:true;

        Array.from(event.target.children)[0].classList.toggle('filled-mark')
        // console.log(cardArray[btnIndex].isMarked)

    }

    //delete card

    else if (event.target.matches('.delete-btn')) {
        // console.log(event.target.parentElement.parentElement)
        deleteCard(event.target.parentElement.parentElement);
    }

})

container.addEventListener('dblclick', (event) => {
    if (event.target.matches('.area')) {
        deleteCard(event.target.parentElement);
    }
})

container.addEventListener('contextmenu', (event) => {
    if (event.target.matches('.area')) {
        event.preventDefault();
        const popup = document.querySelector('.popup')
        if (popup){
            popup.classList.remove('popup')
        }
        const btnContainer = event.target.nextElementSibling;
        btnContainer.classList.toggle('popup');
        event.stopPropagation();
    }
})

document.addEventListener('click', (event) => {
    const popup = document.querySelector('.popup')
    if (popup && !popup.contains(event.target)){
        popup.classList.remove('popup')
    }
})













//TODO: cosmetics

// const container = document.querySelector('.container');

// this.addEventListener('click', (event) => {
//     if (event.target.id.startsWith('area'))
//     {
//         const arr = Array.from(document.querySelectorAll('#area'));
//         const index = arr.indexOf(event.target);
//         arr[index].style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
//     }
// })

//save the text content in an array


