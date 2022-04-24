
// Rest operator
// we need to sum the tot items in the cart with discount, we use rest op as it will consider all arg as an array 

we can have any no of parameters before the rest operator (a,b,c,..etc, ...x)

function sum(discount, ...prices) {
    const total = prices.reduce((acc, price) => acc + price);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 30, 50, 40));
