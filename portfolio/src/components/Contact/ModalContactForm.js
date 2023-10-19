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
        <div className='ModalContainer contact'  onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}>
        <ContactForm modalContactFormClose={modalContactFormClose} />
        </div>
        </div>
    ) : null;

}

export default ModalContactForm
