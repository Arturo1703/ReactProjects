import React from "react";
import FileSaver from "file-saver";
import Downloadpdf from "../../assets/CV-ALF-112023-E.pdf";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfPath = Downloadpdf;

    FileSaver.saveAs(pdfPath, "personalCV.pdf");
  };

  return (
    <button onClick={handleDownload} className="btn">
      Download CV
    </button>
  );
};

export default DownloadButton;
