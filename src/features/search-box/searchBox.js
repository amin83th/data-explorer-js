import { table } from "../table/table";
import "./searchBox.css";

export function searchBox(onSearch) {
    const div = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button = document.createElement("button");

    input.type = "text";
    input.name = "search-box";
    input.placeholder = "search in table";
    button.innerHTML = 'search';
    div.classList.add('search-box');

    form.append(input);
    form.append(button);
    div.append(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        onSearch(input.value);
    });

    return div;
}