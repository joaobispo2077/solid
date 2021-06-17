import { CartItem } from './entities/interfaces/cartItem';
import { Messaging } from './services/Messaging';
import { ShoppingCart } from './entities/ShoppingCart';
import { Order } from './entities/Order';
import { Product } from './entities/Product';
import { OrderRepositories } from './services/OrderRepositories';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const orderRepositories = new OrderRepositories();

const order = new Order(shoppingCart, messaging, orderRepositories);

const product = new Product('water bootle', 15);
const item = new Product('Playstation 5', 5000);

console.log(order.orderStatus);

shoppingCart.addItem(product);
shoppingCart.addItem(item);
shoppingCart.addItem(item);

console.log(shoppingCart.totalItems);
console.log(shoppingCart.items);

console.log(shoppingCart.getTotalPrice());
shoppingCart.removeItem(2);

console.log(shoppingCart.items);

order.checkout();

console.log(shoppingCart.items);
console.log(order.orderStatus);
