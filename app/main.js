import VMController from "./Controllers/VMController.js";

class App {
  VMController = new VMController();


  constructor() {
    console.log("Creating VMController");
  }

}
window["app"] = new App();
