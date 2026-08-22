import "./table.css";

export function table(data, searchValue = "") {
    /* Variables */
    const div = document.createElement("div");
    const tableElement = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

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

        for (let j = 0; j < headers.length; j++) {
            const cell = document.createElement("td");

            cell.textContent = data[i][headers[j]];

            row.append(cell);
        }

        tbody.append(row);
    }

    return div;
}