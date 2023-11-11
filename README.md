# backend-nodejs
Conceptos y prácticas Backend con NodeJS

## Testing endpoints
### GET :
- <a href="https://nodejs-backend-swart.vercel.app/api/">Ver servidor</a>
- <a href="https://nodejs-backend-swart.vercel.app/api/v1/products">Lista de fake products "asíncrona"</a>

### POST :
- ``` https://nodejs-backend-swart.vercel.app/api/v1/products/ ```

### PATCH :
- ``` https://nodejs-backend-swart.vercel.app/api/v1/products/:id ```

### DELETE :
- ``` https://nodejs-backend-swart.vercel.app/api/v1/products/:id ```

### SCHEMA :
```
{
  // name requires min 3 characters
    "name": "sd",
  // price requires min 10
    "price": 1
  // image is required for new products
    // "image": "http://www.dsd.com/fd"
}
```
