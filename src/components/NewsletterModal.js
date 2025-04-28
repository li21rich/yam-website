import React from "react";
import { useState } from "react";
import firebase from "firebase";


export default function NewsletterModal(props) {
/* eslint-disable no-unused-vars */
  const [state, updateState] = useState({
    emailAdded: false,
    //message: "Join the YAM Newsletter to stay updated on upcoming contests, events, and more! https://forms.gle/YUAZSPw45qvSQmyi8",
    message: "Check out our upcoming local community concert on May 24! youthartmovement.org/events/communityconcert",

    email: "",
  });

  return (
    <div
      className="modal fade mt-3"
      id="newsletterModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="newsletterModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newsletterModalLabel">
              Join our Newsletter for Updates
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body email-modal-body">
            {state.message}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//CODE REMOVED FROM LINE 40:
/*
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addEmailToFirebase(state, updateState, props.db);
              }}
              className="pb-1"
            >
              <input
                placeholder="Enter your email address"
                value={state.email}
                onChange={(e) => {
                  updateState({ ...state, email: e.target.value });
                }}
                type="text"
                className="form-control"
                disabled={state.emailAdded}
              ></input>
            </form>
*/
//CODE REMOVED FROM LINE 50:
/*
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addEmailToFirebase(state, updateState, props.db)}
              disabled={state.emailAdded}
            >
              Submit
            </button>
*/
/* eslint-disable no-unused-vars */
function addEmailToFirebase(state, updateState, db) {
  if (!state.email) {
    updateState({
      ...state,
      message: "You have not entered an email address.",
    });
    return;
  }
  if (!validateEmail(state.email)) {
    updateState({
      ...state,
      message: "You have entered an invalid email address!",
    });
    return;
  }

  db.collection("subscribers")
    .doc()
    .update({
      emails: firebase.firestore.FieldValue.arrayUnion(state.email),
    });

  updateState({
    ...state,
    message: "Success! You have been added to our mailing list.",
    emailAdded: true,
  });
}
function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}
