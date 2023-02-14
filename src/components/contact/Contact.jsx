import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';

function Contact() {
	const [formSend, setFormSend] = useState('');
	const formRef = useRef();

	return (
		<div className="Contact" id="contact">
			<h2 className="Contact-h2">Contacto</h2>
			<div className="Contact-socials">
				<a
					href="https://www.github.com"
					target="_blank"
					rel="noopener noreferrer"
					className="Hero-a"
					aria-label="Github"
				>
					<FontAwesomeIcon icon={faGithub} className="Hero-svg" />
				</a>
				<a
					href="https://www.linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="Hero-a"
					aria-label="Linkedin"
				>
					<FontAwesomeIcon icon={faLinkedin} className="Hero-svg" />
				</a>
			</div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
				}}
				validate={values => {
					const errors = {};

					if (!values.name) {
						errors.name = 'Ingrese su nombre';
					}

					if (!values.email) {
						errors.email = 'Ingrese su Correo';
					}

					if (!values.message) {
						errors.message = 'Ingrese un mensaje';
					}

					return errors;
				}}
				onSubmit={(values, { resetForm }) => {
					try {
						emailjs
							.sendForm('service_xd1ho3b', 'template_pp731zn', formRef.current, 'mGvgRILdgCxg2U8hz')
							.then(result => {
								setFormSend('Formulario Enviado');
								resetForm();
								setTimeout(() => setFormSend(''), 5000);
							});
					} catch (error) {
						setFormSend('Error al enviar el formulario');
						setTimeout(() => setFormSend(''), 5000);
					}
				}}
			>
				{({ errors }) => (
					<Form className="Contact-form" ref={formRef}>
						<div className="Contact-group">
							<label className="Contact-label" htmlFor="name">
								Nombre
								<Field className="Contact-input" type="text" id="name" name="name" />
								<ErrorMessage name="name" component="p" />
							</label>
						</div>
						<div className="Contact-group">
							<label className="Contact-label" htmlFor="email">
								Email
								<Field className="Contact-input" type="email" id="email" name="email" />
								<ErrorMessage name="email" component="p" />
							</label>
						</div>
						<div className="Contact-group">
							<label className="Contact-label" htmlFor="message">
								Message
								<Field className="Contact-input" id="message" name="message" as="textarea" />
								<ErrorMessage name="message" component="p" />
							</label>
						</div>
						<button type="submit" className="Contact-btn" aria-label="Enviar">
							Submit
						</button>
						{formSend === 'Formulario Enviado' ? (
							<p className="Contact-success">{formSend}</p>
						) : (
							<p className="Contact-error">{formSend}</p>
						)}
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Contact;
