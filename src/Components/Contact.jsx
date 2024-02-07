import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs,addDoc} from "firebase/firestore";

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
getDocs(colRef).then((snapshot) => {});

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    addDoc(colRef,{Name:, Email:, Message:})
  }

//Create a state variable to store the input field's value.
//Set an onChange event handler on the input field.
//In the event handler, assign event.target.value to the state variable.
//The state variable will contains the input field's value at any given time.


  return (
    <div>
      <form onSubmit={handleSubmit} className="wrapperForm add">
        <label>
          Name
          <input name="Name" type="text"></input>
        </label>
        <label>
          E-mail
          <input name="Email" type="text"></input>
        </label>
        <label>
          Mensagem
          <input name="Mensagem" type="text"></input>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
}
export default Contact;