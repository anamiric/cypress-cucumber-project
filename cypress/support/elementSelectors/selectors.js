const address = {
    deliveryAddress: '#address_delivery',
    billingAddress: '#address_invoice'
}

const cart = {
    deleteIcon: '.icon-trash',
    quantity: '.cart_quantity_input',
    productsList: 'table tbody tr',
    cartEmptyMessage: '.alert',
    productPrice: '.price .price',
    shippingPrice: '#total_shipping',
    totalPrice: '#total_price'
}

const header = {
    signIn: '.login',
    signOut: '.logout',
    account: '.account'
}

const homePage = {
    logo: '.logo'
}

const tabs = {
    dresses: '.sf-menu > :nth-child(2)'
}

const orderConfirmation = {
    confirmOrder: '#cart_navigation > .button > span',
    orderSummary: '.box'
}

const payment = {
    paymentOptions: '#HOOK_PAYMENT',
    payByBankWire: '.bankwire'
}

const product = {
    item: '.sf-menu > :nth-child(2)',
    addToCart: '.ajax_add_to_cart_button > span',
    proceedToCheckout: '[title="Proceed to checkout"]'
}

const shipping = {
    tearmsOfServices: '#cgv'
}

const signInPage = {
    signInForm: '#login_form',
    error: '.alert'
}

const common = {
    proceedToCheckoutBtn: '.cart_navigation > .button > span',
    pageHeading: '.page-heading'    
}

export { common,  address, cart,header, homePage, tabs, orderConfirmation, payment, product, shipping, signInPage }