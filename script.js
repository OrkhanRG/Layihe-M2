let btn = document.querySelector('.add-list');
let listFlex = document.querySelector('list-flex')
let input2 = document.querySelector('.input2')
let buttonImg = document.querySelector('.button-img');
let buttonImg2 = document.querySelector('.button-img2');
let listItem = document.querySelector('.list-item');


btn.addEventListener('click', (event) => {
    listItem.innerHTML += `<li class = 'list-flex'>
    <input name='list-item2' class='input2'>
    <div class='daire'>
    <div class='xett1'></div>
    <div class='xett2'></div>
    </div>
    </li>`;

    const daire = document.querySelectorAll('.daire');

    for (let i = 0; i < daire.length; i++) {
        daire[i].addEventListener('click', () => {
            daire[i].parentElement.remove();
        });
    }
    buttonImg.addEventListener('click', () => {
        buttonImg.style.display = 'none';
        buttonImg2.style.display = 'flex';
        console.log(document.getElementsByClassName('input2').length)
        for (let i = 0; i < document.getElementsByClassName('input2').length; i++) {
            for (let j = i + 1; j < document.getElementsByClassName('input2').length; j++) {
                let tmp = 0;
                if (document.getElementsByClassName('input2')[i].value > document.getElementsByClassName('input2')[j].value) {
                    tmp = document.getElementsByClassName('input2')[i].value;
                    document.getElementsByClassName('input2')[i].value = document.getElementsByClassName('input2')[j].value;
                    document.getElementsByClassName('input2')[j].value = tmp;
                }
            }
        }
    });

    buttonImg2.addEventListener('click', () => {
        buttonImg2.style.display = 'none';
        buttonImg.style.display = 'flex';


        for (let i = 0; i < document.getElementsByClassName('input2').length; i++) {
            for (let j = i + 1; j < document.getElementsByClassName('input2').length; j++) {
                let tmp = 0;
                if (document.getElementsByClassName('input2')[i].value < document.getElementsByClassName('input2')[j].value) {
                    tmp = document.getElementsByClassName('input2')[i].value;
                    document.getElementsByClassName('input2')[i].value = document.getElementsByClassName('input2')[j].value;
                    document.getElementsByClassName('input2')[j].value = tmp;
                }
            }
        }
    })

});
