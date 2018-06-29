var productList = [
{
  id: 1,
  pic: 'images/hinh1.jpg',
  name: 'Hoa Handle Make 1',
  price: 210000
},
{ 
  id: 2,
  pic: 'images/hinh2.jpg',
  name: 'Hoa Handle Make 2',
  price: 220000
},
{ 
  id: 3,
  pic: 'images/hinh3.jpg',
  name: 'Hoa Handle Make 3',
  price: 230000
},
{ 
  id: 4,
  pic: 'images/hinh4.jpg',
  name: 'Hoa Handle Make 4',
  price: 240000
},
{ 
  id: 5,
  pic: 'images/hinh5.jpg',
  name: 'Hoa Handle Make 5',
  price: 250000
},
{ 
  id: 6,
  pic: 'images/hinh6.jpg',
  name: 'Hoa Handle Make 6',
  price: 260000
},
{ 
  id: 7,
  pic: 'images/hinh7.jpg',
  name: 'Hoa Handle Make 7',
  price: 270000
},
{ 
  id: 8,
  pic: 'images/hinh8.jpg',
  name: 'Hoa Handle Make 8',
  price: 280000
}
]
var count = 0;
// var id = 0;
var totalCart = 0;
var cart = {};
var productsAddCart = [];
const lenProduct = productList.length;
// var lenCart;
// var json;

function addProductList() {
  //create tag <ul>
  var Ul = document.createElement("ul");
  Ul.setAttribute("class", "list-products");
  document.getElementById("page-main").appendChild(Ul);
  
  for (var i = 0; i < lenProduct; i++) {
    //create tag li
    var Li = document.createElement("li");
    Li.setAttribute("id", "item-product-" + (i + 1));
    
    //create tag image
    var img = document.createElement("img");
    img.setAttribute("class", "img-item");
    img.setAttribute("src", productList[i].pic);
    
    //create tag div
    var divItem = document.createElement("div");
    divItem.setAttribute("class", "info-product");
    divItem.setAttribute("id", "info-product-" + (i + 1));
    
    //create tag h2
    var H2 = document.createElement("h2");
    H2.setAttribute("class", "name-product");
    var contentH2 =document.createTextNode(productList[i].name);
    H2.appendChild(contentH2);
    
    //create tag b
    var B = document.createElement("b");
    B.setAttribute("class", "price-item");
    var contentB =document.createTextNode(productList[i].price);
    B.appendChild(contentB);
    
    //create button ADD TO CARD
    var btnAddCard = document.createElement("button");
    btnAddCard.setAttribute("id","btn-card-" + (i + 1));
    btnAddCard.setAttribute("class", "add-to-card");//btn-secondary js-btn-buy
    // btnAddCard.setAttribute("onclick",clickButtonAddCard());
    var textAddCard = document.createTextNode("Add to cart"); 
    btnAddCard.appendChild(textAddCard);

    document.getElementsByClassName("list-products")[0].appendChild(Li);
    document.getElementById("item-product-" + (i + 1)).appendChild(img);
    document.getElementById("item-product-" + (i + 1)).appendChild(divItem);
    document.getElementById("info-product-" + (i + 1)).appendChild(H2);//div
    document.getElementById("info-product-" + (i + 1)).appendChild(B);//div
    document.getElementById("item-product-" + (i + 1)).appendChild(btnAddCard);
  }
}

function initEventListener() {
  for (let i = 0; i < lenProduct; i++) {
    document.getElementById("btn-card-" + (i+1)).addEventListener("click", function() {
      var num = ++count;
      document.getElementById('amount').innerHTML = num;
      document.getElementById("btn-card-" + (i+1)).disabled = true;
      cart = productList[i];    
      productsAddCart.push(cart);
    });
  }   
}
function moveToCartPage() {
  json = JSON.stringify(productsAddCart, cart, "\t");
  localStorage.setItem('productList',json);
  console.log(cart.length);
  lenCart = cart.length;
  location.href = "file:///home/betruong/Documents/FE/JS/bai2_giohang/cart.html";
}
function initCart() {
  if(localStorage.getItem('productList') !== null) {
    cart = JSON.parse(localStorage.getItem('cart'));
  } else {
    cart = [];
  }
}
addProductList();
initEventListener();