//save in local storage
const products=[
    {
        id:'1',
        title:"React.js",
        category:'fronend',
        update:'2022-08-27T04:27:51.160Z',   
    },
    {
        id:'2',
        title:"Vue.js",
        category:'fronend',
        update:'2022-08-28T04:27:51.160Z', 
        
    }
];
const categories=[
    {
        id:1,
        title:"frontend",
        description:"frontend of application",
        createdAt:'2022-08-29T04:44:29.748Z',
    },
]
export default class Storage{
    static getAllCategories(){
        const savedCategories=JSON.parse(localStorage.getItem('categories')) ||[];
        const sortedCategories=savedCategories.sort((a,b)=>{
           return (new Date(a.createdAt) > new Date(b.createdAt) )? -1:1;

        });
        return sortedCategories;
    }
    static saveCategory(categoryToSave){
        const allCategories=Storage.getAllCategories();
       const isExist= allCategories.find(c=>c.title === categoryToSave.title);
       if(isExist){
        isExist.title=categoryToSave.title;
        isExist.description=categoryToSave.description;

       }else{
        categoryToSave.id=new Date().getTime();
        categoryToSave.createdAt=new Date().toISOString();
        allCategories.push(categoryToSave);
       };
       localStorage.setItem('categories',JSON.stringify(allCategories));

    }
    static getAllProducts(){
        const allProducts=JSON.parse(localStorage.getItem('products'))||[];
        const sortedProducts=allProducts.sort((a,b)=>{
            return (new Date(a.update)> new Date(b.update))? -1:1;
        })
        return sortedProducts;
    }
    static saveProduct(productToSave){
        const savedProducts=Storage.getAllProducts();
        const isExistProduct=savedProducts.find(c=>c.title=== productToSave.title);
        if(isExistProduct){
            isExistProduct.title=productToSave.title;
            isExistProduct.category=productToSave.category;
            isExistProduct.quantity=productToSave.quantity;

        }else{
            productToSave.id= new Date().getTime();
            productToSave.update=new Date().toISOString();
            savedProducts.push(productToSave);

        }
        localStorage.setItem('products',JSON.stringify(savedProducts));
    }

    static deleteProduct(productToDeleteId){
        const allProducts=Storage.getAllProducts();
        const newProductslist=[]
         allProducts.forEach((element) => {
           if(element.id!== productToDeleteId)
           newProductslist.push(element);

            
         });
       
        localStorage.setItem('products',JSON.stringify(newProductslist));
        
        }
    
}
   















// export default class Storage{
//     static getAllCategories(){
//         const savedCategories=JSON.parse(localStorage.getItem('categories'))|| [];
//         const srtedCategories=savedCategories.sort((a, b) => {
//             return new Date(a.createdAt) > new Date(b.createdAt)  ? -1 : 1;
//         });
//         return srtedCategories;

//      };
//      static saveCategeory(categoryToSave){
//         const savedCategories=JSON.parse(localStorage.getItem('categories'))|| [];
//         const newCategory={
//           id:categoryToSave.id,
//           title:categoryToSave.title,
//           description:categoryToSave.description,
//           createdAt :new Date(),

//         };
//         savedCategories.push(newCategory);
//         localStorage.setItem(JSON.stringify(savedCategories));



//      }
    
//     };
    
