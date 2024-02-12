async function searchRecipes() {
  const searchInput = document.getElementById("searchInput").value;
  const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${searchInput}&limit=6`; // Added limit parameter
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6c50e91cd8msh9b3bb0dea50c652p1265b2jsn2432b0e5a22e",
      "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    let recipeCards = "";

    data.d.forEach((d) => {
      recipeCards += `
        <div class="col-md-4">
          <div class="card">
            <h5 class="card-title text-center">${d.Title}</h5>
            <img src="${d.Image}" class="card-img-top rounded-5" alt="${d.Title}" />
            <div class="card-body d-flex justify-content-center">
              <a href="#" class="btn btn-primary p-3">Click to view</a>
            </div>
          </div>
        </div>`;
    });

    document.getElementById("recipeContainer").innerHTML = recipeCards;
  } catch (error) {
    console.error(error);
  }
}
