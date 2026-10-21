import { test, expect } from '@playwright/test';

test('API 1 - Get All Products List', async ({ request }) => {

    const response = await request.get(
        'https://automationexercise.com/api/productsList'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(body.responseCode).toBe(200);
    expect(body.products).toBeDefined();
    expect(body.products.length).toBeGreaterThan(0);
});

test('API 2 - Verify Login with valid credentials', async ({ request }) => {

    const response = await request.post(
        'https://automationexercise.com/api/verifyLogin',
        {
            form: {
                email: 'your_test_email@example.com',
                password: 'your_password'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exists!');
});

test('API 3 - Get All Brands List', async ({ request }) => {

    const response = await request.get(
        'https://automationexercise.com/api/brandsList'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(body.responseCode).toBe(200);
    expect(body.brands).toBeDefined();
    expect(body.brands.length).toBeGreaterThan(0);
});

test('API 4 - PUT To All Brands List', async ({ request }) => {

    const response = await request.put(
        'https://automationexercise.com/api/brandsList'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
});