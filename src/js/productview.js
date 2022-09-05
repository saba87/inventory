 import Storage from "./storage.js";
const addProductButton= document.querySelector('#product-add-btn');
const productTitle= document.querySelector('#product-title');
const productQuantity=document.querySelector('#product-quantity');
const productCategory= document.querySelector('#product-category');
const productsList= document.querySelector('#products-list');
const search=document.querySelector("#search");




 class Productsview{
  constructor(){
    addProductButton.addEventListener('click',(e)=>{this.addProduct(e)});
    search.addEventListener('input',(e)=>{this.searchProduct(e)});
  
    const products=[];


  }
  addProduct(e){
    const title=productTitle.value;
    const quantity=productQuantity.value;
    const category=productCategory.value;
    if(!title || !quantity || !category){
      return;
    }
    Storage.saveProduct({title,quantity,category});
    this.products=Storage.getAllProducts();
    console.log(this.products);
    this.setProductsList();
    productTitle.value="";
    productQuantity.value="";
    productCategory.value="select a category";
     
  }
  setProductsList(){
    const storedrproducts=Storage.getAllProducts();
    productsList.innerHTML="";
    if(storedrproducts){
      storedrproducts.forEach((element) => {
        let result=`  <div id=${element.id} class="flex justify-between">
        <span class="text-slate-200 text-sm">${element.title}</span>
        <div class="flex gap-x-2 items-center mb-8 justify-center">
          <span class="text-slate-400 text-sm">${element.update}</span>
          <span class="border border-slate-400 text-sm text-slate-400 rounded-2xl px-2 py-0.5">${element.category}</span>
          <span class="w-6 h-6 rounded-full text-slate-200 border-slate-200 border  bg-slate-400 flex justify-center items-center  text-sm">${element.quantity}</span>
          <button  class="text-red-400 border border-red-400 px-2 py-0.5 text-sm rounded-2xl">delete</button>
        </div>
      </div>`;
       productsList.innerHTML+=result;
        
       });
    
    }
 
   productsList.addEventListener('click',(e)=>{
    if(e.target.innerHTML=== 'delete')
     {   
        const productDiv=e.target.parentElement.parentElement;
        productsList.removeChild(productDiv);
        Storage.deleteProduct(parseInt(productDiv.id));
     }
   })

  }
  searchProduct(e){
    const searchedProduct=e.target.value.trim().toLowerCase();
    this.products=Storage.getAllProducts();
    productsList.innerHTML="";
    this.products.forEach(item=>{
      if(item.title.includes(searchedProduct)){
        let result=`  <div id=${item.id} class="flex justify-between">
        <span class="text-slate-200 text-sm">${item.title}</span>
        <div class="flex gap-x-2 items-center mb-8 justify-center">
          <span class="text-slate-400 text-sm">${item.update}</span>
          <span class="border border-slate-400 text-sm text-slate-400 rounded-2xl px-2 py-0.5">${item.category}</span>
          <span class="w-6 h-6 rounded-full text-slate-200 border-slate-200 border  bg-slate-400 flex justify-center items-center  text-sm">${item.quantity}</span>
          <button  class="text-red-400 border border-red-400 px-2 py-0.5 text-sm rounded-2xl">delete</button>
        </div>
      </div>`;
       productsList.innerHTML+=result;
        

      }
    })
  }


  

 }
 export default new Productsview();