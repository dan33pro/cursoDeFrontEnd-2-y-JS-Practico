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
    if (isShoppingCartOpen) {
        shoppingCart.classList.remove('product-detail-animation');
    }
    mobileMenu.classList.toggle('mobile-menu-animation');
}

function toggleDesktopMenu() {
    const isShoppingCartOpen = shoppingCart.classList.contains('product-detail-animation');
    if (isShoppingCartOpen) {
        shoppingCart.classList.remove('product-detail-animation');
    }
    desktopMenu.classList.toggle('desktop-menu-animation');
}

//  Aside right
function toggleShoppingCart() {
    const isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu-animation');
    const isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu-animation');
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('mobile-menu-animation');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.remove('desktop-menu-animation');
    }
    shoppingCart.classList.toggle('product-detail-animation');
}

//  Main Cards
const productList = [];
class Product {
    constructor({
        name = 'Bike',
        price = 120,
        image = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    } = {}) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

productList.push(new Product());
productList.push(
    new Product({
        name: 'Pantalla',
        price: 600,
        image: 'https://media.istockphoto.com/photos/modern-living-room-interior-with-smart-tv-sofa-floor-lamp-and-potted-picture-id1332099020?k=20&m=1332099020&s=612x612&w=0&h=Eg4ylWPKcrcnQbBlp5LdDyDbbQgyyqKLTphRnh18rOo=',
    }),
    new Product({
        name: 'Nevera',
        price: 700,
        image: 'https://images.pexels.com/photos/5825422/pexels-photo-5825422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }),
    new Product({
        name: 'Lavadora',
        price: 550,
        image: 'https://images.pexels.com/photos/4492273/pexels-photo-4492273.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Estufa',
        price: 500,
        image: 'https://images.pexels.com/photos/4099350/pexels-photo-4099350.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Cafetera',
        price: 380,
        image: 'https://images.pexels.com/photos/2147683/pexels-photo-2147683.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Sala',
        price: 900,
        image: 'https://images.pexels.com/photos/11766310/pexels-photo-11766310.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Comedor',
        price: 750,
        image: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Cama',
        price: 700,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Escritorio',
        price: 780,
        image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Portatil',
        price: 980,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
    }),
    new Product({
        name: 'Xbox',
        price: 1200,
        image: 'https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg?auto=compress&cs=tinysrgb&w=400',
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
const misProductosDom = (productList) => { productList.forEach( product => productDom(product) ) };

function productDom(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

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
    const btnAddCart = document.createElement('ing');
    btnAddCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(btnAddCart);

    productInfo.appendChild(info);
    productInfo.appendChild(productFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

misProductosDom(productList);


