import React, { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload";

const EditProject = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return visible ? (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">Edit Project</h4>
      <h4 className="display-7 text-center mb-4">
        <i className="far fa-file-alt"></i> CV Upload
      </h4>
      <h6 className="display-10 text-center mb-4">Select file with data</h6>
      <h6 className="display-13 text-center mb-4">
        <p>Please upload a valid text/doc/pdf file.</p> OR
        <p>
          A zip file of all the text/pdf/doc documents. Max file size is 100 MB
          for free plans
        </p>
      </h6>

      <FileUpload></FileUpload>
    </div>
  ) : (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">Edit Project</h4>
      <button className="btn btn-primary btn-block mt-10" onClick={handleClick}>
        Upload Raw Data
      </button>
    </div>
  );
};

export default EditProject;
