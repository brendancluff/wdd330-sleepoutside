const category = getParam("category") || "tents";

const categoryNames = {
  tents: "Tents",
  backpacks: "Backpacks",
  "sleeping-bags": "Sleeping Bags",
  hammocks: "Hammocks",
};

document.querySelector("#category-title").textContent =
  `Top Products: ${categoryNames[category] || "Products"}`;