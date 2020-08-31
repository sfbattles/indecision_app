import React from "react";
import ReactModal from "react-modal";

//same as the above function but this one is an implict return
const OptionModal = (props) => (
  <ReactModal>
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"

    <h3>Selected Option</h3>
  </ReactModal>
);

export default OptionModal;
