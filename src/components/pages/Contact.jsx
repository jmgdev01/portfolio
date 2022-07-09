import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import MessageSuccess from '../../assets/message-success.png';
import { BiMailSend } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { Button } from './../Button';

function Project() {
    const initialValues = { name: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const form = useRef();
    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = "Name field is required.";
        }

        if (!values.email) {
            errors.email = "Email field is required.";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format.";
        }

        if (!values.message) {
            errors.message = "Message field is required.";
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            emailjs.sendForm('service_np5xaxo', 'template_x8bko9u', form.current, 'Yv5D7lC7HdmpOELtu');
            formValues.name = "";
            formValues.email = "";
            formValues.message = "";
        }
    }, [formErrors]);

    const closeAlert = () => {
        setAlert(false);
    }

    const openAlert = () => {
        setAlert(true);
    }

    return (
        <>
            <div id='contact-section' className='contact--section w-full h-full px-10 py-16'>
                <div className='max-w-[1240px] h-full mx-auto'>
                    <div className='w-full'>
                        <div className='contact--header w-full'>
                            <p className='text--dark text-5xl font-black uppercase text-center'>
                                <span className='tracking-[.05em] text--dark--gray'>Get In Touch</span>
                            </p>
                        </div>

                        {Object.keys(formErrors).length === 0 && isSubmit ? (
                            <div className='alert--con flex flex-row justify-between items-center'>
                                <div className={`alert success flex flex-col justify-between items-center ${alert ? 'block' : 'hidden'}`} >
                                    <img src={MessageSuccess} alt="/" />
                                    <span className='font-bold py-3 text-center'>
                                        Your message has been sent successfully!
                                    </span>
                                    {<Button
                                        buttonStyle='btn--outline'
                                        buttonSize='btn--medium'
                                        buttonColor='btn--primary'
                                        buttonHover='btn--hover--light'
                                        text1='CONFIRM'
                                        text2='CONFIRM'
                                        type='submit'
                                        icon={<FaCheck size={25} />}
                                        onClick={closeAlert}
                                    ></Button>}
                                </div>
                                <div className={`cover--hidden ${alert ? 'block' : 'hidden'}`}></div>
                            </div>

                        ) : (
                            <div></div>
                        )}

                        <form ref={form} onSubmit={handleSubmit} className='contact--body w-full flex flex-row flex-wrap pt-8 mx-auto'>
                            <div className='w-full md:px-3 pt-3'>
                                <h2 className='text-3xl font-bold flex flex-row text--dark--gray'>Let's Talk</h2>
                                <p className='text-lg font-bold mb-5 text--dark--gray'>
                                    Whether you have a question or want to hire me, <span className='uppercase font-black'>My Inbox</span> is always open.
                                </p>
                                <hr />
                            </div>
                            <div className='contact--input--name'>
                                <label className='font-bold text-xl text--dark--gray mb-2'>Name</label>
                                <input className='w-full my-2' type='text' placeholder='Your Name' name='name'
                                    value={formValues.name} onChange={handleChange} />
                                <p className='text-[#e84545] font-bold'>{formErrors.name}</p>
                            </div>
                            <div className='contact--input--email'>
                                <label className='font-bold text-xl text--dark--gray mb-2'>Email</label>
                                <input className='w-full my-2' type='email' placeholder='Your Email' name='email'
                                    value={formValues.email} onChange={handleChange} />
                                <p className='text-[#e84545] font-bold'>{formErrors.email}</p>
                            </div>
                            <div className='contact--input--message'>
                                <label className='font-bold text-xl text--dark--gray mb-2'>Message</label>
                                <textarea className='w-full mt-2' rows='5' type='text' placeholder='Your Message Here...' name='message'
                                    value={formValues.message} onChange={handleChange}>
                                </textarea>
                                <p className='text-[#e84545] font-bold'>{formErrors.message}</p>
                            </div>
                            <div className='contact--btn md:mx-auto ml-auto flex flex-row justify-center items-center'>
                                {<Button
                                    buttonStyle='btn--solid'
                                    buttonSize='btn--large'
                                    buttonColor='btn--light'
                                    buttonHover='btn--hover--primary'
                                    text1='SEND MESSAGE'
                                    text2='SEND MESSAGE'
                                    type='submit'
                                    icon={<BiMailSend size={25} />}
                                    onClick={openAlert}
                                ></Button>}
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Project