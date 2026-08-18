const button = document.querySelector(`button[data-button]`);

const trecker = document.querySelector(`div[data-secondMain]`);

const infoButton = document.querySelector(`button[data-info]`);

const infos = document.createElement(`div`);

const create = document.createElement(`div`);

const cartCount = document.querySelector('p[data-count]');

const cartAdd = document.querySelectorAll(`.dataAddCart`);

const cartMinus = document.querySelector(`div[data-secondMain]`);

const remoweButton = document.createElement(`button`);

const addObject = document.querySelector(`button[data-Add]`);  // console.log(addObject);

const containerProducts = document.querySelector(`.goods`); // console.log(containerProducts);

// addObject.addEventListener("click", () => {

// })




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
<p>Картинка должна быть в пнг!</p>
<button id="closeInfo">Закрыть</button>
`
infos.style.cssText = `
color: grey;
`
create.className = `containerCreate`;

create.innerHTML = `
<div class="divClose">
<button class="createClose">X</button>
</div>
<p>Photo</p>
<input class="productPhoto" type="file">
<p>Name</p>
<input class="productName" type="text">
<p>price</p>
<input class="productPrice" type="number">
<button class="addProducts">Create</button>
`
const productPhotoInput = create.querySelector(`.productPhoto`); //console.log(productPhotoInput);

const productNameInput = create.querySelector(`.productName`);

const productPriceInput = create.querySelector(`.productPrice`);


create.querySelector(`.addProducts`).addEventListener("click", () => {
    if (productNameInput.value === "") {
        productNameInput.style.backgroundColor = 'red';

        setTimeout(() => {
            productNameInput.style.backgroundColor = '#fff'
        }, 3000);

        return;

    }else if (productPriceInput.value === "") {
    productPriceInput.style.backgroundColor = 'red';

        setTimeout(() => {
            productPriceInput.style.backgroundColor = '#fff'
        }, 3000);

        return;

    }else if (productPhotoInput.files.length === 0) {

        productPhotoInput.style.backgroundColor = 'red';

        setTimeout(() => {
        productPhotoInput.style.backgroundColor = '#fff'
        }, 3000);
        return;
    }
  const product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    photo: productPhotoInput.files[0]
};

const imageUrl = URL.createObjectURL(product.photo);

products.push(product);

productPhotoInput.value = "";
productNameInput.value = "";
productPriceInput.value = "";

console.log(products);

const card = document.createElement("div");

card.className = `div-goods`;

card.innerHTML = `
<img src="${imageUrl}" alt="" >
<p>${product.name}</p>
<p>${product.price}</p>
<button data-addCart="" class="dataAddCart" >Add to cart</button>
`

containerProducts.append(card);

create.style.display = `none`;
});



const closeObject = create.querySelector(`.createClose`); // console.log(closeObject);

closeObject.addEventListener( "click" ,() => {
create.style.display = "none"
})



addObject.addEventListener("click",() => {
create.style.display = "flex"
})

document.body.appendChild(create);

document.body.appendChild(infos);
//console.log(button); проверка 

// console.log(trecker);

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