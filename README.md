**Assessment One – SQL**
1. Write a query to get all the records from the table
SELECT * 
FROM Customers;

2. Write a query to get all the records from the table where Country = Germany and City = Berlin
SELECT *
FROM Customers
WHERE Country = 'Germany'
AND City = 'Berlin';

3. Write a query to update CustomerName to “John Smith” and City to “Frankfurt” where CustomerID = 5
UPDATE Customers
SET CustomerName = 'John Smith',
    City = 'Frankfurt'
WHERE CustomerID = 5;


4. Write a query to select all records and order the results by Country A–Z
SELECT *
FROM Customers
ORDER BY Country ASC;


5. Write a query to return all customers with CustomerName starting with “a”
SELECT *
FROM Customers
WHERE CustomerName LIKE 'a%';



6. How would you comment out scripts in SQL?

 Single-line comment
Use two dashes --.
-- This is a single-line comment
SELECT * FROM Customers;





------------------------------------------------------------------------------------------------------------------------------------------------

**ASSESSMENT THREE: POSTMAN**
# Postman API Testing 

## Overview

This repository contains API tests performed using Postman against the DummyJSON API.

API Documentation:
https://dummyjson.com/docs

Tool Used:
Postman 

---

## Endpoints Tested

### 1. Retrieve Product

GET /products/{id}

Retrieves details for a specific product.

---

### 2. Search Products

GET /products/search?q={search_query}

Searches for products based on a keyword.

---

### 3. Error Handling

GET /products/{invalid_id}

Tests how the API responds when an invalid product ID is requested.

Expected result:
404 Not Found

---

### 4. Create Product

POST /products/add

Creates a new product.

Example request body:
{
"title": "BMW Pencil"
}

---

### 5. Update Product

PUT /products/{product_id}

Updates product information such as price.

---

### 6. Boundary Value Testing

GET /products?limit=0
GET /products?limit=1

Tests how the API behaves with edge values.

---

### 7. Performance Testing

GET /products
GET /products?delay=2000

Compares API response times with and without delay.

---

### 8. Authentication

POST /auth/login

Authenticates a user and returns an access token.

---

### 9. Get Authenticated User

GET /auth/me

Retrieves information about the currently authenticated user.

Requires:
Authorization Bearer Token

---

## Files Included

postman-collection.json
dummyjson-environment.json

---

## How to Run

1. Import the Postman collection
2. Import the environment
3. Select the environment
4. Run the requests

---------------------------------------------------------------------------------------------------------------------------------------------------------
**ASSESSMENT FOUR: E-COMMERCE AUTOMATION : Playwrite**

**Assertions Used**
-Playwright’s built-in assertions were used to verify expected results# ecommerce-automation
-await expect(page.locator('.shopping_cart_badge')).toBeVisible();

**Framework Used**
-Playwright with JavaScript.

**Why This Framework**
-Playwright supports multiple browsers
-Has built-in assertions and auto-waiting
-Is fast, and integrates easily with CI/CD pipelines.

**Gherkin / Cucumber**
-This project does not use Gherkin or Cucumber. Tests are written using the Playwright test runner.

**Handling Popup Messages**
-await page.locator('button:has-text("Accept")').click();

**CI/CD Integration**
-CI/CD can be used to automatically run automation tests whenever code changes are pushed to the repository. In this project, GitHub Actions can be used to trigger Playwright tests whenever new code is committed.

