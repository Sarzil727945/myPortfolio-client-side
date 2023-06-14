import React, { useState } from 'react';
import './Contact.css'
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
     const [input1Value, setInput1Value] = useState('');
     const [input2Value, setInput2Value] = useState('');
     const [input3Value, setInput3Value] = useState('');
     const [isFormFilled, setIsFormFilled] = useState(false);

     const notify = () => toast("Please fill up the form!");


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
     };

     const handleInput3Change = (event) => {
          setInput3Value(event.target.value);
          setIsFormFilled(
               input1Value !== '' && input2Value !== '' && event.target.value !== ''
          );
     };


     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const subject = form.subject.value;
          const message = form.message.value;
          form.reset();
          console.log(name, email, subject, message);
          setInput1Value('');
          setInput2Value('');
          setInput3Value('');

     };

     return (
          <div className=' mt-5 pt-5 container'>
               <div className=' row'>
                    <div className=' col-lg-5 mb-3'>
                         <h2>Let's Connect</h2>
                         <p>Please fill out the form on this section to contact with me. Or call between 8:00 a.m. and 10:00 p.m. ET, Monday through Friday</p>
                         <div>
                              <div className=" d-flex">
                                   <div className="icon text-muted">
                                        <a href="https://www.facebook.com/smsarzil.muntaha" target='_blank'>
                                             <span><BsFacebook /></span>
                                        </a>
                                   </div>
                                   <div className="icon">
                                        <a href="#" target='_blank'>
                                             <BsLinkedin />
                                        </a>
                                   </div>
                                   <div className="icon">
                                        <a href="https://www.youtube.com/channel/UCJOmN86g6tWuxer1_J5wuaQ" target='_blank'>
                                             <AiFillYoutube />
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className=' col-lg-7'>
                         <form className='p-lg-5 mx-lg-5' onSubmit={handleSubmit}>
                              <div className="row px-4 pt-4">
                                   <div className="col-lg mb-2">
                                        <input value={input1Value}
                                             onChange={handleInput1Change} type="text" name='name' className="form-control py-2" placeholder="Your name" aria-label="name" required />
                                   </div>
                              </div>
                              <div className="row px-4 pt-4">
                                   <div className="col-lg mb-2">
                                        <input value={input2Value}
                                             onChange={handleInput2Change} type="email" name='email' className="form-control py-2" placeholder="Your email" aria-label="email" required />
                                   </div>
                              </div>
                              <div className="row px-4 py-4">
                                   <div className="col-lg mb-2">
                                        <input value={input3Value}
                                             onChange={handleInput3Change} type="text" name='subject' className="form-control py-2" placeholder="Your Subject" aria-label="false" required />
                                   </div>
                              </div>
                              <div className="mb-3 px-4 pb-3">
                                   <textarea name='message' className="form-control py-2" id="validationTextarea"
                                        aria-invalid="false" placeholder="Your message" rows="5"></textarea>
                              </div>
                              <div className='px-4'>
                                   <div>
                                   <button type="submit" className="sendButton" onClick={()=>notify()}>
                                   
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