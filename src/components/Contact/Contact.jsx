import React, { useRef, useState } from 'react';
import './Contact.css'
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import emailjs from '@emailjs/browser';

const Contact = () => {
     useTitle('Contact');
     const form = useRef();
     const [input1Value, setInput1Value] = useState('');
     const [input2Value, setInput2Value] = useState('');
     const [input3Value, setInput3Value] = useState('');
     const [isFormFilled, setIsFormFilled] = useState(false);
     const [email, setEmail] = useState("")
     const [emailError, setEmailError] = useState('')
     const emailRef = useRef();


     const notify = () => toast("Please fill up the form !!");


     const handleInput1Change = (event) => {
          setInput1Value(event.target.value);
          setIsFormFilled(
               event.target.value !== '' && input2Value !== '' && input3Value !== ''
          );
     };

     const handleInput2Change = (event) => {
          setInput2Value(event.target.value);
          setIsFormFilled(
               input1Value !== '' && event.target.value !== '' && input3Value !== ''
          );

          const emailInput = event.target.value
          if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
               setEmailError('Please provide a valid email !!')
          }
          else {
               setEmailError('')
          }
          setEmail(emailInput)

     };

     const handleInput3Change = (event) => {
          setInput3Value(event.target.value);
          setIsFormFilled(
               input1Value !== '' && input2Value !== '' && event.target.value !== ''
          );
     };


     const handleSubmit = (event) => {
          event.preventDefault();
          const formOf = event.target;
          const name = formOf.name.value;
          const email = formOf.email.value;
          const subject = formOf.subject.value;
          const message = formOf.message.value;

          emailjs.sendForm('service_j7m7s0j', 'template_msbrd06', form.current, '4pgoNqPSJizpL-x1l')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         

          // user information post data page start 
          const saveUser = { name, email, subject, message }
          fetch('https://portfolio-server-side-rho.vercel.app/user', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(saveUser)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         Swal.fire({
                              title: 'Success!',
                              text: 'Send your message Success !!',
                              icon: 'success',
                              confirmButtonText: 'Ok'
                         })

                         formOf.reset();
                         setEmail('')
                         setInput1Value('');
                         setInput2Value('');
                         setInput3Value('');
                    }
               })
          // user information post data page end
     };

     return (
          <div className=' mt-lg-5 pt-lg-5 container'>
               <div className=' row d-flex align-items-center'>
                    <div className=' col-lg-5 mb-3'>
                         <h2 className=' fw-bold Text-color'>Let's Connect</h2>
                         <p className=' py-2 fs-5 text-muted'>Please fill out the form on this section to contact with me. Or call between 8:00 a.m. and 10:00 p.m.</p>
                         <div>
                              <div className=" d-flex">
                                   <div className="icon">
                                        <a href="https://www.facebook.com/smsarzil.muntaha" target='_blank'>
                                             <span><BsFacebook /></span>
                                        </a>
                                   </div>
                                   <div className="icon">
                                        <a href="https://www.linkedin.com/in/sarzil-muntaha-678b11263/" target='_blank'>
                                             <BsLinkedin />
                                        </a>
                                   </div>
                                   <div className="icon">
                                        <a href="https://www.instagram.com/sarzilmuntaha" target='_blank'>
                                             <AiFillInstagram />
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className=' col-lg-7'>
                         <form className='p-lg-5 mx-lg-5' onSubmit={handleSubmit} ref={form}>
                              <div className="row px-4 pt-4">
                                   <div className="col-lg mb-2">
                                        <input value={input1Value}
                                             onChange={handleInput1Change} type="text" name='name' className="form-control py-2" placeholder="Your name" aria-label="name" required />
                                   </div>
                              </div>
                              <div className="row px-4 pt-4">
                                   <div className="col-lg mb-2">
                                        <input value={input2Value}
                                             onChange={handleInput2Change} type="email" name='email'
                                             className="form-control py-2" placeholder="Your email" aria-label="email"
                                             ref={emailRef}
                                             required />
                                   </div>
                                   {
                                        emailError && <span className=' text-danger'>{emailError}</span>
                                   }
                              </div>
                              <div className="row px-4 py-4">
                                   <div className="col-lg mb-2">
                                        <input value={input3Value}
                                             onChange={handleInput3Change} type="text" name='subject' className="form-control py-2" placeholder="Your subject" aria-label="false" required />
                                   </div>
                              </div>
                              <div className="mb-3 px-4 pb-3">
                                   <textarea name='message' className="form-control py-2" id="validationTextarea"
                                        aria-invalid="false" placeholder="Your message" rows="5"></textarea>
                              </div>
                              <div className='px-4'>
                                   <div>
                                        <button type="submit" className="sendButton" onClick={() => notify()}>

                                             Send Message
                                        </button>
                                        {!isFormFilled && <ToastContainer />}
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Contact;