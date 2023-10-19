import React from 'react'
import  ContactForm from './ContactForm'
import './Modal.css'

const ModalContactForm = ({
  isOpen = true,
  modalContactFormClose,
}) => {
  return isOpen ? (
      <div
      className="ModalWrapper"
        onClick={() => {
          // close modal when outside of modal is clicked
          modalContactFormClose();
        }}
      >
        <div
          className="modal-content"
          onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
      >
        <div className='ModalContainer contact'>
        <ContactForm modalContactFormClose={modalContactFormClose} />
        </div>
        </div>
      </div>
    ) : null;

}

export default ModalContactForm
