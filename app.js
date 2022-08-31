
const loadData = ()=>{
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res=>res.json())
    .then(data=>displayData(data.data))
}

loadData();


const displayData = (phones)=>{
    console.log(phones);
   const disData = document.getElementById("display-phone-data");
    phones.forEach(phone => {
        const createDiv = document.createElement("div");
        createDiv.innerHTML=`
        <div class="col">
                    <div class="card">
                        <img src="" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
        `
        disData.appendChild(createDiv);
        
    });
}