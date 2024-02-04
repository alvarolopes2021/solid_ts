import Beer from "../src/Beer";
import Cigar from "../src/Cigar";
import Order from "../src/Order";
import Water from "../src/Water";

test('Should calculate order sub total', async () => {
    const order = new Order();
    order.addItem(new Cigar('Marlboro', 10));
    order.addItem(new Beer('Itaipava', 5));
    order.addItem(new Water('Crystal 300 ml', 2));
    const subtotal = order.getSubtotal();
    expect(subtotal).toBe(17);
});


test('Should calculate order taxes', async () => {
    const order = new Order();
    order.addItem(new Cigar('Marlboro', 10)); // 0.2 = 2
    order.addItem(new Beer('Itaipava', 5)); // 0.1 = 0.5
    order.addItem(new Water('Crystal 300 ml', 2)); // 0 = 0
    const taxes = order.getTaxes(new Date('2021-07-09'));
    expect(taxes).toBe(2.5);
});

test('Should calculate holiday taxes', async () => {
    const order = new Order();
    order.addItem(new Cigar('Marlboro', 10)); // 0.2 = 2
    order.addItem(new Beer('Itaipava', 5)); // 0.1 = 0.5
    order.addItem(new Water('Crystal 300 ml', 2)); // 0 = 0
    const taxes = order.getTaxes(new Date('2021-01-09'));
    expect(taxes).toBe(1.5);
});


test('Should calculate order total', async () => {
    const order = new Order();
    order.addItem(new Cigar('Marlboro', 10)); // 0.2 = 2
    order.addItem(new Beer('Itaipava', 5)); // 0.1 = 0.5
    order.addItem(new Water('Crystal 300 ml', 2)); // 0 = 0
    const taxes = order.getTotal(new Date('2021-07-09'));
    expect(taxes).toBe(19.5); // price + taxes
});