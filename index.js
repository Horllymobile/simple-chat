// Import stylesheets
import "./style.css";

import { fromEvent, throttleTime } from "rxjs";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const button = document.querySelector("button");

fromEvent(button, "click")
  .subscribe(e => console.log(e));
