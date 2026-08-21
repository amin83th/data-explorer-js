import "./dragDrop.css";
import { fileParser } from '../file-parser/fileParser';
import { table } from '../table/table';
export function dragDrop() {
    const section = document.createElement("section");

    section.innerHTML = `
    <div id="drag-drop-wrapper">
        
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 1024 1024"><title xmlns="">upload-filled</title><path fill="currentColor" d="M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.4.3-10.5 1.6-16 1.6A240 240 0 0 1 64 624a239 239 0 0 1 212.6-237.2A240 240 0 0 1 512 192a240 240 0 0 1 235.5 194.8A239 239 0 0 1 959.9 624a240 240 0 0 1-240 240c-5.3 0-10.5-1.3-16-1.6v1.6z"/></svg>
        </div>

        <div>
            <span style="font-weight:bold">Choose a file </span> or drag it here.
        </div>
        <form hidden>
            <input type="file" accept=".xml,.xlsx,.xls,.csv"/>
        </form>
    </div>
  `;

    /* Variables */
    const dropZone = section.querySelector('#drag-drop-wrapper');
    const fileInput = section.querySelector('#drag-drop-wrapper input[type="file"]');

    /* Methods */

    dropZone.addEventListener('click', () => {
        fileInput.click();
    })

    fileInput.addEventListener('change', async (event) => {
        const data = await fileParser(event.target.files[0]);
        const tableElement = table(data);
        const divDragDrop = document.querySelector("#drag-drop-wrapper");
        const mainText = document.querySelector(".mainText");
        divDragDrop.classList.add("hidden");
        mainText.classList.add('hidden');
        section.append(tableElement);
    })

    return section;
}