import './style.css'

import { dragDrop } from "./features/drag-drop/dragDrop.js";

const app = document.querySelector("#app");

app.append(dragDrop());