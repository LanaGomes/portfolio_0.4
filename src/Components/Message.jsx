import styles from "./Message.module.css";
import { useState, useEffect } from "react";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(
    () => {
      if (!msg) {
        setVisible(false);
        return;
      }

      setVisible(true);
      /*Se a msg for true a mensagem será visivel , se ela for false, será invisivel*/

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
    },
    [
      msg,
    ] /*useEffect sempre tem que estar condicionado a alguem, esse criterio vem aqui*/
  );

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}
export default Message;
