import { useState } from 'react';
import { useSelector } from 'react-redux'
import classes from '../styles/error.module.css'
import emailjs from "emailjs-com"
import PopupMess from '../layout/PopupMess';
export default function Contact () {
    const toggle = useSelector(state => state.toggle)
    
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [mess, setMess] = useState('');
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_98e4bzl', 'template_6y76nfg', e.target, 'ui6-nhJgOzBiVE9yI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          togglePopup()
          e.target.reset()
      };
    return (
        <div className={classes.about} style={{display:'flex', justifyContent: 'center'}}>
        <div className={classes.aboutCard}>
            <h4 className="mb-2">{toggle ? 'Personal life' : 'Написать на почту'}</h4>
            <form onSubmit={sendEmail} className='d-flex flex-column w-100 align-items-center'>
                <input 
                    style={{ width: '200px' }}
                    className="mb-2 p-2"
                    type="text" 
                    name='email' 
                    placeholder={toggle ? '' : "Введите свой email"}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    name='name'
                    className="mb-2 p-2"
                    type="text"
                    placeholder={toggle ? '' : "Введите своё имя"}
                    style={{ width: '200px' }}
                    onChange={(e) => setName(e.target.value)}
                /> 
                <input 
                    name='subject'
                    className="mb-2 p-2"
                    type="text"
                    placeholder={toggle ? '' : "Введите тему сообщения"}
                    style={{ width: '200px' }}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea 
                    name='message'
                    className="form-control mb-2 p-2"
                    type="text"
                    placeholder={toggle ? '' : "Введите сообщение"}
                    onChange={(e) => setMess(e.target.value)}
                />
                <input 
                className="p-2 w-25 btn btn-info text-white fw-bold" 
                type="submit"
                value="Send"
                disabled={subject.length < 3 || email.length < 11 || name.length < 3 || mess.length < 10}
                />
            </form>
        </div>
        {isOpen && <PopupMess
        content={<>
            <b>Сообщение отправлено</b>
            <p>В течении 2-4 дней вам ответят. Для более скорого ответа можете написать в <a href='https://t.me/DmitryErmilov0' target="_blank">Telegram</a>
            </p>
            <button className="btn btn-success fw-bold">Закрыть</button>
      </>}
      handleClose={togglePopup}
    />}
    </div>
    )
}