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

  function handleOnChange(event) {
    //console.log(event.target.value);
    //console.log(event.target.name);
    setUser({ ...user, [event.target.name]: event.target.value });
    validateEmail(event);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addDoc(colRef, user).then(() => {
      setUser({ name: "", email: "", message: "" });
    });
  }

  return (
    <div className="wrapperContact">
      <Message className={``} msg="alguma coisa" />
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
            type="text"
            required
            placeholder="Insira seu nome aqui"
          ></input>
        </label>
        <label>
          Mensagem
          <textarea
            maxLength={200}
            value={user.message}
            onChange={handleOnChange}
            name="message"
            id="message"
            type="text"
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
