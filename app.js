
const loadData = (inputValue)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.data))
}




const displayData = (phones)=>{
    console.log(phones);
   const disData = document.getElementById("display-phone-data");
   disData.innerHTML=""
   phones = phones.slice(0, 10);
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


document.getElementById("search-btn").addEventListener("click",function(){
    displayTogle(true);
    const inputField= document.getElementById("input-value");
    const inputValue = inputField.value;
    loadData(inputValue);
    inputField.value="";
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

