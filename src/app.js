import React from "react";
import ReactDOM from "react-dom";
import validator from "validator";

import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// class OldSyntax {
//   constructor() {
//     this.name = "Henry";
//     this.getGreeting = this.getGreeting.bind(this);
//   }

//   getGreeting() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = "Blade";
//   getGreeting = () => `Hello, my name is ${this.name}`;
// }

// const newSyntax = new NewSyntax();
// const newGreeting = newSyntax.getGreeting;
// console.log(newGreeting());
