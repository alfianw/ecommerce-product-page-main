// menampilkan modals
function myFunction() {
  document.getElementById("modals").style.display = "block"
}

let cart = 1
function openCart() {
  cart++
  if (cart % 2 == 0) {
    document.getElementById("cartBtn").style.display = "block"
  } else if (cart % 2 == 1) {
    document.getElementById("cartBtn").style.display = "none"
  }
}

function closeModal() {
  document.getElementById("modals").style.display = "none"
}

let nilai = 0;

function tambahProduk() {
  nilai += 1;
  document.getElementById("jumlahProduk").innerText = nilai;
}

function kurangProduk() {
  if (nilai == 0) {
    nilai += 0
  } else if (nilai > 0) {
    nilai -= 1;
  }
  document.getElementById("jumlahProduk").innerText = nilai;
}

// content
function tampilkanFoto(namaFoto) {
  const fotoElement = document.getElementById("imgContain")
  fotoElement.src = namaFoto
}

// Modal
function tampilkanFoto1(namaFoto) {
  const fotoElement = document.getElementById("imgModal")
  fotoElement.src = namaFoto
}

const fotoList = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];

let currentIndex = 0;
function gantiFoto1() {
  const foto = document.getElementById("imgModal");
  if (currentIndex <= 3) {
    currentIndex = (currentIndex + 1) % fotoList.length;
  }
  foto.src = fotoList[currentIndex];
}

function gantiFoto2() {
  const foto = document.getElementById("imgModal");
  if (currentIndex > 0) {
    currentIndex--
    console.log(currentIndex)
  } else if (currentIndex <= 0) {
    currentIndex += 3
  }
  foto.src = fotoList[currentIndex];
}

function chartEmpty(){
  document.getElementById("cartP").style.display = "none"
  document.getElementById("checkoutBtn").style.display = "block"
}

function createChart() {
  let harga = nilai * 12300;

  if (nilai == 0) {
    alert("Enter the number of products")
  } else if(nilai > 0){
    chartEmpty()
    const card = document.createElement("div");
    card.className = "cartItem"
    card.innerHTML = `
    <img src="./images/image-product-1-thumbnail.jpg" alt="" id="imgCart">
    <article>
    <p id="status">Fall Limited Edition Sneakers $123.00 X <span>${nilai}</span> = <span>$${harga}</span></p>
    </article>
    <button id="deleteBtn" onclick="deleteCard(this)"><img src="./images/icon-delete.svg" alt=""></button>
    `;
    const cardContainer = document.getElementById("cardList");
    cardContainer.appendChild(card);
  }
}

function deleteCard(button) {
  const card = button.parentNode;
  card.remove();
}