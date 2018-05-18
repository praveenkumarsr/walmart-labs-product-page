var { describe, it, after, before } = require ('selenium-webdriver/testing');
var chai = require ('chai');
var should = chai.should();
var expect = chai.expect;
var chaiAsPromised = require ('chai-as-promised');
var config = require ('../config/env-config');
var locator = require ('../resources/locators');
var ItemPage = require ('../lib/item-page');
var itemPage;
chai.use(chaiAsPromised);


//Scenario 1
describe('Corresponding images should appear on the slider on the screen', function(){
    this.timeout(50000);    

    //Suite setup
    before(function(){       
        itemPage = new ItemPage();
        
        //Launch the website based on the language in the config file
        itemPage.loadPage(itemPage.goToUrl());

        itemPage.enterSearchText();
        itemPage.clickSearch();
        itemPage.clickItem();
    });

    //Suite teardown
    after(function(){
        itemPage.quit();
    });

    it('Click each image in the carousel and verify them on the slider', function(){
        console.log('Click each image in the carousel and verify them on the slider');
    });    

    it('Click on the up and down arrow and verify all the images are viewed one by one', function(){
        console.log('Click on the up and down arrow and verify all the images are viewed one by one');
    });

    it('Verify Zoom  button', function(){
        itemPage.clickZoomButton();
        for(i=0; i<5; i++){
            itemPage.clickZoomNextButton();
            itemPage.pause(1000);
        }
    });
});

//Scenario 12
describe('View My Review for product dialog and write a review', function(){
    this.timeout(50000);    

    //Suite setup
    before(function(){       
        itemPage = new ItemPage();

        //Launch the website based on the language in the config file
        itemPage.loadPage(itemPage.goToUrl());

        itemPage.enterSearchText();
        itemPage.clickSearch();
        itemPage.clickItem();
    });

    //Suite teardown
    after(function(){
        itemPage.quit();
    });

    it('Verify Error Message on Nickname field', function(){
        itemPage.clickWriteReviewButton();
        itemPage.clickPostReviewButton();
        var error_actual = itemPage.getNicknameErrorActual();
        var error_expected = itemPage.getNicknameErrorExpected();
        error_actual.should.eventually.equal(error_expected);
    });
    
    it('Verify Error Message on Email field', function(){
        console.log("Code for Verify Error Message on Email field");
    });

    it('Verify Text color on Staff Context Label on error', function(){
        console.log("Code for Verify Text color on Staff Context Label on error");
    });

    it('Verify Text color Terms and Conditions label on error', function(){
        console.log("Code for Verify Text color Terms and Conditions label on error");
    });

    it('Verify invalid email id error message on email field', function(){
        console.log("Code for Verify invalid email id error message on email field");
    });
    
    it('Verify 3 characters too short error message on nickname field', function(){
        console.log("Code for Verify 3 characters too short error message on nickname field");
    });

    it('Enter all mandatory fields on My Review dialog and post review', function(){
        console.log("Code for Enter all mandatory fields on My Review dialog and post review");
    });

});

//Scenario 4
describe('Clicking on Add to Cart button, then Successfully updated your cart dialog appears', function(){
    this.timeout(50000);    

    //Suite setup
    before(function(){       
        itemPage = new ItemPage();
        //Launch the website based on the language in the config file
        itemPage.loadPage(itemPage.goToUrl());

        itemPage.enterSearchText();
        itemPage.clickSearch();
        itemPage.clickItem();
    });

    //Suite teardown
    after(function(){
        itemPage.quit();
    });

    it('Verify that the number of items added are shown in the Shopping cart', function(){        
        itemPage.clickAddToCartButton();
        itemPage.clickAddToCartCloseButton();
        var shopping_cart_count = itemPage.getShoppingCartCount();
        shopping_cart_count.should.eventually.equal('1');
    });

    it('Verify that the dialog appears with Checkout and Continue Shopping buttons', function(){
        console.log("Verify that the dialog appears with Checkout and Continue Shopping buttons");
    });

    it('Verify that two more suggestions are provided in the dialog', function(){
        console.log("Verify that two more suggestions are provided in the dialog");
    });

    it('Click on Close button and the dialog closes landing the customer back to the Product page', function(){
        console.log("Click on Close button and the dialog closes landing the customer back to the Product page");
    });

    it('Verify that an offer appears on the top of the dialog page', function(){
        console.log("e.	Verify that an offer appears on the top of the dialog page");
    });

    it('Clicking on “Continue Shopping” button lands the customer back to the Product page', function(){
        console.log("Clicking on “Continue Shopping” button lands the customer back to the Product page");
    });

    it('Verify that the number of items added are shown in the Shopping cart', function(){
        console.log("Verify that the number of items added are shown in the Shopping cart");
    });

});