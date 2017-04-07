
'use strict';



var fs = require('fs');
var webdriver = require('selenium-webdriver');
var platform = process.env.PLATFORM || "CHROME";

const until = webdriver.until;

var buildAndroidDriver = function () {
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      platformVersion: '4.4',
      deviceName: 'Android Emulator',
      browserName: 'Chrome'
    }).
    build();
};

var buildChromeDriver = function () {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

var buildFirefoxDriver = function () {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
};

switch(platform) {
  case 'ANDROID':
    var driver = buildAndroidDriver();
    break;
  case 'FIREFOX':
    var driver = buildFirefoxDriver();
    break;
  default:
    var driver = buildChromeDriver();
}

var getDriver = function () {
  return driver;
};

var World = function World() {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

  this.waitFor = function (cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(until.elementLocated({ css: cssLocator }), waitTimeout);
  };
};

module.exports.World = World;
module.exports.getDriver = getDriver;