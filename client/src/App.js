import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("images", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const url = "http://localhost:5000/user/upload";

    axios
      .post(url, formData, config)
      .then((response) => {
        alert("Image Uploaded Successfully!!");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const onInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="App">
      <form onSubmit={onFormSubmit} encType='multipart/form-data'>
        <input type="file" accept=".png, .jpg, .jpeg" name="images" onChange={onInputChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
