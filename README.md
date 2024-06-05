
# QR Code Generator and Reader

This is a simple web application built with React that allows you to generate and read QR codes. The application is styled for a professional look and does not require a backend, making it easy to deploy as a static site.

## Features

- **Generate QR Codes:** Enter text and generate a QR code.
- **Read QR Codes:** Upload an image of a QR code and decode its contents.

## Technologies Used

- React
- `qrcode.react` for generating QR codes
- `jsQR` for reading QR codes
- CSS for styling

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/qr-code-app.git
   cd qr-code-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the React app:**

   ```sh
   npm start
   ```

   This will start the development server and open the app in your default web browser. If it doesn't open automatically, navigate to `http://localhost:3000`.

## Usage

1. **Generate QR Code:**
   - Enter text in the input field.
   - Click the "Generate QR Code" button.
   - A QR code will be generated and displayed.

2. **Read QR Code:**
   - Click the file input and select an image file containing a QR code.
   - The app will read the QR code and display its contents.

## Project Structure

```
qr-code-app/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
└── README.md
```

- `public/` - Contains the public assets for the app.
- `src/` - Contains the source code for the app.
  - `App.js` - The main React component.
  - `App.css` - The styles for the app.
  - `index.js` - The entry point for the React app.


