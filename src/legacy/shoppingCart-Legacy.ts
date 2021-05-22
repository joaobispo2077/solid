interface CartItemLegacy {
  name: string;
  price: number;
}

type OrderStatusLegacy = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItemLegacy[] = [];
  private _orderStatus: OrderStatusLegacy = 'open';

  get items(): Readonly<CartItemLegacy[]> {
    return this._items;
  }

  get orderStatus(): OrderStatusLegacy {
    return this._orderStatus;
  }

  get totalItems(): number {
    return this._items.length;
  }

  addItem(item: CartItemLegacy): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    if (index > 0 && index < this._items.length - 1)
      this._items.splice(index, 1);
  }

  getTotalPrice(): number {
    return +this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('O carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Pedido recebido.');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this.totalItems === 0;
  }

  clear(): void {
    this._items.length = 0;
  }

  sendMessage(message: string): void {
    console.log('Sent message: ', message);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso....');
  }
}

const shoppingCart = new ShoppingCartLegacy();

const product: CartItemLegacy = { name: 'water bootle', price: 15 };
const item: CartItemLegacy = { name: 'Playstation 5', price: 5000 };

console.log(shoppingCart.orderStatus);
shoppingCart.addItem(product);
shoppingCart.addItem(item);
shoppingCart.addItem(item);

console.log(shoppingCart.totalItems);
console.log(shoppingCart.items);

console.log(shoppingCart.getTotalPrice());
shoppingCart.removeItem(2);

console.log(shoppingCart.items);

shoppingCart.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);
