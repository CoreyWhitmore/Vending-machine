export default class VendingMachine {

    constructor(contents, deposit = 0) {
        this.contents = contents
        this.deposit = deposit
    }

    get Template() {
        let itemsTemplate = ""

        for (let i = 0; i < this.contents.length; i++) {
            itemsTemplate += `
            <div class="col-4 m-2" id="${this.contents[i]}">Test</div>
            `
        }
        itemsTemplate += `
        <div class="col-12">
        <div id="money">Deposited: $${this.deposit.toFixed(2)}</div>
        <div class="btn btn-primary" onclick="app.VMController.deposit()">Deposit a Quarter</div>
        </div>
        `

        return itemsTemplate
    }
}