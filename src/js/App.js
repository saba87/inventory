import categoryview from "./categoryview.js";
import productview from "./productview.js";
import Storage from "./storage.js";
const sortSelect= document.querySelector('#sort');
const productsList= document.querySelector('#products-list');


document.addEventListener('DOMContentLoaded',()=>{

    categoryview.setApp();
    categoryview.setCategorySelection();
    productview.setProductsList();
    
    sortSelect.addEventListener('change',(e)=>{
        if(sortSelect.value=== "latest"){
            const newestProducts=Storage.getAllProducts();
            const latestProducts=newestProducts.sort((a,b)=>{
                return (new Date(a.update)< new Date(b.update))? -1:1;
            });
            productsList.innerHTML="";
            latestProducts.forEach((element) => {
               
                let result=`  <div id=${element.id} class="flex justify-between">
                <span class="text-slate-200 text-sm">${element.title}</span>
                <div class="flex gap-x-2 items-center mb-8 justify-center">
                  <span class="text-slate-400 text-sm">${element.update}</span>
                  <span class="border border-slate-400 text-sm text-slate-400 rounded-2xl px-2 py-0.5">${element.category}</span>
                  <span class="w-6 h-6 rounded-full text-slate-200 border-slate-200 border  bg-slate-400 flex justify-center items-center  text-sm">${element.quantity}</span>
                  <button  class="text-red-400 border border-red-400 px-2 py-0.5 text-sm rounded-2xl">delete</button>
                </div>
              </div>`;
               productsList.innerHTML+=result;})
            console.log(latestProducts);
         
            
        }
        
      })
     

    
})
 