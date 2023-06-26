import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      setHasError(true);
    } else {
      setHasError(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <h3>
      <p>
        We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us.
      </p>
      <p>You can reach us through the following contact information:</p>
      <ul>
        <li>Email: info@icecreamshop.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 1234 Ice Cream Street, City, State, Country</li>
      </ul>
      <p>We are open from Monday to Saturday, 10:00 AM to 8:00 PM.</p>
      <p>Follow us on social media for updates and special offers:</p>
      <ul>
        <li>Facebook: /icecreamshop</li>
        <li>Instagram: @icecreamshop</li>
        <li>Twitter: @icecreamshop</li>
      </ul>
      <p>We look forward to serving you!</p>
      </h3>
      <h2>Send us your suggestions</h2>
      {isSubmitted ? (
        <p>The suggestion has been sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {hasError && <p>Please fill all the fields.</p>}
          <label>
            Name:
            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Message:
            <br />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
