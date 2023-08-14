export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

// console.table({ phone, tablet });

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
//     let total = 0;
//     options.products.forEach(({ price }) => {
//         return total += price
//     });

//     return [total, total * options.tax];
// }

// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;
    products.forEach(({ price }) => {
        return total += price
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax,
});

// console.table(shoppingCart);
// console.log(tax);
// console.log({ total, taxTotal });