# Data Explorer JS

A lightweight Vanilla JavaScript application for parsing, exploring, searching, and viewing data from XML, Excel, and CSV files directly in the browser.

The project is built with modern JavaScript without using a frontend framework, with a focus on clean architecture, feature-based organization, reusable UI components, file parsing, and testability.

> 🚧 Status: Work in Progress

---

## ✨ Overview

Data Explorer JS is a browser-based data exploration tool that allows users to upload common structured data files, convert their contents into JavaScript data structures, and explore the parsed data through a reusable table interface.

The main goal of this project is to build a practical data-processing application using Vanilla JavaScript, while keeping the codebase modular, testable, and easy to extend.

Supported file formats:

* `.csv`
* `.xls`
* `.xlsx`
* `.xml`

Files can be selected through the file picker or dragged and dropped into the application.

---

## 🚀 Features

### Current

* 📂 Drag & drop file upload
* 📁 File picker support
* 📊 Excel file parsing
* 📄 CSV file parsing
* 🗂️ XML file parsing
* 🔀 Automatic parser selection based on file extension
* 📋 Display parsed data in a reusable data table
* 🔍 Global search functionality
* 🧩 Feature-based project structure
* 🎨 Component-based CSS organization
* 🧪 Unit testing with Vitest
* 🧪 Tests for file parsers
* 🧪 Tests for UI components
* ⚡ Fast development environment powered by Vite
* 🌐 Runs entirely in the browser

### Planned

* [ ] Column sorting
* [ ] Column filtering
* [ ] Pagination
* [ ] Data statistics
* [ ] Export data to JSON
* [ ] Export data to CSV
* [ ] Export data to Excel
* [ ] Export data to XML
* [ ] Better XML-to-tabular-data transformation
* [ ] File validation and user-friendly error messages
* [ ] Loading and processing states
* [ ] Improved responsive UI
* [ ] End-to-end testing
* [ ] Production deployment

---

## 🛠️ Tech Stack

| Technology              | Purpose                           |
| ----------------------- | --------------------------------- |
| JavaScript (ES Modules) | Application logic                 |
| HTML5                   | Application structure             |
| CSS3                    | Styling                           |
| Vite                    | Development server and build tool |
| Vitest                  | Unit testing                      |
| JSDOM                   | DOM testing environment           |
| SheetJS (`xlsx`)        | Excel file parsing                |
| Papa Parse              | CSV parsing                       |
| fast-xml-parser         | XML parsing                       |

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/amin83th/data-explorer-js.git
```

Navigate into the project:

```bash
cd data-explorer-js
```

Install dependencies:

```bash
npm install
```

---

## 💻 Development

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧪 Testing

Run the test suite in watch mode:

```bash
npm test
```

Run tests once:

```bash
npm run test:run
```

The project uses Vitest together with JSDOM for testing browser-related functionality.

The current test suite covers core application features, including:

* Drag & drop component behavior
* File parser selection
* CSV parser output
* Excel parser output
* XML parser behavior
* Search box functionality

---

## 📁 Project Structure

```text
data-explorer-js/
│
├── src/
│   ├── assets/
│   │
│   ├── features/
│   │   ├── drag-drop/
│   │   │   ├── dragDrop.js
│   │   │   ├── dragDrop.css
│   │   │   └── dragDrop.test.js
│   │   │
│   │   ├── file-parser/
│   │   │   ├── csvParser.js
│   │   │   ├── csvParser.test.js
│   │   │   ├── excelParser.js
│   │   │   ├── excelParser.test.js
│   │   │   ├── fileParser.js
│   │   │   ├── fileParser.test.js
│   │   │   ├── xmlParser.js
│   │   │   └── xmlParser.test.js
│   │   │
│   │   ├── search-box/
│   │   │   ├── searchBox.js
│   │   │   ├── searchBox.css
│   │   │   └── searchBox.test.js
│   │   │
│   │   └── table/
│   │       ├── table.js
│   │       └── table.css
│   │
│   ├── main.js
│   ├── root.css
│   └── style.css
│
├── index.html
├── package.json
├── vitest.config.js
├── LICENSE
└── README.md
```

The project follows a feature-based structure, keeping related functionality together instead of placing all JavaScript files into a single directory.

Each feature is responsible for its own functionality and styling, making the project easier to maintain and extend as new features are added.

---

## 🔄 File Processing Flow

The application determines which parser to use based on the uploaded file extension.

```text
User selects or drops a file
              │
              ▼
     File Input / Drop Zone
              │
              ▼
          fileParser()
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
      CSV    Excel    XML
       │      │       │
       ▼      ▼       ▼
   PapaParse XLSX  fast-xml-parser
       │      │       │
       └──────┼───────┘
              ▼
      Parsed JavaScript Data
              │
              ▼
         Data Table
              │
              ▼
        Search / Explore
