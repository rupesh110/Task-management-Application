import React from "react";
import "./try.css";
import Button from "../../component/button/Button";

export default function Try() {
  const [uploadedFile, setUploadedFile] = React.useState(null);

  const handleButton = () => {
    // Trigger the hidden file input element
    document.getElementById("fileInput").click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file, such as sending it to a server
    console.log(file);
    setUploadedFile(URL.createObjectURL(file));
    alert("File uploaded successfully: " + file.name);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Button text="Upload Image..." onClick={handleButton} />
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}     
        onChange={handleFileUpload}
      />
      {uploadedFile && (
        <div>
          <p>Uploaded file: {uploadedFile.name}</p>
          <img src={uploadedFile} alt="Uploaded" className="imageSize"/>
        </div>
      )}
    </div>
  );
}
