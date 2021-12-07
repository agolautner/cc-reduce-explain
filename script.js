function loadEvent() {
    console.log("the page has loaded");

    //REDUCE
    //executes a so-called reducer function on each element of an array to a single value

    const prices = [23.4, 123, 34.2, 12, 54, 98];

    let total = 0;
    for (const price of prices) {
        total += price;
    }
    console.log(total);

    const total2 = prices.reduce((total, price) => total + price);
    console.log(total2);

    const total3 = prices.reduce((total, price, index) => index%2 ? total + price : total - price);
    console.log(total3);

    // const people = {
    //     John: 2,
    //     Stacy: 23,
    //     Bob: 32,
    //     Clark: 14,
    //     Tom: 5,
    //     Lewis: 12
    // }

    const people = [
        {name: 'John', age: 2},
        {name: 'Stacy', age: 23},
        {name: 'Bob', age: 32},
        {name: 'Clark', age: 14},
        {name: 'Tom', age: 5},
        {name: 'Lewis', age: 12},
        ];

    const oldest = people.reduce((max, current) => {
         if (current.age > max.age) {
             return current;
         }
         return max;
    });
    console.log(oldest);






};

window.addEventListener("load", loadEvent);