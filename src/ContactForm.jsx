import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [aszf, setAszf] = useState(false);
    const [aszfError, setAszfError] = useState("");
    const [language, setLanguage] = useState("");
    const [languageError, setLanguageError] = useState("");

    // TODO disabled state + useEffect

    const handleSubmit = (event) => {
        const isValidEmail = email => {
            const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return emailRegex.test(email);
        }

        event.preventDefault();
        console.log(event);

        if (name === '') {
            setNameError("Please enter your name");
        } else {
            setNameError("");
        }

        if (email === '' || !isValidEmail(email)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }

        if (message === '') {
            setMessageError("Please enter a message");
        } else {
            setMessageError("");
        }

        if (!aszf) {
            setAszfError("Légyszi tényleg fogadd el!")
        } else {
            setAszfError("");
        }

        if (language === '') {
            setLanguageError("Please choose a language");
        } else {
            setLanguageError("");
        }

        if (nameError === '' && emailError === '' && messageError === '') {
            console.log("Form submitted", { name, email, message });
        }
    }

    return (
        <div>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        autoComplete="off"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <p className="error">{nameError}</p>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        autoComplete="off"
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <p className="error">{emailError}</p>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea
                        autoComplete="off"
                        id="message"
                        type="text"
                        cols={30}
                        rows={6}
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                    />
                    <p className="error">{messageError}</p>
                </div>

                <div>
                    <label htmlFor="aszf">Fogadd el!!!</label>
                    <input
                        type="checkbox"
                        id="aszf"
                        value={aszf}
                        onChange={(e) => { setAszf(e.target.checked) }}
                    />
                    <p className="error">{aszfError}</p>
                </div>

                <div>
                    <p>Válassz egyet!</p>

                    <input
                        type="radio"
                        name="language"
                        id="csharp"
                        value="csharp"
                        checked={language === "csharp"}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                    <label htmlFor="csharp">C#</label>
                    <br />

                    <input
                        type="radio"
                        name="language"
                        id="javascript"
                        value="javascript"
                        checked={language === "javascript"}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                    <label htmlFor="javascript">JavaScript</label>
                    <br />

                    <input
                        type="radio"
                        name="language"
                        id="python"
                        value="python"
                        checked={language === "python"}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                    <label htmlFor="python">python</label>
                    <p className="error">{languageError}</p>
                </div>

                <br />
                <button
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}