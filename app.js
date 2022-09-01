
const loadData = (inputValue, dataLimit)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.data, dataLimit))
}




const displayData = (phones, dataLimit)=>{
    console.log(dataLimit);
   const disData = document.getElementById("display-phone-data");
   disData.innerHTML=""
 
   const showAll= document.getElementById("showall");
   if(dataLimit && phones.length > 10){
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none")
   }else{
    showAll.classList.add("d-none")
   }
   
   const noPhone=  document.getElementById("no-found");
   if(phones.length == 0){
    noPhone.classList.remove("d-none")
   }
   else{
    noPhone.classList.add("d-none")
   }

    phones.forEach(phone => {
        const createDiv = document.createElement("div");
        createDiv.innerHTML=`
        <div class="col">
                    <div class="card">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
        `
        disData.appendChild(createDiv);
        
    });
    displayTogle(false);
}
const procesSearch=(dataLimit)=>{
    displayTogle(true);
    const inputField= document.getElementById("input-value");
    const inputValue = inputField.value;
    loadData(inputValue, dataLimit);
    inputField.value="";
}

document.getElementById("search-btn").addEventListener("click",function(){
    procesSearch(10)
})

document.getElementById("input-value").addEventListener('keypress',function(e){
    console.log(e.key);
    if (e.key === "Enter") {
        procesSearch(10)
    }
})

const displayTogle = isLoading =>{
    const loder = document.getElementById("togole");
    if(isLoading){
        loder.classList.remove("d-none");
    }
    else{
        loder.classList.add("d-none")
    }
}


document.getElementById("buttonShow").addEventListener("click",function(){
    procesSearch()
})