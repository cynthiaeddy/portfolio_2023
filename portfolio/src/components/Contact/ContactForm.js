import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form'
import { GrClose } from 'react-icons/gr'



const ContactForm = ({modalContactFormClose}) => {
  const [message, setMessage] = useState("");


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='Login_form contact'>
        <button
          type='button'
          onClick={modalContactFormClose}
          className='ModalContainer-button'>
          <GrClose />
        </button>
        <h3 className='Main_hed modal'>contact us</h3>
        <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
        </div>
        <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
        </div>
        <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
        <div>
          <h5 className='message'><label htmlFor="message">Message</label></h5>
      <TextareaAutosize
          cacheMeasurements
            className='Signup_input message'
            minRows={2}
        value={message}
        onChange={ev => setMessage(ev.target.value)}
          />
        </div>
        <div className='fifty login-button'>
          <button type='submit' className='Login_submit-button'>
            <h4 className='cta-button'>Submit</h4>
          </button>
        </div>
        </form>
    </div>
  )
}
export default ContactForm
