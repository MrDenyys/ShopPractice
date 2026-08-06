const button = document.querySelector(`button[data-button]`);

const trecker = document.querySelector(`div[data-secondMain]`);

const infoButton = document.querySelector(`button[data-info]`)
const infos = document.createElement(`div`)
infos.className = `containerInfo`;

infos.innerHTML = `
<h1>Здесь вы можете создавать свои продукты добавлять их и так же удалять</h1>
<p>Правила как создать </p>
<button id="closeInfo">Закрыть</button>
`
infos.style.cssText = `
color: grey;
`

document.body.appendChild(infos);
//console.log(button); проверка 

console.log(trecker);

infoButton.addEventListener("click" ,  () => {
    infos.style.display = "block";
})

document.getElementById("closeInfo").addEventListener("click", () => {
    infos.style.display = "none";
});