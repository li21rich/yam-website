import React from "react";

export default function SubmitButtons() {
  return (
    <div className="container text-center pb-5">
      <div className="section-header">
        <h1>Submit Your Work</h1>
      </div>

      <div className="row">
        <div className="col-12 px-2">
          <p className="lead-p mb-2">
            Innovate. Inspire others. Empower your voice.
          </p>
          <p>
            Pieces can be any aspects of the arts, including but not limited to:{" "}
            <b>photography, visual art, music, sculpture</b>.<br />
            Please read submission guidelines below.
          </p>
        </div>
        
        <div className="col">
 <div className="flex flex-col gap-4">
  <div>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeo9wQA3X1NkmyZKCHUc1V6Hp6x7kFRK-1kLNGrATbkWZEj5g/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="action-btn main-action text-lg px-6 py-3 font-bold"
      style={{ fontSize: "1.5rem", padding: "15px 30px" }}
    >
      Submit To Our Gallery
    </a>
  </div>
  <div>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeo9wQA3X1NkmyZKCHUc1V6Hp6x7kFRK-1kLNGrATbkWZEj5g/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="action-btn text-base px-4 py-2 my-4"
    >
      BLM Gallery
    </a>
  </div>
</div>

</div>

      </div>
    </div>
  );
}
