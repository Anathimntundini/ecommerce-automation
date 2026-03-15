class LoginPage {

constructor(page){
this.page = page
}

async navigate(){
console.log("Navigating to SauceDemo website")

await this.page.goto("https://www.saucedemo.com/")

await this.page.waitForSelector('#user-name')
}

async login(){
console.log("Logging in")

await this.page.locator('#user-name').fill('standard_user')
await this.page.locator('#password').fill('secret_sauce')

await this.page.locator('#login-button').click()

await this.page.waitForSelector('.inventory_list')
}

}

export default LoginPage