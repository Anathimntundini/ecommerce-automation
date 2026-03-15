import { expect } from '@playwright/test'

class InventoryPage {

constructor(page){
this.page = page
}

async addItemToCart(){
console.log("Adding 3 items to cart")

// wait for inventory items to load
await this.page.waitForSelector('.inventory_item')

// add first 3 products
await this.page.locator('button:has-text("Add to cart")').nth(0).click()
await this.page.locator('button:has-text("Add to cart")').nth(1).click()
await this.page.locator('button:has-text("Add to cart")').nth(2).click()
}

async verifyCart(){
console.log("Verifying items added to cart")

// wait for cart badge to appear
await this.page.waitForSelector('.shopping_cart_badge')

// assertion: verify 3 items were added
await expect(this.page.locator('.shopping_cart_badge')).toHaveText('3')
}

}

export default InventoryPage