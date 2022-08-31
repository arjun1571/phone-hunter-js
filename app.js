
const loadData = (inputValue)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.data))
}

loadData();


const displayData = (phones)=>{
    console.log(phones);
   const disData = document.getElementById("display-phone-data");
   disData.innerHTML=""
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
}


document.getElementById("search-btn").addEventListener("click",function(){
    const inputField= document.getElementById("input-value");
    const inputValue = inputField.value;
    loadData(inputValue);
    inputField.value=""
})

