// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreateQuestion', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CreateQuestion', async function() {
    await driver.get("http://localhost:8080/")
    await driver.manage().window().setRect(1552, 840)
    await driver.findElement(By.css(".col-md-4:nth-child(3) > img")).click()
    await driver.findElement(By.css(".row:nth-child(1) > .col-md-6:nth-child(2)")).click()
    await driver.findElement(By.css(".row:nth-child(1) > .col-md-6:nth-child(2)")).sendKeys("Чему равно площать квадрата со стороной 4?")
    await driver.findElement(By.css(".row:nth-child(2) > .col-md-6:nth-child(2)")).click()
    await driver.findElement(By.css(".row:nth-child(2) > .col-md-6:nth-child(2)")).sendKeys("16")
    await driver.findElement(By.css(".row:nth-child(3) > .col-md-6:nth-child(2)")).click()
    {
      const dropdown = await driver.findElement(By.css(".row:nth-child(3) > .col-md-6:nth-child(2)"))
      await dropdown.findElement(By.xpath("//option[. = 'Математика']")).click()
    }
    await driver.findElement(By.css(".row:nth-child(3) > .col-md-6:nth-child(2)")).click()
    await driver.findElement(By.css(".row:nth-child(4) > .col-md-6:nth-child(2)")).click()
    {
      const dropdown = await driver.findElement(By.css(".row:nth-child(4) > .col-md-6:nth-child(2)"))
      await dropdown.findElement(By.xpath("//option[. = 'A1']")).click()
    }
    await driver.findElement(By.css(".row:nth-child(4) > .col-md-6:nth-child(2)")).click()
    await driver.findElement(By.css(".btn")).click()
  })
})
