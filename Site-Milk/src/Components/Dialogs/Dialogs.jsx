import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        
        { id: 1, name: 'Sergii' },
        { id: 2, name: 'Alyona' },
        { id: 3, name: 'Zlata' },
        { id: 4, name: 'Damir' },
        { id: 5, name: 'Archi' },
        { id: 6, name: 'Elli' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'YO' },
        { id: 5, message: 'YO' }
    ]


    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = messages.map( m => <Message message={m.message} />);

return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
        { dialogsElements }
        </div>
        <div className={s.messages}>
        { messagesElements }
        </div>
    </div>
)
}
export default Dialogs;