import VMItem from "../Models/VMItem.js";
import store from "../store.js";
import STORE from "../store.js";

//Public
class VMService {
    buy(index) {
        let cost = STORE.State.items[index].price
        if (STORE.State.machine.deposit >= cost) {
            STORE.State.machine.deposit -= cost
        }
    }
    deposit() {
        STORE.State.machine.deposit += 0.25
    }
    constructor() {
        console.log("Creating VMService")
    }
}

const SERVICE = new VMService();
export default SERVICE;
