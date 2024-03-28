import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { useState } from "react";

import Message from "./Message";

const firebaseConfig = {
  apiKey: "AIzaSyBB2jMxanwQOmXjEwAXiN5emPOqVl9bLDc",
  authDomain: "portfolio-lana.firebaseapp.com",
  projectId: "portfolio-lana",
  storageBucket: "portfolio-lana.appspot.com",
  messagingSenderId: "870774380186",
  appId: "1:870774380186:web:63bdbd894364ad1a8fb123",
  measurementId: "G-VHCCFM9TGM",
};

// init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//collection ref
const colRef = collection(db, "Messages");

//get the collection data
getDocs(colRef)
  .then((snapshot) => {
    let messages = [];
    snapshot.docs.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
    });
  })

  .catch((err) => {
    console.log(err.message);
  });

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ShowSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleOnChange(event) {
    //console.log(event.target.value);
    //console.log(event.target.name);
    setUser({ ...user, [event.target.name]: event.target.value });
    if (event.target.value <= 3) {
      this.setState({
        [event.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    addDoc(colRef, user)
      .then(() => {
        setUser({ name: "", email: "", message: "" });
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  return (
    <div id="contact" className="wrapperContact">
      {ShowSuccessMessage && (
        <Message
          type="success"
          msg="Mensagem enviada :)  Entrarei em contato em breve"
        />
      )}
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="wrapperForm add">
        <label>
          Name
          <input
            value={user.name}
            onChange={handleOnChange}
            name="name"
            type="text"
            required
            minLength="3"
            maxLength="80"
            placeholder="Insira seu nome aqui"
          ></input>
        </label>
        <label>
          E-mail
          <input
            value={user.email}
            onChange={handleOnChange}
            name="email"
            type="email"
            minLength="10"
            maxLength="50"
            required
            placeholder="Insira seu nome aqui"
          ></input>
        </label>
        <label>
          Mensagem
          <textarea
            value={user.message}
            onChange={handleOnChange}
            name="message"
            id="message"
            type="text"
            minLength={10}
            maxLength={200}
            placeholder="Insira sua mensagem aqui"
            required
          ></textarea>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
}
export default Contact;
