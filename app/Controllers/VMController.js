import STORE from "../store.js";
import VMService from "../Services/VMService.js"

//Private

function drawVM() {
  let machine = STORE.State.machine
  document.getElementById('vending-machine').innerHTML = machine.Template
  drawItems()
}

function drawItems() {
  let items = STORE.State.items
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    document.getElementById(`${item.name}`).innerHTML = item.Template
  }
}


//Public
export default class VMController {
  constructor() {
    drawVM()
  }

  deposit() {
    VMService.deposit()
    drawVM()
  }

  buy(index) {
    VMService.buy(index)
    drawVM()
  }
}
