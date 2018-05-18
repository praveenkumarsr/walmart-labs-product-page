var webdriver = require ('selenium-webdriver'),
    By = webdriver.By;
    until = webdriver.until;
var config = require('../config/env-config');


    var BasePage = function(){
        this.driver = new webdriver.Builder().forBrowser(config.browser).build();
        var driver = this.driver;
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();

        this.loadPage = function(url){
            return driver.get(url);
        }

        this.find = function(element){
            driver.wait(until.elementLocated(element), 5000);
                return driver.findElement(element);
        }

        this.findAll = function(element){
            driver.wait(until.elementLocated((element)), 5000);
            return driver.findElements((element));
        }

        this.pause = function(milliseconds){
            return driver.sleep(milliseconds);
        }

        this.quit = function(){
            return driver.quit();
        }

        this.write = function(element, text){
            return this.find(element).sendKeys(text);
        }
    }

module.exports = BasePage;
