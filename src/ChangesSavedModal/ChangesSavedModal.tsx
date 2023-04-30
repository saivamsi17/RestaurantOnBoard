import React, { FC, useEffect, useState } from 'react';
import styles from './ChangesSavedModal.module.scss';
import $ from 'jquery';
import 'bootstrap';

type ChangesSavedModalProps = {
  show: boolean;
  handleShow: Function;
}

const ChangesSavedModal: FC<ChangesSavedModalProps> = ({
  show,
  handleShow
}) => {
 
  return (
    <> {show ?
      <div className="modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="false">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => handleShow(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
      : null}
    </>
  );
};

export default ChangesSavedModal;