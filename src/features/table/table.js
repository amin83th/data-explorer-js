import "./table.css";
export function table(data) {

    const div = document.createElement("div");
    const tableElement = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    div.classList.add("table-wrapper");

    div.append(tableElement);
    tableElement.append(thead, tbody);

    let ths = Object.keys(data[0]);

    thead.append(tr);
    for (let i = 0; i < ths.length; i++) {
        const th = document.createElement("th");
        th.innerHTML = ths[i]
        tr.append(th);
    }

    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < ths.length; j++) {
            const td = document.createElement("td");
            td.innerHTML = data[i][ths[j]];
            tr.append(td);
        }

        tbody.append(tr);
    }


    return div
}