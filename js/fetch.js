fetch("https://fakestoreapi.com/products/5")
  .then((res) => res.json())
  .then((json) => console.log(json.title));
