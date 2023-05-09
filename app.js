const menu = [
  {
    id: 1,
    title: "Chocolate Muffin",
    category: "breakfast",
    price: 6.99,
    img: "./img/item-1.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
  {
    id: 2,
    title: "Delicious Muffin",
    category: "lunch",
    price: 4.99,
    img: "./img/item-2.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
  {
    id: 3,
    title: "Choco Pancake",
    category: "breakfast",
    price: 10.99,
    img: "./img/item-3.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 15.99,
    img: "./img/item-4.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
  {
    id: 5,
    title: "Berries Milkshake",
    category: "lunch",
    price: 7.99,
    img: "./img/item-5.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
  {
    id: 6,
    title: "Double Sandwich",
    category: "lunch",
    price: 12.99,
    img: "./img/item-6.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
  {
    id: 7,
    title: "Fruity Breakfast",
    category: "breakfast",
    price: 14.99,
    img: "./img/item-7.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
  {
    id: 8,
    title: "Classic Rice",
    category: "dinner",
    price: 12.99,
    img: "./img/item-8.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "dinner",
    price: 16.99,
    img: "./img/item-9.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse libero voluptatum assumenda `,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// loading the items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filtering the items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
