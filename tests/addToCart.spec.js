import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

test('Add item to cart on SauceDemo', async ({ page }) => {

const loginPage = new LoginPage(page)
const inventoryPage = new InventoryPage(page)

console.log("Step 1: Navigate to website")
await loginPage.navigate()

console.log("Step 2: Login to site")
await loginPage.login()

console.log("Step 3: Select item and add to cart")
await inventoryPage.addItemToCart()

console.log("Step 4: Verify item added to cart")
await inventoryPage.verifyCart()

await expect(page.locator('.shopping_cart_badge')).toBeVisible()

console.log("Test completed successfully")

})