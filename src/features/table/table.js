import { editTable } from "./modals/editTable";
import "./table.css";

export function table(data, searchValue = "") {
    /* Variables */
    const div = document.createElement("div");
    const tableElement = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

    const operationHeader = document.createElement("th");

    div.classList.add("table-wrapper");

    /*
     * Search
     */
    const query = searchValue.trim().toLowerCase();

    if (query) {
        data = data.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(query)
            )
        );
    }

    /*
     * Build table
     */
    div.append(tableElement);
    tableElement.append(thead, tbody);

    /*
     * Empty data
     */
    if (!data.length) {
        return div;
    }

    /*
     * Table headers
     */
    const headers = Object.keys(data[0]);

    thead.append(headerRow);
    operationHeader.innerHTML = "Operation";
    headerRow.append(operationHeader);
    for (let i = 0; i < headers.length; i++) {
        const th = document.createElement("th");

        th.textContent = headers[i];

        headerRow.append(th);
    }

    /*
     * Table rows
     */
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        row.classList.add('row-item')
        const operations = document.createElement("td");

        operations.innerHTML = `
                                <div id="operations">
                                    
                                    <button class="op-delete" title="Delete this item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">Delete</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 3h4M4 6h16m-1.929 0l-1.005 14.071a1 1 0 0 1-.997.929H7.93a1 1 0 0 1-.997-.929L5.929 6"/></svg>
                                    </button>

                                    <button class="op-edit" title="Edit this item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">Edit</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/></g></svg>
                                    </button>
                                </div>
                            `;
        row.append(operations);

        const editButton = operations.querySelector(".op-edit");

        editButton.addEventListener("click", () => {
            document.body.append(editTable(data[i]));
        });

        for (let j = 0; j < headers.length; j++) {
            const cell = document.createElement("td");
            cell.textContent = data[i][headers[j]];
            row.append(cell);
        }

        tbody.append(row);
    }

    return div;
}