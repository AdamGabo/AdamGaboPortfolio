import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
//Some Module code was borrowed for this part of the application 
function ContactForm() {
	const [formElements, setFormState] = useState({name: "", email: "", message: "",}); //setup email hook using formState
	const [error, setErrorMessage] = useState(""); //setup error prompt hook when an error occurs i.e no info passed through 
	const { name, email, message } = formElements;
	function handleChange(e) { //event handler 
		if (e.target.name === "email") {
			const valid = validateEmail(e.target.value); // validate email 
			if (!valid) {
				setErrorMessage("Invalid Email");
			} 
            else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is needed.`);
				} 
                else {
					setErrorMessage("");
				}
			}
		}
		if (!error) {
			setFormState({ ...formElements, [e.target.name]: e.target.value });
		}
	}
	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is needed.`);
			} else {
				setErrorMessage("");
			}
		}
		if (!error) {
			setFormState({ ...formElements, [e.target.name]: e.target.value });
		}
	}
    //based off of module code 
	return (
		<section>
			<div className="center">
				<h2 className="page-header">Contact Me</h2>
			</div>
			<div>
				<form id="contact-form">
					<div>
						<label htmlFor="name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
                    <div>
						<label htmlFor="message">Message:</label>
						<br></br>
						<textarea
							name="message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					{error && (
						<div>
							<p className="error-text">{error}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}
export default ContactForm;