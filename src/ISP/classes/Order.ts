import { Messaging } from '../services/Messaging';
import { OrderRepositories } from '../services/OrderRepositories';
import { CustomerOrderProtocol } from './interfaces/customer';
import { OrderStatus } from './interfaces/orderStatus';
import { ShoppingCart } from './ShoppingCart';

export class Order {
  private _status: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly orderRepositories: OrderRepositories,
    private readonly customer: CustomerOrderProtocol,
  ) {}

  get orderStatus(): OrderStatus {
    return this._status;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('O carrinho seta vazio.');
      return;
    }

    this._status = 'closed';
    this.messaging.send('Perdido recebido.');
    this.orderRepositories.saveOrder();
    this.shoppingCart.clear();
    console.log(
      `O cliente é ${this.customer.getName()} - ${this.customer.getIDN()}`,
    );
  }
}
