const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleShoppingCart);
navbarEmail.addEventListener('click', toggleDesktopMenu);

//  Full Nav
function toggleMobileMenu() {
    const isShoppingCartOpen = shoppingCart.classList.contains('product-detail-animation');
    const isAsideBuyProductOpen = asideBuyProduct.classList.contains('product-detail-two-animation');
    if (isAsideBuyProductOpen) {
        asideBuyProduct.classList.remove('product-detail-two-animation');
    }
    if (isShoppingCartOpen) {
        shoppingCart.classList.remove('product-detail-animation');
    }
    mobileMenu.classList.toggle('mobile-menu-animation');
}

function toggleDesktopMenu() {
    const isShoppingCartOpen = shoppingCart.classList.contains('product-detail-animation');
    const isAsideBuyProductOpen = asideBuyProduct.classList.contains('product-detail-two-animation');
    if (isAsideBuyProductOpen) {
        asideBuyProduct.classList.remove('product-detail-two-animation');
    }
    if (isShoppingCartOpen) {
        shoppingCart.classList.remove('product-detail-animation');
    }
    desktopMenu.classList.toggle('desktop-menu-animation');
}

//  Aside right
function toggleShoppingCart() {
    const isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu-animation');
    const isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu-animation');
    const isAsideBuyProductOpen = asideBuyProduct.classList.contains('product-detail-two-animation');
    if (isAsideBuyProductOpen) {
        asideBuyProduct.classList.remove('product-detail-two-animation');
    }
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('mobile-menu-animation');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.remove('desktop-menu-animation');
    }
    shoppingCart.classList.toggle('product-detail-animation');
}

const btnCloseProductDetail = document.querySelector('.close-product-detail');
btnCloseProductDetail.addEventListener('click', toggleShoppingCart);

