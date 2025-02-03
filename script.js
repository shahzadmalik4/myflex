const products =
    [
        {
            id: 0,
            name: "burger",
            price: 567,
            desc: "gdf safdwasf shfj",
            image: "./images/1.jpg"
        },
        {
            id: 1,

            name: "pizza",
            price: 567,
            desc: "gdf safdwasf shfj",
            image: "./images/2.jpg"
        },
        {
            id: 2,

            name: "biryani",
            price: 567,
            desc: "gdf safdwasf shfj",
            image: "./images/3.jpg"
        },
        {
            id: 3,

            name: "biryani",
            price: 567,
            desc: "gdf safdwasf shfj",
            image: "./images/3.jpg"
        },
        {
            id: 4,

            name: "biryani",
            price: 567,
            desc: "gdf safdwasf shfj",
            image: "./images/3.jpg"
        },
        {
            id: 5,

            name: "biryani",
            price: 567,
            desc: "gdf safdwasf shfj",
            image: "./images/3.jpg"
        },
    ]

for (var i = 0; i < products.length; i++) {
    console.log(products[i])
    document.querySelector(".parent").innerHTML += `
     <div class="card" style="width: 18rem;">
    <img src=${products[i].image} class="card-img-top" alt="..." width="200" height="200">
    <div class="card-body">
      <h5 class="card-title">${products[i].name}</h5>
      <p class="card-text">${products[i].price}</p>

      <p class="card-text">${products[i].desc}</p>
    <button  onclick="showData(${products[i].id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Go somewhere</button>
    </div>
  </div>
    
    `
}

function showData(id)
{
    console.log(products[id])
   document.querySelector(".modal-dialog").innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${products[id].name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <img src=${products[id].image} class="card-img-top" alt="..." width="200" height="200">
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
   
   `
}

