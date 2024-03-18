import React from "react";
import { useModal } from "react-modal-hook";
import { Button, Dialog, DialogTitle } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faEye, faInfoCircle} from "@fortawesome/free-solid-svg-icons";

import "./projects.styles.css";
import './modal.styles.css';

const InfoModal = (props) => {
  const [showModal, hideModal] = useModal(({ in: open, onExited }) => (
    <Dialog
      open={open}
      onExited={onExited}
      onClose={hideModal}
      className="modal-container"
    >
      <DialogTitle>
        <Button onClick={hideModal} className="btn-hide-modal">
          <FontAwesomeIcon className="close-icon" icon={faWindowClose} />
        </Button>
        {props.children}
      </DialogTitle>      
    </Dialog>
  ));

  return (
    <button onClick={showModal} className="btn-icons">
        {/* <h4>Info</h4> */}
        <FontAwesomeIcon className="icon eye" icon={faInfoCircle} />
      {/* <FontAwesomeIcon className="icon eye" icon={faEye} /> */}
    </button>
  );
};

export default InfoModal;