import VMItem from "./Models/VMItem.js";
import VendingMachine from "./Models/vending-machine.js";

let _state = {
  items: [new VMItem('Doritos', 1.99), new VMItem('Sprite', 0.99)],
  machine: new VendingMachine(['Doritos', 'Sprite'])
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
