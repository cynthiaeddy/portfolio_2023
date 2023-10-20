import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { GrClose } from 'react-icons/gr'
import emailjs from '@emailjs/browser'
import './ContactForm.css'
import { BsSendFill } from 'react-icons/bs'

const ContactForm = ({ modalContactFormClose }) => {
  const form = useRef()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      reset()
      modalContactFormClose()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className='
      contactFormContainer'
    >
      <button
        type='button'
        onClick={modalContactFormClose}
        className='ModalContainer-button'
      >
        <GrClose />
      </button>
      <h2 className='Main_hed modal'>drop me a line</h2>
      <div className='input_container'>
        <h5>
          {' '}
          <label htmlFor='name'>name</label>
        </h5>
        <input
          type='text'
          name='name'
          {...register('name', {
            required: 'Please enter your name',
          })}
          className='contact_input'
        />
        <h6 className='contact_error'>{errors.name?.message}</h6>
      </div>
      <div className='input_container'>
        <h5>
          {' '}
          <label htmlFor='email'>email</label>
        </h5>
        <input
          type='email'
          {...register('email', {
            required: 'Please enter your email address',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid email address',
            },
          })}
          name='email'
          className='contact_input'
        />
        <h6 className='contact_error'>{errors.email?.message}</h6>
      </div>
      <div className='input_container'>
        <h5>
          {' '}
          <label htmlFor='subject'>subject</label>
        </h5>
        <input
          type='text'
          name='subject'
          {...register('subject', {
            required: 'Please enter a subject',
          })}
          className='contact_input'
        />
        <h6 className='contact_error'>{errors.subject?.message}</h6>
      </div>
      <div className='input_container'>
        <h5>
          {' '}
          <label htmlFor='message'>message</label>
        </h5>
        <textarea
          rows={4}
          name='message'
          {...register('message', {
            required: true,
          })}
          className='contact_input text-area'
        />
        <h6 className='contact_error'>{errors.message?.message}</h6>
      </div>
      <button type='submit' className='contact_form-button'>
        <BsSendFill size='1.5em' />
      </button>
    </form>
  )
}
export default ContactForm
