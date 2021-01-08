//logic for click handlers and api calls

const addBurgerBtn = document.getElementById("addBurger");
addBurgerBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBurger = {
    burger: document.getElementsByName("burger")[0].value.trim()
  };
  console.log(newBurger);

  fetch("/api/burgers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBurger),
  }).then((response) => {
    document.getElementsByName("burger")[0].value = "";
    location.reoload();
  });
});
