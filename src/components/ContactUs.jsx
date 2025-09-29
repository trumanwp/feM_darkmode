import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_c6igulg', 'template_aw9vp79', form.current, {
                publicKey: 'FVCtUbF9S2h0GVny8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <h1>CONTACT US</h1>
            <hr className="w-80 my-4"/>
            <form className="flex flex-col items-center gap-2" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input className="border-2 rounded" type="text" name="user_name" />
                <label>Email</label>
                <input className="border-2 rounded" type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" className="border-2 rounded h-60 w-80"/>
                <input type="submit" value="Send" className="border-2 rounded h-12 w-20 active:h-10 active:w-16" />
            </form>
        </div>

    );
};