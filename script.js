const products = [
  {
    id: 1,
    name: 'Безпровідна колонка',
    price: 2990,
    description: 'Чисте звучання для музики, ігор і розмов.',
    category: 'gadget',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2Md8ToAMGiHcSylue-VGUbaNZn4_SLi4K2c9R1u3S3c9mUYFoZCwG4lMTojALJ13qBgtcG3PI_hSGodz_YN1K25o1ittBiKzghfJwF_CDn3yb7S6axN67l4FPD-kVEoZnlghbZg&usqp=CAc',
  },
  {
    id: 2,
    name: 'Навушники з шумопоглинанням',
    price: 3999,
    description: 'Контроль музики та звуком прямо на голові.',
    category: 'gadget',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdVmB8g9EZ8bDczKHLfyAfJ_lJTXBWPqZjLcBD1cpcG09Y8IqJOI8UOEf1RshT_Gyob0h3AxQHXOs53YpO4jfict26v95YRjh2wrqYclCGpEYYLtdywzxWAFK_QZW8Nl8CLqM0fg&usqp=CAc',
  },
  {
    id: 3,
    name: 'Ігрова миша',
    price: 1799,
    description: 'Висока точність та швидкість для геймерів.',
    category: 'gadget',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcST46eh0yQ6vSQ4R9g13OZAngFHqd4TkfU1vz4sLKMMOnJMvpCqQl8oUsZbMBZcNeYwWE2-1L3-cuVqJKBhvZmfBUQH3GZfhZxA5t43Z2mbbMkaDv3Pu4ng&usqp=CAc',
  },
  {
    id: 4,
    name: 'Ігрова клавіатура',
    price: 6844,
    description: 'Механічні клавіші з підсвічуванням для ігор.',
    category: 'gadget',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnS8EXDpKI1ecYOgixCRm6UXy86Z7lO0wvMh89hLc0qJoUdHXD6UJyMXziwZYdleCIyWtVRheU_AR1Bhu6GgtGwabNErpa8KO6uGRJadprXFCRooPQ3z1Lng&usqp=CAc',
  },
  {
    id: 5,
    name: 'Смарт-годинник',
    price: 2349,
    description: 'Контроль здоров’я та сповіщення прямо на зап’ясті.',
    category: 'gadget',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-FGBHVodKHBji3iBItPpwoA-0XbpO2ctRA&s',
  },
  {
    id: 6,
    name: 'Фітнес-браслет',
    price: 739,
    description: 'Моніторинг фізичної активності та здоров’я.',
    category: 'gadget',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktbzAc8DRH8_fKJSvmZUYtQc1DvQ9-eaZOg&s',
  },
  {
    id: 7,
    name: ' Портативний зарядний пристрій',
    price: 1689,
    description: 'Заряджайте свої пристрої будь-де.',
    category: 'gadget',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvhaPaThh1uW3WUIiptVeH41ETTJu06xCnA&s',
  },
  {
    id: 8,
    name: 'Смартфон',
    price: 13256,
    description: 'Сучасний смартфон з високими характеристиками.',
    category: 'gadget',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjgwZje1RGPmGXtDe_tfDwsVuI6VpWMKkLw&s',
  },
  {
    id: 9,
    name: 'Гаджет-подарунок',
    price: 999,
    description: 'Набір аксесуарів для роботи та розваг.',
    category: 'gadget',
    image: '',
  },
  {
    id: 10,
    name: 'Bluetooth-колонка',
    price: 2499,
    description: 'Яскравий звук для вечірок чи відпочинку.',
    category: 'gadget',
    image: '',
  },
  {
    id: 11,
    name: 'Чохол для смартфона',
    price: 399,
    description: 'Міцний і стильний чохол, що захищає від ударів і подряпин.',
    category: 'accessory',
    image: '',
  },
  {
    id: 12,
    name: 'Безпровідні навушники',
    price: 1299,
    description: 'Зручні навушники з чистим звуком і тривалим часом роботи.',
    category: 'accessory',
    image: '',
  },
  {
    id: 13,
    name: 'Павербанк',
    price: 799,
    description: 'Потужний зарядний пристрій для всіх пристроїв на ходу.',
    category: 'accessory',
    image: '',
  },
  {
    id: 14,
    name: 'Магнітна підставка',
    price: 549,
    description: 'Надійна підставка для телефону або планшета на робочому столі.',
    category: 'accessory',
    image: '',
  },
  {
    id: 15,
    name: 'Кабель USB-C',
    price: 249,
    description: 'Швидка передача даних і зарядка для сучасних пристроїв.',
    category: 'accessory',
    image: '',
  },
  {
    id: 16,
    name: 'Силіконовий браслет',
    price: 199,
    description: 'Комфортний браслет для фітнес-трекера або розумного годинника.',
    category: 'accessory',
    image: '',
  },
  {
    id: 17,
    name: 'Bluetooth-колонка',
    price: 999,
    description: 'Компактна колонка з глибоким звуком для дому та подорожей.',
    category: 'accessory',
    image: '',
  },
  {
    id: 18,
    name: 'Сенсорний стилус',
    price: 349,
    description: 'Точний стилус для планшета та смартфона для малювання і нотаток.',
    category: 'accessory',
    image: '',
  },
  {
    id: 19,
    name: 'Сумка для ноутбука',
    price: 799,
    description: 'Зручна сумка з додатковими кишенями для зарядки та аксесуарів.',
    category: 'accessory',
    image: '',
  },
  {
    id: 20,
    name: 'Захисне скло',
    price: 299,
    description: 'Тонке, але міцне скло для екрану телефону, що захищає від подряпин.',
    category: 'accessory',
    image: '',
  },
];

