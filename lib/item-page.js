var ItemPage = require ('./base-page');
var locator = require ('../resources/locators');
var config = require('../config/env-config');
var dataInput = require ('../config/data-input');


ItemPage.prototype.clickAddToCartButton = function(){
    return this.find(locator.addToCartButton).click();
}

ItemPage.prototype.clickAddToCartCloseButton = function(){
    return this.find(locator.addToCartCloseButton).click();
}

ItemPage.prototype.clickCarouselNextButton = function(){
    return this.find(locator.carouselNextButton).click();
}

ItemPage.prototype.clickCarouselPreviousButton = function(){
    return this.find(locator.carouselPreviousButton).click();
}

ItemPage.prototype.clickItem = function(){
    return this.find(locator.itemSKU).click();
}

ItemPage.prototype.clickPostReviewButton = function(){
    return this.find(locator.postReviewButton).click();
}

ItemPage.prototype.clickWriteReviewButton = function(){
    return this.find(locator.writeReviewButton).click();
}

ItemPage.prototype.clickSearch = function(){
    return this.find(locator.searchButton).click();
}

ItemPage.prototype.clickZoomButton = function(){
    return this.find(locator.zoomButton).click();
}

ItemPage.prototype.clickZoomNextButton = function(){
    return this.find(locator.zoomNextButton).click();
}

ItemPage.prototype.clickZoomPreviousButton = function(){
    return this.find(locator.zoomPreviousButton).click();
}

ItemPage.prototype.enterSearchText = function(){
    var search_text;
    switch(config.language){
        case 'en': search_text = dataInput.search_text_en
                    break;
        case 'fr': search_text = dataInput.search_text_fr
                    break;
    }
    this.write(locator.searchField, search_text);
}

ItemPage.prototype.getCarouselNextButtonState = function(){
    //console.log(this.find(locator.carouselNextButton).isEnabled());
    return{
        //state: this.find(locator.carouselNextButton).isEnabled()
        state: this.find(locator.carouselNextButton).getCssValue('disabled')
    }
}

ItemPage.prototype.getCarouselPreviousButtonState = function(){
    //console.log(this.find(locator.carouselPreviousButton).isEnabled());
    return{
        state: this.find(locator.carouselPreviousButton).isEnabled()
    }
}

ItemPage.prototype.getShoppingCartCount = function(){
    return this.find(locator.shoppingCartCount).getText();
}

ItemPage.prototype.getNicknameErrorActual = function(){
    return this.find(locator.nicknameErrorText).getText();
}

ItemPage.prototype.getNicknameErrorExpected = function(){
    var nickname_error;
    switch(config.language){
        case 'en': nickname_error = dataInput.nickname_error_en
                    break;
        case 'fr': nickname_error = dataInput.nickname_error_fr
                    break;
    }
    return nickname_error;
}

ItemPage.prototype.nicknameState = function(){
    return{
        labelColor: this.find(locator.nicknameLabel).getCssValue('color'),
        textFieldColor: this.find(locator.nicknameTextField).getCssValue('color')
    }
}

ItemPage.prototype.goToUrl = function(){
    var home_page_url;
    switch(config.language){
        case 'en': home_page_url = config.home_page_url_en
                    break;
        case 'fr': home_page_url = config.home_page_url_fr
                    break;
    }
    return home_page_url;
}

module.exports = ItemPage;