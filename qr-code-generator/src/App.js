import { useEffect, useState } from "react";
import {
  appStyle,
  inputStyle,
  rowStyle,
  rowContainerStyle,
  qrStyles,
  qrContainerStyle,
  buttonStyle,
  inputButtonContainer,
} from "./styles/styles";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

const App = () => {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("enter text to encode");
  const [size, setSize] = useState(200);
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    if (word) {
      // Ensure word is not empty before generating QR code
      setQrCode(
        `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}`
      );
    }
  }, [word, size]); // `useEffect` will trigger when `word` updates

  function handleClick() {
    setWord(temp); // Updates `word`, which will trigger `useEffect`
  }

  const handleTextChange = (e) => {
    setTemp(e.target.value);
  };

  const handleDimensionChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div style={appStyle}>
      <h3 style={{fontSize:"25px"}}>Auri QR</h3>
      <h6 style={{marginTop:"-15px"}}>Convert any text or link into QR code</h6>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={inputButtonContainer}>
          <Input
            style={inputStyle}
            type="text"
            placeholder="Enter text to encode"
            onChange={handleTextChange} // ✅ Fixed case
          />
          <Button text="Generate" onClick={handleClick} style={buttonStyle} />{" "}
          {/* ✅ Fixed case */}
        </div>
        <div style={rowContainerStyle}>
          <div style={rowStyle}>
            <h5>Dimension:</h5>
            <input
              type="range"
              min="200"
              max="500"
              value={size}
              style={{ width: "100px", accentColor: "#ff7a00" }}
              onChange={handleDimensionChange} // ✅ Corrected
            />
            <h5>
              {size}x{size}
            </h5>
          </div>
        </div>
      </div>

      <div style={qrContainerStyle}>
        {qrCode && ( // ✅ Only render when qrCode exists
          <img style={{ ...qrStyles }} src={qrCode} alt="QR Code" />
        )}
      </div>

      <a href={qrCode} download="QRCode" style={{ textDecoration: "none", color: "inherit" }}>
        <Button style={buttonStyle} text="Download" type="button" />
      </a>

    </div>
  );
};

export default App;
