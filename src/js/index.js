let accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) =>
  item.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  })
);
