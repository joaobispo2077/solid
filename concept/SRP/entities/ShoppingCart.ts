import { CartItem } from './interfaces/cartItem';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get totalItems(): number {
    return this._items.length;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    if (!this.isEmpty()) this._items.splice(index, 1);
  }

  getTotalPrice(): number {
    return +this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this.totalItems === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
