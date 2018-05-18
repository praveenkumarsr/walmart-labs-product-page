module.exports = {

//Header Search
    searchField: {id: 'global-search'},
    searchButton: {css: '.button-submit'},

//Item SKU - Stock Keeping Unit
    itemSKU: {xpath: '//article[@id="thumb-10320206" and contains(@class, "standard-thumb")]/a/div[1]/div[2]/img'},

//Carousel Buttons
    carouselNextButton: {css: '.flex-next'},
    carouselPreviousButton: {css: '.flex-prev'},

//Zoom Button & Dialog
    zoomButton: {xpath: '//div[@id="under-product"]/button'},
    zoomNextButton: {css: '.zoom-next'},
    zoomPreviousButton: {css: '.zoom-prev'},

//Add to Cart
    addToCartButton: {css: '.add-to-cart-btn'},
    addToCartDialog: {css: '.addCart-Lightbox'},
    addToCartCloseButton: {xpath: '//div[contains(@class, "add-cart-confirmation")]/div'},
    shoppingCartIcon: {id: 'shopping-cart-icon'},
    shoppingCartCount: {xpath: '//a[@id="nav-cart"]/span'},

//Write Review
    writeReviewButton: {css: '.bv-write-review'},
    writeReviewDialog: {id: 'bv-mbo-lightbox-list'},
    postReviewButton: {css: '.bv-submission-button-submit'},
    overallRatingLabel: {id: 'bv-fieldset-label-rating'},
    overallRatingErrorIcon: {xpath: '//form[contains(@id,"bv-submitreview-product-6000166640578"]/div/div[1]/fieldset[1]/span[2]/span[1]/span/span[2]'},
    nicknameLabel: {xpath: '//label[@for="bv-text-field-usernickname"]/span/span'},
    nicknameTextField: {id: 'bv-text-field-usernickname'},
    nicknameErrorText: {xpath: '//fieldset[contains(@class, "bv-fieldset-usernickname")]/div[2]/span/label'}

}