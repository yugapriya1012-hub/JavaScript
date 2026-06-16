const Products = [
    {
        id: 'S01',
        name: 'ErgoChair Pro',
        category: 'Furniture',
        price: 299,
        stock: 12,
        rating: 4.8,
        tags: ['office', 'ergonomic']
    },
    {
        id: 'E05',
        name: 'UltraWide Monitor',
        category: 'Electronics',
        price: 450,
        stock: 5,
        rating: 4.5,
        tags: ['tech', 'gaming', 'work']
    },
    {
        id: 'K12',
        name: 'AirFryer 3000',
        category: 'Kitchen',
        price: 120,
        stock: 0,
        rating: 4.2,
        tags: ['home', 'cooking']
    },
    {
        id: 'E09',
        name: 'Noise-Canceling Buds',
        category: 'Electronics',
        price: 199,
        stock: 25,
        rating: 4.7,
        tags: ['tech', 'music', 'travel']
    },
    {
        id: 'S15',
        name: 'Standing Desk',
        category: 'Furniture',
        price: 550,
        stock: 8,
        rating: 4.9,
        tags: ['office', 'work']
    },
    {
        id: 'K02',
        name: 'Espresso Machine',
        category: 'Kitchen',
        price: 850,
        stock: 3,
        rating: 4.6,
        tags: ['home', 'coffee']
    },
    {
        id: 'E11',
        name: 'USB-C Hub',
        category: 'Electronics',
        price: 45,
        stock: 50,
        rating: 4.0,
        tags: ['tech', 'accessory']
    }
];

// var result= Products.filter(product=> product.stock === 0);
// console.log(result)

// Create an array of products that have a stock of 0 (for the warehouse team).
console.log(
    Products.filter((eachCountry)=>{
        if(eachCountry.stock===0){
            return eachCountry
        }
    })
)

// Find all products in the "Furniture" category that are priced above $300.
console.log(
    Products.filter((eachProduct)=>{
        if(eachProduct.category=="Furniture" && eachProduct.price>300){
            return eachProduct
        }
    })
)

//Create an array of strings that only contains the product names and their prices formatted as: `ErgoChair Pro` - `$299`
const result = Products.map(
  product => `${product.name} - $${product.price}`
);

console.log(result);

//Create an array containing only the tags array for each product, but convert all tags to UPPERCASE.
const upperCaseArray = Products.map(product =>
  product.tags.map(tag => tag.toUpperCase())
);
console.log(upperCaseArray);

//Calculate the total dollar value of the entire warehouse `(sum of price * stock for all items)`
const totalProductValue = Products.reduce(
  (acc, Product) => acc + Product.price * Product.stock,
0);


console.log("Total Value: $", totalProductValue);


// Filter for products that include the tag "work"

let workProducts=Products.filter((product=>{
        for(let tag of product.tags){
            if(tag==="work"){
                return true
            }
        }
        return false
    }));
console.log(workProducts)

//Reduce the result to find the Average Price of these specific "work" items.
const totalWorkPrice = workProducts.reduce((sum, product) => {
    return sum + product.price
  
},0);
const averagePrice=totalWorkPrice/workProducts.length
console.log(averagePrice)