const giftCards = [
  {
    id: 101,
    name: 'Steam Gift Card 500₴',
    price: 500,
    description: 'Для покупок ігор та DLC у Steam.',
  },
  {
    id: 102,
    name: 'PlayStation Store 800₴',
    price: 800,
    description: 'Подарунок для власників PlayStation.',
  },
  {
    id: 103,
    name: 'Xbox Gift Card 1000₴',
    price: 1000,
    description: 'Підходить для Xbox та Microsoft Store.',
  },
  {
    id: 104,
    name: 'Nintendo eShop 700₴',
    price: 700,
    description: 'Ідеальний подарунок для фанатів Nintendo.',
  },
];

const cart = [];

const productGrid = document.getElementById('productGrid');
const giftCardGrid = document.getElementById('giftCardGrid');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutButton = document.getElementById('checkoutButton');
const themeToggle = document.getElementById('themeToggle');
const largeTextToggle = document.getElementById('largeTextToggle');

function formatPrice(value) {
  return value.toLocaleString('uk-UA');
}

function renderCards(items, container) {
  container.innerHTML = items
    .map(
      item => `
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card product-card h-100 shadow-sm">
          ${item.image ? `<img src="${item.image}" class="card-img-top product-image" alt="${item.name}">` : ''}
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-muted mb-4">${item.description}</p>
            <div class="mt-auto">
              <p class="product-price text-primary mb-3">${formatPrice(item.price)} ₴</p>
              <button class="btn btn-primary w-100" onclick="addToCart(${item.id})">Додати в кошик</button>
            </div>
          </div>
        </div>
      </div>
    `,
    )
    .join('');
}

function addToCart(itemId) {
  const product = products.find(p => p.id === itemId) || giftCards.find(c => c.id === itemId);
  if (!product) return;

  const existing = cart.find(entry => entry.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(itemId) {
  const index = cart.findIndex(entry => entry.id === itemId);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function changeQuantity(itemId, delta) {
  const item = cart.find(entry => entry.id === itemId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  updateCart();
}

function updateCart() {
  if (cartCount) {
    cartCount.textContent = cart.reduce((sum, entry) => sum + entry.quantity, 0);
  }

  if (cartTotal) {
    cartTotal.textContent = formatPrice(cart.reduce((sum, entry) => sum + entry.quantity * entry.price, 0));
  }

  if (cartItems) {
    renderCartItems();
  }
}

function renderCartItems() {
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Кошик порожній. Додайте товари, щоб оформити замовлення.</p>';
    return;
  }

  cartItems.innerHTML = cart
    .map(
      item => `
        <div class="cart-item row align-items-center">
          <div class="col-6">
            <h6 class="mb-1">${item.name}</h6>
            <p class="mb-1 text-muted">${item.description}</p>
            <p class="mb-0">Ціна: ${formatPrice(item.price)} ₴</p>
          </div>
          <div class="col-3 text-center">
            <div class="input-group input-group-sm">
              <button class="btn btn-outline-secondary" type="button" onclick="changeQuantity(${item.id}, -1)">−</button>
              <input type="text" class="form-control text-center" value="${item.quantity}" readonly>
              <button class="btn btn-outline-secondary" type="button" onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
          </div>
          <div class="col-3 text-end">
            <p class="mb-2">Сума: ${formatPrice(item.price * item.quantity)} ₴</p>
            <button class="btn btn-sm btn-danger" type="button" onclick="removeFromCart(${item.id})">Видалити</button>
          </div>
        </div>
      `,
    )
    .join('');
}

if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Ваш кошик порожній. Додайте товари перед оформленням.');
      return;
    }
    cart.length = 0;
    updateCart();
    alert('Дякуємо за замовлення! Ваші покупки успішно оформлені.');
    const cartCanvas = document.getElementById('cartCanvas');
    if (cartCanvas) {
      const offcanvas = bootstrap.Offcanvas.getInstance(cartCanvas);
      if (offcanvas) offcanvas.hide();
    }
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
      const modal = bootstrap.Modal.getInstance(cartModal);
      if (modal) modal.hide();
    }
  });
}

if (productGrid) renderCards(products, productGrid);
if (giftCardGrid) renderCards(giftCards, giftCardGrid);
updateCart();

if (themeToggle && largeTextToggle) {
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('theme-dark', themeToggle.checked);
  });

  largeTextToggle.addEventListener('change', () => {
    document.body.classList.toggle('large-text', largeTextToggle.checked);
  });
}
