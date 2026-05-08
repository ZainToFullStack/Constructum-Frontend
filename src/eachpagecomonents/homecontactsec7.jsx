import React, { useState } from 'react';
import '../style/homecontactsec7.css';
import { FaFacebook, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [selection, setSelection] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    // Generate the dynamic message
    const message = name && selection ? `${name} wants to ${selection} their property.` : '';

    const handleSubmit = async () => {
        if (!selection || !name) {
            alert('Please select an option and enter your name.');
            return;
        }

        setLoading(true);

        const templateParams = {
            name,
            intent: selection,
            message
        };

        try {
            await emailjs.send(
                'service_7h927nt', // Your EmailJS Service ID
                'template_9ua9ucb', // Your EmailJS Template ID
                templateParams,
                'QIct3i-WujnzWpoFI' // Your EmailJS Public Key
            );
            alert('Form sent successfully!');
            setName('');
            setSelection('');
        } catch (err) {
            console.error(err);
            alert('Failed to send. Try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">

                {/* Left: Dial Section */}
                <div className="contact-info">
                    <h2 className="contact-title">Dial & Let's talk!</h2>
                    <p className="contact-subtitle">Feel the difference from the first call!</p>
                    <div className="contact-number">042 35 741 460</div>

                    <div className="social-footer">
                        <span>Follow us on</span>
                        <div className="social-line"></div>
                        <div className="social-icons">
                            <FaFacebook className="icon" />
                            <FaYoutube className="icon" />
                            <FaLinkedin className="icon" />
                            <FaPinterest className="icon" />
                        </div>
                    </div>
                </div>

                {/* OR Separator */}
                <div className="contact-separator">OR</div>

                {/* Right: Form Section */}
                <div className="contact-form-wrapper">
                    <div className="contact-form-card">
                        <h3 className="form-title">REQUEST A CALLBACK</h3>

                        {/* Step 1: Selection */}
                        <div className="form-question">
                            <label>What are you looking for? *</label>
                            <div className="radio-group">
                                {['Buy', 'Sell', 'Rent'].map((option) => (
                                    <label
                                        key={option}
                                        className={`radio-item ${selection === option ? 'active' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name="intent"
                                            value={option}
                                            checked={selection === option}
                                            onChange={(e) => setSelection(e.target.value)}
                                        />
                                        <span className="custom-radio"></span> {option}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Step 2: Name Input appears only after selection */}
                        {selection && (
                            <div className="form-question">
                                <label>Enter Your Name *</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="form-input"
                                />
                            </div>
                        )}

                        {/* Step 3: Show dynamic message */}
                        {message && (
                            <div className="form-question">
                                <p className="dynamic-message">{message}</p>
                            </div>
                        )}

                        <button
                            className="form-next-btn"
                            onClick={handleSubmit}
                            disabled={!name || !selection || loading}
                        >
                            {loading ? 'SENDING...' : 'SUBMIT'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
