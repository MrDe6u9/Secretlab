
# Secret Lab

## Objective

Retrieve the hidden flag without editing the source code.

## Expected Learning

- Why storing sensitive information in LocalStorage is insecure.
- How browser developer tools expose LocalStorage.
- Why tokens, secrets and flags should never be trusted client-side.

## Solution

1. Open the website.
2. Click **Login as Demo User**.
3. Press F12.
4. Go to **Application** (Chrome/Edge) or **Storage** (Firefox).
5. Open **Local Storage**.
6. Select the site's origin.
7. Inspect the `session` key.
8. Read the JSON object to find the flag.

