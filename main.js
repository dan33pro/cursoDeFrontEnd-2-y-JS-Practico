const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleShoppingCart);
navbarEmail.addEventListener('click', toggleDesktopMenu);

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


