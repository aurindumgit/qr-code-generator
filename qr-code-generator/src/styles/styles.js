export const appStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100vw",
    maxHeight: "100vh", 
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    paddingTop: "30px", // Prevents content from sticking to screen edges
};  

export const buttonStyle = {
    backgroundColor: "#ff7a00",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "0 20px",
    height: "45px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px rgba(255, 122, 0, 0.3)",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    width: "auto", // ✅ Prevents stretching on larger screens
};

export const inputStyle = {
    width: "320px",
    height: "45px",
    border: "2px solid #ff7a00",
    borderRadius: "8px",
    padding: "0 15px",
    fontSize: "16px",
    fontWeight: "500",
    outline: "none",
    transition: "border 0.3s ease",
};

// ✅ Prevents input & button from sticking together
export const inputButtonContainer = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap", // ✅ Allows wrapping on small screens
    justifyContent: "center",
    width: "100%",
    maxWidth: "400px",
};

export const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "320px",
    marginBottom: "20px",
};

export const rowContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "320px",
};

export const qrContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "320px", 
    height: "320px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
    padding: "10px",
    marginTop: "0px",
    marginBottom: "20px",
};

export const qrStyles = {
    width: "280px",
    height: "280px",
};

export const innerBoxStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    backgroundColor: "#ff7a00",
};

export const boxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    backgroundColor: "#fffaf5",
    border: "2px solid #ff7a00",
};

export const paragraph = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "12px",
};

export const bodyContainer = {
    padding: "1.5em",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
};

// ✅ Responsive styling
export const responsiveStyles = `
  @media (max-width: 480px) {
    input {
      width: 100% !important;
    }

    button {
      width: 100% !important;
    }

    .qr-container {
      width: 90% !important;
      height: auto !important;
      max-width: 280px !important;
    }

    .qr-container img {
      width: 90% !important;
      height: auto !important;
    }

    .input-button-container {
      flex-direction: column;
      gap: 8px !important;
    }
  }
`;

// Inject styles dynamically into <head>
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);