//  Main Cards
const productList = [];
class Product {
    constructor({
        name = 'Bike',
        price = 120,
        image = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description = 'With its practical position. this bike also fulfills a decorative functio, add your hall or workspace.',
    } = {}) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

productList.push(new Product());
productList.push(
    new Product({
        name: 'Pantalla',
        price: 600,
        image: 'https://media.istockphoto.com/photos/modern-living-room-interior-with-smart-tv-sofa-floor-lamp-and-potted-picture-id1332099020?k=20&m=1332099020&s=612x612&w=0&h=Eg4ylWPKcrcnQbBlp5LdDyDbbQgyyqKLTphRnh18rOo=',
        description: 'Una pantalla de 32 pulgadas 1080p'
    }),
    new Product({
        name: 'Nevera',
        price: 700,
        image: 'https://images.pexels.com/photos/5825422/pexels-photo-5825422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'La nevera más económica del mercado'
    }),
    new Product({
        name: 'Lavadora',
        price: 550,
        image: 'https://images.pexels.com/photos/4492273/pexels-photo-4492273.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Nada lava tan bien como esta lavadora'
    }),
    new Product({
        name: 'Estufa',
        price: 500,
        image: 'https://images.pexels.com/photos/4099350/pexels-photo-4099350.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Una de las mejores estufas del mercado'
    }),
    new Product({
        name: 'Cafetera',
        price: 380,
        image: 'https://images.pexels.com/photos/2147683/pexels-photo-2147683.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Nada como comenzar el día con un buen café'
    }),
    new Product({
        name: 'Sala',
        price: 900,
        image: 'https://images.pexels.com/photos/11766310/pexels-photo-11766310.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Nada más comodo que estas bellezas'
    }),
    new Product({
        name: 'Comedor',
        price: 750,
        image: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Un hermoso comedor de 4 puestos'
    }),
    new Product({
        name: 'Cama',
        price: 700,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Si lo tuyo es procastinar, esta es para tí'
    }),
    new Product({
        name: 'Escritorio',
        price: 780,
        image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Trabaja a gusto con este escritorio minimalista'
    }),
    new Product({
        name: 'Portatil',
        price: 980,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Tú mejor álido para trabajar y disfrutar'
    }),
    new Product({
        name: 'Xbox',
        price: 1200,
        image: 'https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Una consola xbox one en buen estado'
    }),
);

// Estructura HTML de un Producto
{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */}

const cardsContainer = document.querySelector('.cards-container');
const misProductosDom = (productList) => { productList.forEach(product => productDom(product)) };

function productDom(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('value', product.name);

    const img = document.createElement('img');
    const url = product.image;
    img.setAttribute('src', url);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const info = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    info.appendChild(productPrice);
    info.appendChild(productName);

    const productFigure = document.createElement('figure');
    const btnAddCart = document.createElement('img');
    btnAddCart.classList.add('buy-product');
    btnAddCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(btnAddCart);

    productInfo.appendChild(info);
    productInfo.appendChild(productFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

misProductosDom(productList);

// Add Product Cart
const cardProduct = document.querySelectorAll('.product-card');
let closeAsideBuyProduct;
const asideBuyProduct = document.querySelector('.product-detail-two');
cardProduct.forEach(card => card.addEventListener('click', openAsideProduct));

function openAsideProduct(e) {
    const cardActive = e.currentTarget;
    const nameProductActive = cardActive.getAttribute('value');
    const productActive = productList.find(product => product.name == nameProductActive);

    const isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu-animation');
    const isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu-animation');
    const isShoppingCartOpen = shoppingCart.classList.contains('product-detail-animation');
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('mobile-menu-animation');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.remove('desktop-menu-animation');
    }
    if (isShoppingCartOpen) {
        shoppingCart.classList.remove('product-detail-animation');
    }
    if (asideBuyProduct.classList.contains('product-detail-two-animation')) {
        closeAsideProductAsync(productActive);
    } else {
        makeAsideInfoProduct(productActive);
        asideBuyProduct.classList.add('product-detail-two-animation');
    }
}

const closeAsideProductPromise = () => {
    return new Promise((resolve, reject) => {
        closeAsideProduct();
        if (asideBuyProduct.classList.contains('product-detail-two-animation')) {
            reject(new Error('No se pudo cerrar la información del producto'));
        } else {
            setTimeout(() => resolve('Se cerro la info'), 800);
        }
    })
}

const closeAsideProductAsync = async (productActive) => {
    const close = await closeAsideProductPromise();
    makeAsideInfoProduct(productActive);
    asideBuyProduct.classList.add('product-detail-two-animation');
}

function closeAsideProduct() {
    asideBuyProduct.classList.remove('product-detail-two-animation');
}

// Estructura del aside info de un producto
{/* <aside class="product-detail-two">
        <div class="product-detail-close">
            <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        <div class="product-info">
            <p>$35,00</p>
            <p>Bike</p>
            <p>With its practical position.
                this bike also fulfills a
                decorative functio, add your
                hall or workspace.
            </p>
            <button class="primary-button add-to-cart-button">
                <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                Add to cart
            </button>
        </div>
    </aside> */}
function makeAsideInfoProduct(product) {
    asideBuyProduct.innerHTML = '';
    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');

    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', './icons/icon_close.png');
    closeIcon.setAttribute('alt', 'close');

    productDetailClose.appendChild(closeIcon);

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);
    imgProduct.setAttribute('alt', product.name);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const priceProduct = document.createElement('p');
    priceProduct.innerText = '$' + product.price;

    const nameProduct = document.createElement('p');
    nameProduct.innerText = product.name;

    const descriptionProduct = document.createElement('p');
    descriptionProduct.innerText = product.description;

    const btnAddCart = document.createElement('button');
    btnAddCart.classList.add('primary-button', 'add-to-cart-button');

    const iconCart = document.createElement('img');
    iconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    iconCart.setAttribute('alt', 'add to cart');

    const textBtnAddCart = document.createTextNode('Add to cart');

    btnAddCart.appendChild(iconCart);
    btnAddCart.appendChild(textBtnAddCart);

    productInfo.appendChild(priceProduct);
    productInfo.appendChild(nameProduct);
    productInfo.appendChild(descriptionProduct);
    productInfo.appendChild(btnAddCart);

    asideBuyProduct.appendChild(productDetailClose);
    asideBuyProduct.appendChild(imgProduct);
    asideBuyProduct.appendChild(productInfo);

    closeAsideBuyProduct = document.querySelector('.product-detail-close');
    closeAsideBuyProduct.addEventListener('click', closeAsideProduct);
}


