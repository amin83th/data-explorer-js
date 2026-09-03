import "./editTable.css";

export function editTable(data) {
    /* Variables */
    const div = document.createElement("div");
    const headerDiv = document.createElement('div');
    const closeButton = document.createElement('button');
    const saveButton = document.createElement('button');
    const form = document.createElement("form");

    div.classList.add("modal-editable");
    headerDiv.classList.add('header');
    closeButton.classList.add('icon-close');
    saveButton.classList.add('save-button');
    saveButton.innerHTML = "Save";
    closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>close-rounded</title><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
         `;
    headerDiv.append(closeButton);
    form.append(headerDiv);

    const label = Object.keys(data);

    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        div.remove();
    })

    for (let i = 0; i < label.length; i++) {
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("input-div")
        const input = document.createElement("input");
        const labelElement = document.createElement("label");

        labelElement.innerHTML = `${label[i]} : `;
        input.value = data[label[i]];

        inputDiv.append(labelElement);
        inputDiv.append(input);

        form.append(inputDiv);
    }
    div.append(form);

    form.append(saveButton);
    return div
}