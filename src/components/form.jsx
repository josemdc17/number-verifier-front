import axios from "axios";
import { useState } from "react";

const Form = (props) => {
  const [file, setFile] = useState(undefined);
  const [name, setName] = useState("");

  const passingValueToParent = (fname) => {
    props.setValue(fname);
    console.log("se ejecuta pasar el state del form al App.jsx");
  };

  const uploadToApi = (fileToUpload, fname) => {
    let formData = new FormData();
    formData.append("file", fileToUpload);
    formData.append("name", fname);
    axios
      .post("http://localhost:8090/uploadFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        //
      });
  };

  return (
    <div className="wrapper">
      <div className="textWrapper">
        <h1 className="instructionPoint">2</h1>

        <p>Upload the file you just downloaded</p>
        <hr />
        <form
          className="formFileUpload"
          onSubmit={(ev) => {
            ev.preventDefault();
            uploadToApi(file, name);
            passingValueToParent(name);
          }}
        >
          
          <input
            accept=".txt"
            type="file"
            name="uploadFile"
            className="inputFileUpload"
            onChange={(ev) => {
              setFile(ev.target.files[0]);
              setName(ev.target.files[0].name);
            }}
          />
          <br />
          <br />
          <label className="fileUploadLabel">Your file name is: {name}</label>
          
          <hr />  

          <div className="buttonWrapper">
            <button className="fileUploadButton" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
