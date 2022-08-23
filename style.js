fetch('http://localhost:5000/products/fruits') 
.then((response)=>{
    return response.json();
})
.then(function(information){
    console.log(information); 

let fruits=document.getElementById('fruList')  
information.forEach(k=>{
    let singleFruit=document.createElement('li') 
    singleFruit.innerText=`${k.name}` 
    fruits.appendChild(singleFruit) 

})    

})   
.catch((error)=>{
    console.log('error',error) 
});   

fetch('http://localhost:5000/products/vegetables')
.then((response)=>{ 
    return response.json();    
})
.then((information)=>{
    console.log(information);

let veggies=document.getElementById('vegList');
info.forEach(k=>{
    let singleVegetable=document.createElement('li');
    singleVegetable.innerText=`${k.name}`
    veggies.appendChild(singleVegetable)
})    
})
.catch((error)=>{
    console.log('error',error);
}) ;


