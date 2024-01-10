import "./App.css";
import { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      // Make sure a file is selected
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        await axios.post("http://localhost:8080/upload", formData, {
          headers: {
            // The 'Content-Type' header will be set automatically by axios for FormData
          },
        });
        alert("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

function App() {
  return (
    <>
      <FileUpload />
    </>
  );
}

export default App;
