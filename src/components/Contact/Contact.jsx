import React, { useRef, useState } from 'react';
import './Contact.css'
import { FaEnvelopeOpen, FaGithub, FaPaperPlane, FaPhoneSquareAlt } from 'react-icons/fa';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsSendFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const Contact = () => {
     const form = useRef();
     const [input1Value, setInput1Value] = useState('');
     const [input2Value, setInput2Value] = useState('');
     const [input3Value, setInput3Value] = useState('');
     const [isFormFilled, setIsFormFilled] = useState(false);
     const [sendMessage, setSendMessage] = useState("Send Message")
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
          setSendMessage('Sending Message...')
          const formOf = event.target;
          const name = formOf.name.value;
          const email = formOf.email.value;
          const subject = formOf.subject.value;
          const message = formOf.message.value;
          emailjs.sendForm('service_ynwypci', 'template_92ge94i', form.current, '4pgoNqPSJizpL-x1l')
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
                         setSendMessage('Send Message')
                    }
               })
          // user information post data page end
     };

     return (
          <div>
               <div className=' container pt-5'>
                    <div className=' text-center '>
                         <h2 className='fw-bold Text-color mt-4 display-4'>GET IN <span className='org-color'>TOUCH</span></h2>
                    </div>
                    <div className=' row d-flex align-items-center' >
                         <div className=' col-lg-4 mb-3 pt-5' data-aos="fade-up">
                              <div className='px-lg-0  px-3'>
                                   <h2 className=' fw-bold Text-color'>DON'T BE SHY !</h2>
                                   <p className=' py-2 fs-5 text-muted'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                              </div>
                              <div>
                                   <div className=' d-flex'>
                                        <div className=' icon iconColor'>
                                             <FaEnvelopeOpen />
                                        </div>
                                        <div className=' ms-2'>
                                                  <div>
                                                       <i className=' d-block text-muted fw-semibold'>MAIL ME</i>
                                                  </div>
                                                  <div>
                                                       <a href="mailto:sarzilmuntaha@gmail.com" className=' text-decoration-none text-dark  fontSize' target='_blank'>sarzilmuntaha@gmail.com</a>
                                                  </div>
                                        </div>
                                   </div>
                                   <div className=' d-flex mt-3'>
                                        <div className=' icon iconColor'>
                                             <FaPhoneSquareAlt />
                                        </div>
                                        <div className=' ms-2 '>
                                             <div>
                                                  <i className=' d-block text-muted fw-semibold'>CALL ME</i>
                                             </div>
                                             <div>
                                                  <a href="tel:+8801893254443" className=' text-decoration-none text-dark  fontSize'>+880 1803254443</a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div className=" d-flex justifySmCenter mt-2">
                                        <div className="icon">
                                             <a title='Facebook' href="https://www.facebook.com/smsarzil.muntaha" target='_blank'>
                                                  <span><BsFacebook /></span>
                                             </a>
                                        </div>
                                        <div className="icon">
                                             <a title='Linkedin' href="https://www.linkedin.com/in/sarzil-muntaha-678b11263/" target='_blank'>
                                                  <BsLinkedin />
                                             </a>
                                        </div>
                                        <div className="icon">
                                             <a title='GitHub' href="https://github.com/Sarzil727945" target='_blank'>
                                                  <span><FaGithub /></span>
                                             </a>
                                        </div>
                                        <div className="icon">
                                             <a title='Instagram' href="https://www.instagram.com/sarzilmuntaha" target='_blank'>
                                                  <AiFillInstagram />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className=' col-lg-8' data-aos="fade-up">
                              <form className='p-lg-5 ms-lg-5' onSubmit={handleSubmit} ref={form}>
                                   <div className=' d-lg-flex'>
                                        <div className="row ps-4 pt-4 w-100">
                                             <div className="col-lg mb-2">
                                                  <input value={input1Value}
                                                       onChange={handleInput1Change} type="text" name='name' className="form-control inputRadius inputPadding" placeholder="YOUR NAME" aria-label="name" required />
                                             </div>
                                        </div>
                                        <div className="row ps-4 pe-lg-4 pt-4 w-100">
                                             <div className="col-xl mb-2">
                                                  <input value={input2Value}
                                                       onChange={handleInput2Change} type="email" name='email'
                                                       className="form-control inputRadius inputPadding" placeholder="YOUR EMAIL" aria-label="email"
                                                       ref={emailRef}
                                                       required />
                                             </div>
                                             {
                                                  emailError && <span className=' text-danger'>{emailError}</span>
                                             }
                                        </div>
                                   </div>
                                   <div className="row px-4 py-4">
                                        <div className="col-lg mb-2">
                                             <input value={input3Value}
                                                  onChange={handleInput3Change} type="text" name='subject' className="form-control inputRadius inputPadding" placeholder="YOUR SUBJECT" aria-label="false" required />
                                        </div>
                                   </div>
                                   <div className="px-4 pb-3">
                                        <textarea name='message' className="form-control inputRadius inputPadding" id="validationTextarea"
                                             aria-invalid="false" placeholder="YOUR MESSAGE" rows="5"></textarea>
                                   </div>
                                   <div className='px-4 mt-3 mb-2'>
                                        <div>
                                             <button type="submit" className="sendButton" onClick={() => notify()}>

                                                  {sendMessage}  <FaPaperPlane />
                                             </button>
                                             {!isFormFilled && <ToastContainer />}
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Contact;