import "./editTable.css";

export function editTable(data) {
    /* Variables */
    const div = document.createElement("div");
    const form = document.createElement("form");

    div.classList.add("modal-editable");
    
    const label = Object.keys(data);
    for (let i = 0; i < label.length; i++) {
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("input-div")
        const input = document.createElement("input");
        const labelElement = document.createElement("label");

        labelElement.innerHTML =`${label[i]} : `;
        input.value = data[label[i]];

        inputDiv.append(labelElement);
        inputDiv.append(input);

        form.append(inputDiv);
    }
    div.append(form);
    return div
}