```

The central `fileParser()` function acts as the entry point and delegates the file to the appropriate parser based on its extension.

After parsing, the resulting JavaScript data can be rendered inside the data table and explored through the search functionality.

---

## 📄 Supported File Formats

### CSV

CSV files are parsed using Papa Parse.

```js
Papa.parse(file, {
    header: true,
    skipEmptyLines: true
});
```

CSV rows are returned as JavaScript objects using the first row as column headers.

---

### Excel

Excel files are parsed using SheetJS.

Supported extensions:

```text
.xls
.xlsx
```

The first worksheet is currently converted into an array of JavaScript objects.

---

### XML

XML files are parsed using fast-xml-parser.

XML attributes are preserved during parsing, and the parser handles XML data before it is passed into the application's data-processing flow.

XML structures can vary significantly, so some XML documents may still require additional transformation to create a fully tabular dataset.

---

## 🧩 Architecture

The application separates file handling, parsing logic, and UI components.

Instead of putting all parsing and rendering logic into one function, responsibilities are divided into independent features.

```text
fileParser
    │
    ├── parseCsv
    ├── parseExcel
    └── parseXml
           │
           ▼
      Parsed Data
           │
           ▼
         Table
           │
           ▼
       Search Box
```

This makes the system easier to extend and maintain.

For example, adding support for another format can be done by introducing a new parser and connecting it to the central dispatcher.

Similarly, new data exploration features can be added as separate components without tightly coupling them to the file-parsing logic.

---

## 🎯 Project Goals

This project is being developed with several goals in mind:

* Practice building a real application with Vanilla JavaScript
* Improve understanding of browser file APIs
* Work with different data formats
* Practice modular JavaScript architecture
* Build reusable UI components
* Write unit tests for browser functionality
* Test individual data parsers
* Build reusable file-processing logic
* Practice component-level CSS organization
* Avoid unnecessary framework abstraction
* Create a foundation for a more complete data exploration tool

---

## 🧠 What I Learned

This project provides hands-on experience with:

* File and Blob APIs
* Drag & Drop API
* File input handling
* JavaScript modules
* Async file processing
* DOM manipulation
* Event-driven programming
* Data parsing and transformation
* Dynamic table rendering
* Search and data filtering concepts
* Feature-based architecture
* Component-based CSS organization
* Unit testing with Vitest
* DOM testing with JSDOM
* Testing data parsers
* Testing UI components
* Vite-based development workflows

---

## 🧪 Testing Philosophy

Tests are written around application behavior and expected output rather than unnecessary implementation details.

For example, UI components are tested to verify that they render and behave correctly, while parsers are tested to verify that supported file formats produce the expected JavaScript data.

The current test suite covers:

* File selection
* Drag & drop interactions
* File parser selection
* CSV parser output
* Excel parser output
* XML parser output
* Search box functionality

As the project grows, the test suite will cover:

* Supported file types
* Unsupported file types
* Error handling
* Data transformation
* Table behavior
* Filtering
* Sorting
* Pagination
* Export functionality

---

## 🔐 Privacy

Data processing is designed to happen locally in the browser.

The application does not require uploading files to a backend server for parsing or exploring data.

> Note: This project is currently under active development, and the final data-processing architecture may evolve as new features are introduced.

---

## 🗺️ Roadmap

### Phase 1 — File Processing

* [x] CSV parsing
* [x] Excel parsing
* [x] XML parsing
* [x] File type detection
* [x] Drag & drop upload

### Phase 2 — Data Explorer

* [x] Data table
* [x] Search
* [ ] Filtering
* [ ] Sorting
* [ ] Pagination
* [ ] Data statistics

### Phase 3 — Export

* [ ] JSON export
* [ ] CSV export
* [ ] Excel export
* [ ] XML export

### Phase 4 — Quality & UX

* [ ] Better error handling
* [ ] Loading states
* [ ] Responsive design
* [ ] Accessibility improvements
* [ ] End-to-end tests
* [ ] Production deployment

---

## 📌 Current Limitations

The project is still under development.

At the moment:

* Excel parsing currently works with the first worksheet.
* XML data may require additional transformation before it can always be displayed as a fully normalized tabular dataset.
* Column filtering is not implemented yet.
* Column sorting is not implemented yet.
* Pagination is not implemented yet.
* Data export functionality is not implemented yet.
* Some UX improvements, validation, and error-handling features are still planned.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you find a bug or have an idea for a new feature, feel free to open an issue.

For larger changes, please open an issue first to discuss the proposed change.

---

## 📜 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

## 👨‍💻 Author

Mohammad Amin Taheri

GitHub: [@amin83th](https://github.com/amin83th)

---

⭐ If you find this project useful or interesting, consider giving it a star.
