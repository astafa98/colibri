import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogsitem";
const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dimas" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Tanya" },
  ];

  let dialogsElement = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u?" },
    { id: 3, message: "Yo" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElement}

        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
