import React, { useState } from 'react';
import PageHeader from '../../component/pageHeader/pageHeader';
import { BsInfoCircle } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.description}`
    );
  };

  return (
    <section id="contact" className="contact">
      <PageHeader headerText="Contact Me" icon={<BsInfoCircle size={40} />} />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translate(-200px)',
          }}
          end={{
            transform: 'translate(0px)',
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div className="contact__content__form__controlswrapper__item">
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div className="contact__content__form__controlswrapper__item">
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div className="contact__content__form__controlswrapper__item">
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  rows="7"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Message
                </label>
              </div>
            </div>
            <button type="submit" className="contact__content__form__submit">
              Submit
            </button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
