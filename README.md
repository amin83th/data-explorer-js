# Data Explorer JS

A lightweight **Vanilla JavaScript** application for parsing and exploring data from **XML, Excel, and CSV files** directly in the browser.

The project is built with modern JavaScript without using a frontend framework, with a focus on clean architecture, feature-based organization, file parsing, and testability.

> 🚧 **Status:** Work in Progress

---

## ✨ Overview

**Data Explorer JS** is a browser-based data exploration tool that allows users to upload common structured data files and convert their contents into JavaScript data structures.

The main goal of this project is to build a practical data-processing application using **Vanilla JavaScript**, while keeping the codebase modular, testable, and easy to extend.

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
* 🧩 Feature-based project structure
* 🧪 Unit testing with Vitest
* ⚡ Fast development environment powered by Vite
* 🌐 Runs entirely in the browser

### Planned

* [ ] Display parsed data in a reusable data table
* [ ] Column sorting
* [ ] Column filtering
* [ ] Global search
* [ ] Pagination
* [ ] Export data to JSON
* [ ] Export data to CSV
* [ ] Export data to Excel
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

The project uses **Vitest** together with **JSDOM** for testing browser-related functionality.

---

## 📁 Project Structure

```text
data-explorer-js/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── features/
│   │   ├── drag-drop/
│   │   │   ├── dragDrop.js
│   │   │   └── dragDrop.test.js
│   │   │
│   │   └── file-parser/
│   │       ├── csvParser.js
│   │       ├── excelParser.js
│   │       ├── fileParser.js
│   │       └── xmlParser.js
│   │
│   ├── main.js
│   ├── root.css
│   └── style.css
│
├── index.html
├── package.json
├── vite.config.js
├── vitest.config.js
├── LICENSE
└── README.md
```

The project follows a **feature-based structure**, keeping related functionality together instead of placing all JavaScript files into a single directory.

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
```

The central `fileParser()` function acts as the entry point and delegates the file to the appropriate parser based on its extension.

---

## 📄 Supported File Formats

### CSV

CSV files are parsed using **Papa Parse**.

```javascript
Papa.parse(file, {
    header: true,
    skipEmptyLines: true
});
```

CSV rows are returned as JavaScript objects using the first row as column headers.

---

### Excel

Excel files are parsed using **SheetJS**.

Supported extensions:

```text
.xls
.xlsx
```

The first worksheet is currently converted into an array of JavaScript objects.

---

### XML

XML files are parsed using **fast-xml-parser**.

XML attributes are preserved during parsing.

---

## 🧩 Architecture

The application separates file handling from individual parsing implementations.

Instead of putting all parsing logic into one function, each format has its own parser:

```text
fileParser
    │
    ├── parseCsv
    ├── parseExcel
    └── parseXml
```

This makes the system easier to extend.

For example, adding support for another format can be done by introducing a new parser and connecting it to the central dispatcher.

---

## 🎯 Project Goals

This project is being developed with several goals in mind:

* Practice building a real application with Vanilla JavaScript
* Improve understanding of browser file APIs
* Work with different data formats
* Practice modular JavaScript architecture
* Write unit tests for browser functionality
* Build reusable file-processing logic
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
* Feature-based architecture
* Unit testing with Vitest
* DOM testing with JSDOM
* Vite-based development workflows

---

## 🧪 Testing Philosophy

Tests are written around application behavior rather than implementation details.

For example, the drag-and-drop feature is tested to verify that user interactions produce the expected behavior.

As the project grows, the test suite will cover:

* File selection
* Drag & drop interactions
* Supported file types
* Unsupported file types
* Parser output
* Error handling
* Data transformation
* Export functionality

---

## 🔐 Privacy

Data processing is designed to happen locally in the browser.

The application does not require uploading files to a backend server for parsing.

> **Note:** This project is currently under active development, and the final data-processing architecture may evolve as new features are introduced.

---

## 🗺️ Roadmap

### Phase 1 — File Processing

* [x] CSV parsing
* [x] Excel parsing
* [x] XML parsing
* [x] File type detection
* [x] Drag & drop upload

### Phase 2 — Data Explorer

* [ ] Data table
* [ ] Search
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

* The application is primarily focused on file ingestion and parsing.
* Excel parsing currently works with the first worksheet.
* XML data may require additional transformation before it can be displayed as a tabular dataset.
* The complete data exploration and export workflow is not implemented yet.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you find a bug or have an idea for a new feature, feel free to open an issue.

For larger changes, please open an issue first to discuss the proposed change.

---

## 📜 License

This project is licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for more information.

---

## 👨‍💻 Author

**Mohammad Amin Taheri**

GitHub: [@amin83th](https://github.com/amin83th)

---

⭐ If you find this project useful or interesting, consider giving it a star.
