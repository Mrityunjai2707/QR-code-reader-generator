import { useState } from "react";
import QRCode from "qrcode.react";
import jsQR from "jsqr";
import "./index.css";

function App() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [qrResult, setQrResult] = useState("");

  const generateQRCode = () => {
    setQrCode(text);
  };

  const readQRCode = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // const imageData = reader.result;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const image = new Image();

      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          setQrResult(code.data);
        } else {
          setQrResult("No QR code found");
        }
      };

      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="App">
      <h1>QR Code Generator and Reader</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <div className="container">
        <button onClick={generateQRCode}>Generate QR Code</button>
        {qrCode && <QRCode value={qrCode} />}
      </div>
      <div>
        <input type="file" accept="image/*" onChange={readQRCode} />
        {qrResult && <p>QR Code contains: {qrResult}</p>}
      </div>
    </div>
  );
}

export default App;
