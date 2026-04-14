import React, { useState } from 'react'
import axios from 'axios';
import DataUsageIcon from '@material-ui/icons/DataUsage';

const CONTACT_EMAIL = 'khanashiq4494@gmail.com';

function Form() {
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_no: '',
        message: ''
    });
    const [submitState, setSubmitState] = useState({
        type: '',
        message: ''
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value
        }));
    };

    const FormSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitState({ type: '', message: '' });

        try {
            await axios.post(
                `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone_no || 'Not provided',
                    message: formData.message,
                    _subject: `Portfolio contact from ${formData.name}`,
                    _template: 'table',
                    _captcha: 'false'
                },
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            );

            setSubmitState({
                type: 'success',
                message: 'Message sent successfully. I will get back to you soon.'
            });
            setFormData({
                name: '',
                email: '',
                phone_no: '',
                message: ''
            });
        } catch (error) {
            setSubmitState({
                type: 'error',
                message: 'Sorry, your message could not be sent right now. Please try again in a moment.'
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="font-sans flex-grow m-5 rounded-xl border-2 border-blue-700 bg-gray-100 p-5 md:p-10 lg:p-10 lg:pb-20 lg:pl-10 lg:pr-10 lg:pt-10" style={{ maxWidth: "600px" }}>
            <div className="flex justify-center">
                <h2 className="pb-5 pt-5 text-2xl md:pb-10 lg:pb-10">Send me a message 🙂</h2>
            </div>

            <form onSubmit={FormSubmitHandler}>
                <div className="name flex flex-col md:flex lg:flex">
                    <div className="mr-5 flex flex-col">
                        <label htmlFor="contact-name">Name</label>
                        <input
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            className="outline-none border-2 border-opacity-60 border-blue-500 rounded-md p-1 lg:w-8/12"
                            type="text"
                            required
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <div>
                    <div className="mt-5 flex flex-col">
                        <label className="block" htmlFor="contact-email">
                            <span>Email</span>
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className="outline-none border-2 border-opacity-60 border-blue-500 rounded-md p-2 form-input mt-1 block w-full"
                            type="email"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="mt-5 flex flex-col">
                        <label className="block" htmlFor="contact-phone">
                            <span>Contact Number</span>
                        </label>
                        <input
                            id="contact-phone"
                            name="phone_no"
                            value={formData.phone_no}
                            onChange={onChange}
                            className="outline-none border-2 border-opacity-60 border-blue-500 rounded-md p-2 form-input mt-1 block w-full"
                            type="text"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <div className="mt-5 flex flex-col">
                    <label className="block" htmlFor="contact-message">
                        <span className="text-gray-700">Message</span>
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={onChange}
                        className="outline-none border-2 border-opacity-60 form-textarea mt-1 block w-full border-blue-600 rounded-md p-2"
                        rows="4"
                        placeholder="Tell me a bit about your project or message..."
                        disabled={isLoading}
                        required
                    />

                    <button type="submit" className="focus:outline-none mt-5 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-80" disabled={isLoading}>
                        {isLoading ? <><DataUsageIcon className="animate-spin" /> sending</> : 'Submit'}
                    </button>

                    {submitState.message ? (
                        <div
                            className={`mt-4 rounded-lg px-4 py-3 text-center font-semibold ${submitState.type === 'success'
                                ? 'bg-green-50 text-green-700'
                                : 'bg-red-50 text-red-700'
                                }`}
                        >
                            {submitState.message}
                        </div>
                    ) : null}
                </div>
            </form>
        </div>
    )
}

export default Form
