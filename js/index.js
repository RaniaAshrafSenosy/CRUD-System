productNameInput = document.getElementById("productName");
productPriceInput = document.getElementById("productPrice");
productCategoryInput = document.getElementById("productCategory");
productDescInput = document.getElementById("productDesc");
inputs = document.getElementsByClassName("form-control");
var addBtn = document.getElementById("addBtn");
var products = [];
var searchInput=document.getElementById("searchInput");

if (JSON.parse(localStorage.getItem("ProductList")) != null) {
  products = JSON.parse(localStorage.getItem("ProductList"));
  displayProduct();
}
addBtn.onclick = function () {
  addProduct();
  displayProduct();
  clearForm();
};
function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  products.push(product);
  localStorage.setItem("ProductList",JSON.stringify(products));
}
function displayProduct() {
  var data = "";
  for (var i = 0; i < products.length; i++) {
    data += `<tr> 
        <td>${products[i].name}</td>
        <td>${products[i].price} </td>
        <td>${products[i].category} </td>
        <td>${products[i].desc} </td>
        <td> <button class="btn btn-warning"> Update </button> </td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-danger"> Delete</button></td>
        </tr>`;
  }
  document.getElementById("tBody").innerHTML = data;
}
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("ProductList",JSON.stringify(products));
  displayProduct();
  

}
function clearForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = " ";
  }
}
searchInput.onkeyup=function(){
    var data = "";
        for (var i = 0; i < products.length; i++) {
            if(products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())){
            data += `<tr> 
                <td>${products[i].name}</td>
                <td>${products[i].price} </td>
                <td>${products[i].category} </td>
                <td>${products[i].desc} </td>
                <td> <button class="btn btn-warning"> Update </button> </td>
                <td><button onclick='deleteProduct(${i})' class="btn btn-danger"> Delete</button></td>
                </tr>`;
          }
          document.getElementById("tBody").innerHTML = data;

    }

}
