const data = [
  { name: "daksh", city: "chennai", email: "raam@gmail.com" },
  { name: "mohit", city: "mumbai", email: "raamuu@gmail.com" },
  { name: "raghav", city: "delhi", email: "kaamuu@gmail.com" },
];

const datas = document.getElementById("add");

const addData = (filteredCity = "") => {
  datas.innerHTML = ""; // Clear previous data

  data.forEach((ele) => {
    if (
      filteredCity === "" ||
      ele.city.toLowerCase() === filteredCity.toLowerCase()
    ) {
      const newcard = document.createElement("div");
      newcard.className = "card";
      newcard.innerHTML = `
            <h2>${ele.name}</h2>
            <p>City: ${ele.city}</p>
            <p>Email: ${ele.email}</p>
        `;
      datas.appendChild(newcard);
    }
  });
};

const removeCard = () => {
  datas.innerHTML = ""; // Clears all cards
};

const filterData = () => {
  const selectedCity = document.getElementById("citySelect").value;
  addData(selectedCity);
};

document.getElementById("addButton").addEventListener("click", () => addData());
document.getElementById("removeButton").addEventListener("click", removeCard);
document.getElementById("citySelect").addEventListener("change", filterData);
