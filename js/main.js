let title= document.getElementById("title")
let price =document.getElementById("price");
let taxes =document.getElementById("taxes");
let ads =document.getElementById("ads");
let discount =document.getElementById("discount");
let total =document.getElementById("total");
let count =document.getElementById("count");
let categoray =document.getElementById("categoray");
let submit =document.getElementById("submit");

let moodupsateandcreate ="create"
let tmb;

function gettotal(){
    if(price.value != ""){
         let totalvalue =  (+price.value + +taxes.value + +ads.value)- +discount.value;
         total.innerHTML=totalvalue;
         total.style.background="green"
    }else{
        total.innerHTML= "";
        total.style.background="rgb(96, 14, 14)"
    }
}

let arrproduct =localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")):[]; 
// let arrproduct =[];
submit.addEventListener("click",function(){
    let newproduct ={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        categoray:categoray.value.toLowerCase(),
    }
    if(title.value!="" &&price.value!=""&&newproduct.count<100){
if(moodupsateandcreate ==="create"){
    if (newproduct.count>1){
        for(let i=0 ; i<newproduct.count;i++){
            arrproduct.push(newproduct)
        }
    }else{
            arrproduct.push(newproduct)
        }
}else{
    arrproduct[tmb] = newproduct;
    count.style.display="block";
    submit.innerHTML="create";
    moodupsateandcreate ==="create";
}
cleardata()
}
    localStorage.setItem("product",JSON.stringify(arrproduct));
    
    console.log(arrproduct)
    showdata();
})



function cleardata()
{
    title.value="";
    price.value="";
    taxes.value="";
    ads.value="";
    discount.value="";
    total.innerHTML="";
    count.value="";
    categoray.value="";
}



let tbody =document.getElementById("tbody")
function showdata(){
    let table="";
    for(let i=0 ;i < arrproduct.length;i++){
        table += `
        <tr >
        <td>${i+1}</td>
        <td>${arrproduct[i].title}</td>
        <td>${arrproduct[i].price}</td>
        <td>${arrproduct[i].taxes}</td>
        <td>${arrproduct[i].ads}</td>
        <td>${arrproduct[i].discount}</td>
        <td>${arrproduct[i].total}</td>
        <td>${arrproduct[i].categoray}</td>
        <td><button onclick="updatee(${i})" id="ubdate">ubdate</button></td>
        <td><button onclick="deletdata(${i})" id="delete">delete</button></td>
        </tr>`
    }
    tbody.innerHTML=table;
    let btndelete =document.getElementById("btndelete")
    if(arrproduct.length>0){
        btndelete.innerHTML=`
        <button onclick="deletall()">Delet All(${arrproduct.length})</button>
        `
    }else{
        btndelete.innerHTML="";
    }
}
showdata()



function deletdata(i){
    arrproduct.splice(i,1)
    localStorage.product= JSON.stringify(arrproduct);
    showdata()
}
function deletall(){
   localStorage.clear();
    arrproduct.splice(0);
    showdata();
}
function updatee(i){
    title.value=arrproduct[i].title;
    price.value=arrproduct[i].price;
    taxes.value=arrproduct[i].price;
    ads.value=arrproduct[i].ads;
    discount.value=arrproduct[i].discount;
    categoray.value=arrproduct[i].categoray;
    gettotal()
    moodupsateandcreate="update"
    count.style.display="none"
    submit.innerHTML="update"
    tmb =i;
}




let searchmood ="title"
let search=document.getElementById("search")
function mooodsearch(id){
    if(id === "searchTitle"){
        search.placeholder="Seardh by title"
        searchmood ="title"
    }else{
        search.placeholder ="Seardh by catagory"
        searchmood ="catagory"
    }
    search.placeholder ="Seardh by " + searchmood
        search.focus()
        search.value="";
        showdata()
}




function searchdata(value){
    let table="";
    if(searchmood ==="title"){
        for(let i=0 ; i < arrproduct.length ;i++){
            if(arrproduct[i].title.includes(value.toLowerCase())){
                table += `
                <tr >
                <td>${ i}</td>
                <td>${arrproduct[i].title}</td>
                <td>${arrproduct[i].price}</td>
                <td>${arrproduct[i].taxes}</td>
                <td>${arrproduct[i].ads}</td>
                <td>${arrproduct[i].discount}</td>
                <td>${arrproduct[i].total}</td>
                <td>${arrproduct[i].categoray}</td>
                <td><button onclick="updatee(${i})" id="ubdate">ubdate</button></td>
                <td><button onclick="deletdata(${i})" id="delete">delete</button></td>
                </tr>`
            }
        }
    }else{
        for(let i=0 ; i < arrproduct.length ;i++){
            if(arrproduct[i].categoray.includes(value.toLowerCase())){
                table += `
                <tr >
                <td>${ i}</td>
                <td>${arrproduct[i].title}</td>
                <td>${arrproduct[i].price}</td>
                <td>${arrproduct[i].taxes}</td>
                <td>${arrproduct[i].ads}</td>
                <td>${arrproduct[i].discount}</td>
                <td>${arrproduct[i].total}</td>
                <td>${arrproduct[i].categoray}</td>
                <td><button onclick="updatee(${i})" id="ubdate">ubdate</button></td>
                <td><button onclick="deletdata(${i})" id="delete">delete</button></td>
                </tr>`
            }
        }
    }
    tbody.innerHTML=table;
}






