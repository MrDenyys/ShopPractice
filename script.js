const button = document.querySelector(`button[data-button]`);

const trecker = document.querySelector(`div[data-secondMain]`);

const infoButton = document.querySelector(`button[data-info]`);

const infos = document.createElement(`div`);

const create = document.createElement(`div`);

const cartCount = document.querySelector('p[data-count]');

const cartAdd = document.querySelectorAll(`button[data-addCart]`);

const cartMinus = document.querySelector(`div[data-secondMain]`);

const remoweButton = document.createElement(`button`);

const addObject = document.querySelector(`button[data-Add]`);  // console.log(addObject);

addObject.addEventListener("click", () => {

})

remoweButton.className = `buttonRemowe`;

remoweButton.style.display = "none";

remoweButton.textContent = "remowe";


remoweButton.style = `
display: none;
color: black;
background-color: #e01e1e;
border-radius: 3px;
margin-left: 5px;
margin-right: 3px;
`

cartMinus.append(remoweButton);

// console.log(cartMinus);

let count = 0;

cartCount.textContent = count;


infos.className = `containerInfo`;

infos.innerHTML = `
<h1>Здесь вы можете создавать свои продукты добавлять их и так же удалять</h1>
<p>Правила как создать </p>
<button id="closeInfo">Закрыть</button>
`
infos.style.cssText = `
color: grey;
`
create.className = `containerCreate`;

create.innerHTML = `
<p>Photo</p>
<input type="file">
<p>Name</p>
<input type="text">
<p>price</p>
<input type="number">
<h1>Create</h1>
`

addObject.addEventListener("click",() => {
create.style.display = "flex"
})

document.body.appendChild(create);

document.body.appendChild(infos);
//console.log(button); проверка 

console.log(trecker);

infoButton.addEventListener("click" ,  () => {
    infos.style.display = "block";
})

document.getElementById("closeInfo").addEventListener("click", () => {
    infos.style.display = "none";
});

// document.querySelector(`button[data-addCart]`).addEventListener("click", () => {
//     count++;
//     cartCount.textContent = count;
// })

for(let i = 0;i < cartAdd.length; i++){
    cartAdd[i].addEventListener("click", () => {
        count++;

        cartCount.textContent = count;

        if (count > 0) {

            remoweButton.style.display = "block";

        }
    });
};

   remoweButton.addEventListener("click", () => {
    if (count > 0) {
    count--;
    cartCount.textContent = count;   
    }

    if (count === 0) {
    remoweButton.style.display = "none";    
    }
})  


// while (count < 0) {
// cartMinus.append.innerHTML = `
// <button>remowe</button>
// `
// }
// while (count > 0) {
    
//     count--;
//     cartCount.textContent = count;
// };