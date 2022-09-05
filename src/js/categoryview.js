import Storage from "./storage.js";

const categoryTitle=document.querySelector('#category_title');
const categoryDescription=document.querySelector('#category_description');
const categoryAddBtn= document.querySelector('#category_Add');
const addCancleCategoryBtn=document.getElementById('add-category');
const lableForm=document.querySelector('#lable-category-form');
const categoryForm= document.querySelector('#category-form');
const cancleCreateCategory= document.querySelector('#category_cancle');


 class  Categoryview{
    constructor(){
        categoryAddBtn.addEventListener('click',(e)=>{this.addCategory(e)});
        addCancleCategoryBtn.addEventListener('click',(e)=>{this.showcategory(e)});
        cancleCreateCategory.addEventListener('click',(e)=>{this.cancleCategory(e)});
        this.categories=[];
       
    }

    addCategory(e){
        
        const title=categoryTitle.value;
        const description =categoryDescription.value;
        if(!title || !description) return;
        Storage.saveCategory({title,description});
        categoryTitle.value="";
        categoryDescription.value="";
        this.categories=Storage.getAllCategories();
        this.setCategorySelection();
    }
    setApp(){
        this.categories=Storage.getAllCategories();
    
    }
    setCategorySelection(){
        let result=`<option value="select a category" class="bg-slate-500 text-slate-300">select a category</option>`;
        this.categories.forEach((item) => {
            result+=`<option value="${item.title}" class="bg-slate-500 text-slate-300">${item.title}</option>`; 
        });
        
       const categorySelect= document.querySelector('#product-category');
       categorySelect.innerHTML=result;
    }
    showcategory(){
        addCancleCategoryBtn.classList.add('hidden');
        lableForm.classList.remove('hidden');
        categoryForm.classList.remove('hidden');

    }
    cancleCategory(){
    
        addCancleCategoryBtn.classList.remove('hidden');
        lableForm.classList.add('hidden');
        categoryForm.classList.add('hidden');
    }
}
export default new Categoryview();
